
// Patterns and Best Practices
// There are a few recommended patterns and best practices for fetching data in 
// React and Next.js.

// Fetching data on the server
// Whenever possible, we recommend fetching data on the server with Server Components.
//  This allows you to:
        // Have direct access to backend data resources (e.g. databases).
        // Keep your application more secure by preventing sensitive information, such 
        // as access tokens and API keys, from being exposed to the client.
        // Fetch data and render in the same environment. This reduces both 
        // the back-and-forth communication between client and server, as well as 
        // the work on the main thread(https://vercel.com/blog/how-react-18-improves-application-performance) on the client.
        // Perform multiple data fetches with single round-trip instead of multiple 
        // individual requests on the client.
        // Reduce client-server waterfalls.(https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-and-sequential-data-fetching)
        // Depending on your region, data fetching can also happen closer to your data 
        // source, reducing latency and improving performance.
// Then, you can mutate or update data with Server Actions(https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).

// Fetching data where it's needed
// If you need to use the same data (e.g. current user) in multiple components in 
// a tree, you do not have to fetch data globally, nor forward props between 
// components. Instead, you can use fetch or React cache in the component that
//  needs the data without worrying about the performance implications of making 
// multiple requests for the same data.
// This is possible because fetch requests are automatically memoized. Learn more 
// about request memoization(https://nextjs.org/docs/app/building-your-application/caching#request-memoization)

// Good to know: This also applies to layouts, since it's not possible to pass data
//  between a parent layout and its children.

// Streaming
// Streaming and Suspense(https://react.dev/reference/react/Suspense) are React features that allow you to progressively render 
// and incrementally stream rendered units of the UI to the client.

// With Server Components and nested layouts(https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts), you're able to instantly render parts 
// of the page that do not specifically require data, and show a loading state(https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) for 
// parts of the page that are fetching data. This means the user does not have to 
// wait for the entire page to load before they can start interacting with it.

// Server Rendering with Streaming
// To learn more about Streaming and Suspense, see the Loading UI(https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) and Streaming 
// and Suspense pages(https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense).

// Parallel and sequential data fetching
// When fetching data inside React components, you need to be aware of two data 
// fetching patterns: Parallel and Sequential.

// Sequential and Parallel Data Fetching
// With sequential data fetching, requests in a route are dependent on each other 
// and therefore create waterfalls. There may be cases where you want this pattern
//  because one fetch depends on the result of the other, or you want a condition 
// to be satisfied before the next fetch to save resources. However, this behavior 
// can also be unintentional and lead to longer loading times.

// With parallel data fetching, requests in a route are eagerly initiated and will
//  load data at the same time. This reduces client-server waterfalls and the total 
// time it takes to load data.

// Sequential Data Fetching
// If you have nested components, and each component fetches its own data, then data 
// fetching will happen sequentially if those data requests are different (this 
// doesn't apply to requests for the same data as they are automatically memoized).

// For example, the Playlists component will only start fetching data once the Artist
//  component has finished fetching data because Playlists depends on the artistID prop:

// app/artist/[username]/page.tsx
// // ...

async function Playlists({ artistID }: { artistID: string }) {
    // Wait for the playlists
    const playlists = await getArtistPlaylists(artistID)

    return (
        <ul>
            {playlists.map((playlist) => (
                <li key={playlist.id}>{playlist.name}</li>
            ))}
        </ul>
    )
}

export default async function Page({
    params: { username },
}: {
    params: { username: string }
}) {
    // Wait for the artist
    const artist = await getArtist(username)

    return (
        <>
            <h1>{artist.name}</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Playlists artistID={artist.id} />
            </Suspense>
        </>
    )
}
// In cases like this, you can use loading.js (for route segments)(https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) or
//  React <Suspense> (for nested components)(https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense) to show an instant loading 
// state while React streams in the result.

// This will prevent the whole route from being blocked by data fetching, 
// and the user will be able to interact with the parts of the page that 
// are not blocked.

// Blocking Data Requests:
// An alternative approach to prevent waterfalls is to fetch data globally, 
// at the root of your application, but this will block rendering for all route
// segments beneath it until the data has finished loading. This can be described 
// as "all or nothing" data fetching. Either you have the entire data for your page
// or application, or none.

// Any fetch requests with await will block rendering and data fetching for 
// the entire tree beneath it, unless they are wrapped in a <Suspense> boundary 
// or loading.js is used. Another alternative is to use parallel data fetching 
// or the preload pattern.

// Parallel Data Fetching
// To fetch data in parallel, you can eagerly initiate requests by defining them 
// outside the components that use the data, then calling them from inside the 
// component. This saves time by initiating both requests in parallel, however, 
// the user won't see the rendered result until both promises are resolved.

// In the example below, the getArtist and getArtistAlbums functions are defined 
// outside the Page component, then called inside the component, and we wait for
//  both promises to resolve:
// app/artist/[username]/page.tsx

import Albums from './albums'
async function getArtist(username: string) {
    const res = await fetch(`https://api.example.com/artist/${username}`)
    return res.json()
}
async function getArtistAlbums(username: string) {
    const res = await fetch(`https://api.example.com/artist/${username}/albums`)
    return res.json()
}
export default async function Page({
    params: { username },
}: {
    params: { username: string }
}) {
    // Initiate both requests in parallel
    const artistData = getArtist(username)
    const albumsData = getArtistAlbums(username)
    // Wait for the promises to resolve
    const [artist, albums] = await Promise.all([artistData, albumsData])
    return (
        <>
            <h1>{artist.name}</h1>
            <Albums list={albums}></Albums>
        </>
    )
}
// To improve the user experience, you can add a Suspense Boundary to break 
// up the rendering work and show part of the result as soon as possible.

// Preloading Data
// Another way to prevent waterfalls is to use the preload pattern. You can 
// optionally create a preload function to further optimize parallel data fetching. 
// With this approach, you don't have to pass promises down as props. The preload 
// function can also have any name as it's a pattern, not an API.

// components/Item.tsx
import { getItem } from '@/utils/get-item'
export const preload = (id: string) => {
    // void evaluates the given expression and returns undefined
    // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
    void getItem(id)
}
export default async function Item({ id }: { id: string }) {
    const result = await getItem(id)
    // ...
}

// app/item/[id]/page.tsx
import Item, { preload, checkIsAvailable } from '@/components/Item'

export default async function Page({
    params: { id },
}: {
    params: { id: string }
}) {
    // starting loading item data
    preload(id)
    // perform another asynchronous task
    const isAvailable = await checkIsAvailable()
    return isAvailable ? <Item id={id} /> : null
}

// Using React cache, server-only, and the Preload Pattern
// You can combine the cache function, the preload pattern, and the server-only 
// package to create a data fetching utility that can be used throughout your app.

// utils/get-item.ts
import { cache } from 'react'
import 'server-only'

export const preload = (id: string) => {
    void getItem(id)
}

export const getItem = cache(async (id: string) => {
    // ...
})
// With this approach, you can eagerly fetch data, cache responses, and guarantee 
// that this data fetching only happens on the server.(https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment)

// The utils/get-item exports can be used by Layouts, Pages, or other components 
// to give them control over when an item's data is fetched.

// Good to know:
// We recommend using the server-only package(https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment) to make sure server data fetching 
// functions are never used on the client.


// Preventing sensitive data from being exposed to the client
// We recommend using React's taint APIs, taintObjectReference(https://react.dev/reference/react/experimental_taintObjectReference) and taintUniqueValue(https://react.dev/reference/react/experimental_taintUniqueValue),
//  to prevent whole object instances or sensitive values from being passed to the client.

// To enable tainting in your application, set the Next.js Config experimental.taint 
// option to true:

// next.config.js
module.exports = {
    experimental: {
        taint: true,
    },
}
// Then pass the object or value you want to taint to the 
// experimental_taintObjectReference or experimental_taintUniqueValue functions:

// app/utils.ts
import { queryDataFromDB } from './api'
import {
    experimental_taintObjectReference,
    experimental_taintUniqueValue,
} from 'react'

export async function getUserData() {
    const data = await queryDataFromDB()
    experimental_taintObjectReference(
        'Do not pass the whole user object to the client',
        data
    )
    experimental_taintUniqueValue(
        "Do not pass the user's phone number to the client",
        data,
        data.phoneNumber
    )
    return data
}

// app/page.tsx
import { getUserData } from './data'

export async function Page() {
    const userData = getUserData()
    return (
        <ClientComponent
            user={userData} // this will cause an error because of taintObjectReference
            phoneNumber={userData.phoneNumber} // this will cause an error because of taintUniqueValue
        />
    )
}