// App Router
// ...
// Data Fetching
// Fetching, Caching, and Revalidating
// Data Fetching, Caching, and Revalidating
// Data fetching is a core part of any application. This page goes through how 
// you can fetch, cache, and revalidate data in React and Next.js.

// There are four ways you can fetch data:

// On the server, with fetch
// On the server, with third-party libraries
// On the client, via a Route Handler
// On the client, with third-party libraries.
// Fetching Data on the Server with fetch
// Next.js extends the native fetch Web API to allow you to configure the caching 
// and revalidating behavior for each fetch request on the server. React extends 
// fetch to automatically memoize fetch requests while rendering a React component tree.

// You can use fetch with async/await in Server Components, in Route Handlers, 
// and in Server Actions.

// For example:

// app/page.tsx

// TypeScript

async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main></main>
}
// Good to know:

// Next.js provides helpful functions you may need when fetching data in Server 
// Components such as cookies and headers. These will cause the route to be 
// dynamically rendered as they rely on request time information.
// In Route handlers, fetch requests are not memoized as Route Handlers are not 
// part of the React component tree.
// To use async/await in a Server Component with TypeScript, you'll need to use 
// TypeScript 5.1.3 or higher and @types/react 18.2.8 or higher.

// Caching Data
// Caching stores data so it doesn't need to be re-fetched from your data source 
// on every request.

// By default, Next.js automatically caches the returned values of fetch in 
// the Data Cache on the server. This means that the data can be fetched at build 
// time or request time, cached, and reused on each data request.


// // 'force-cache' is the default, and can be omitted
// fetch('https://...', { cache: 'force-cache' })
// fetch requests that use the POST method are also automatically cached. Unless 
// it's inside a Route Handler that uses the POST method, then it will not be cached.

// What is the Data Cache?

// The Data Cache is a persistent HTTP cache. Depending on your platform, the cache can scale automatically and be shared across multiple regions.

// Learn more about the Data Cache.

// Revalidating Data
// Revalidation is the process of purging the Data Cache and re-fetching the latest
//  data. This is useful when your data changes and you want to ensure you show the 
// latest information.

// Cached data can be revalidated in two ways:

// Time-based revalidation: Automatically revalidate data after a certain amount of 
// time has passed. This is useful for data that changes infrequently and freshness 
// is not as critical.
// On-demand revalidation: Manually revalidate data based on an event (e.g. form 
// submission). On-demand revalidation can use a tag-based or path-based approach 
// to revalidate groups of data at once. This is useful when you want to ensure
//  the latest data is shown as soon as possible (e.g. when content from your 
// headless CMS is updated).

// Time-based Revalidation
// To revalidate data at a timed interval, you can use the next.revalidate option 
// of fetch to set the cache lifetime of a resource (in seconds).


fetch('https://...', { next: { revalidate: 3600 } })
// Alternatively, to revalidate all fetch requests in a route segment, you can 
// use the Segment Config Options.

// layout.js | page.js
export const revalidate = 3600 // revalidate at most every hour
// If you have multiple fetch requests in a statically rendered route, and each has
//  a different revalidation frequency. The lowest time will be used for all requests.
//  For dynamically rendered routes, each fetch request will be revalidated independently.

// Learn more about time-based revalidation.

// On-demand Revalidation
// Data can be revalidated on-demand by path (revalidatePath) or by cache tag 
// (revalidateTag) inside a Server Action or Route Handler.

// Next.js has a cache tagging system for invalidating fetch requests across routes.

// When using fetch, you have the option to tag cache entries with one or more tags.
// Then, you can call revalidateTag to revalidate all entries associated with that tag.
// For example, the following fetch request adds the cache tag collection:

// app/page.tsx

// TypeScript

export default async function Page() {
  const res = await fetch('https://...', { next: { tags: ['collection'] } })
  const data = await res.json()
  // ...
}
// You can then revalidate this fetch call tagged with collection by calling 
// revalidateTag in a Server Action:

// app/actions.ts

// TypeScript

'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function action() {
  revalidateTag('collection')
}
// Learn more about on-demand revalidation.

// Error handling and revalidation
// If an error is thrown while attempting to revalidate data, the last successfully 
// generated data will continue to be served from the cache. On the next subsequent request, Next.js will retry revalidating the data.

// Opting out of Data Caching
// fetch requests are not cached if:

// The cache: 'no-store' is added to fetch requests.
// The revalidate: 0 option is added to individual fetch requests.
// The fetch request is inside a Router Handler that uses the POST method.
// The fetch request comes after the usage of headers or cookies.
// The const dynamic = 'force-dynamic' route segment option is used.
// The fetchCache route segment option is configured to skip cache by default.
// The fetch request uses Authorization or Cookie headers and there's an uncached request above it in the component tree.
// Individual fetch Requests
// To opt out of caching for individual fetch requests, you can set the cache 
// option in fetch to 'no-store'. This will fetch data dynamically, on every request.

// layout.js | page.js

fetch('https://...', { cache: 'no-store' })
// View all the available cache options in the fetch API reference.

// Multiple fetch Requests
// If you have multiple fetch requests in a route segment (e.g. a Layout or Page), 
// you can configure the caching behavior of all data requests in the segment using
//  the Segment Config Options.

// However, we recommend configuring the caching behavior of each fetch request 
// individually. This gives you more granular control over the caching behavior.

// Fetching data on the Server with third-party libraries
// In cases where you're using a third-party library that doesn't support or expose 
// fetch (for example, a database, CMS, or ORM client), you can configure the caching
//  and revalidating behavior of those requests using the Route Segment Config Option
//  and React's cache function.

// Whether the data is cached or not will depend on whether the route segment is 
// statically or dynamically rendered. If the segment is static (default), the output
//  of the request will be cached and revalidated as part of the route segment. If 
// the segment is dynamic, the output of the request will not be cached and will be 
// re-fetched on every request when the segment is rendered.

// You can also use the experimental unstable_cache API.

// Example
// In the example below:

// The React cache function is used to memoize data requests.
// The revalidate option is set to 3600 in the Layout and Page segments, meaning 
// the data will be cached and revalidated at most every hour.
// app/utils.ts

// TypeScript

import { cache } from 'react'
 
export const getItem = cache(async (id: string) => {
  const item = await db.item.findUnique({ id })
  return item
})
// Although the getItem function is called twice, only one query will be made to 
// the database.

// app/item/[id]/layout.tsx

// TypeScript

import { getItem } from '@/utils/get-item'
 
export const revalidate = 3600 // revalidate the data at most every hour
 
export default async function Layout({
  params: { id },
}: {
  params: { id: string }
}) {
  const item = await getItem(id)
  // ...
}
// app/item/[id]/page.tsx

// TypeScript

import { getItem } from '@/utils/get-item'
 
export const revalidate = 3600 // revalidate the data at most every hour
 
export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const item = await getItem(id)
  // ...
}
// Fetching Data on the Client with Route Handlers
// If you need to fetch data in a client component, you can call a Route Handler 
// from the client. Route Handlers execute on the server and return the data to 
// the client. This is useful when you don't want to expose sensitive information 
// to the client, such as API tokens.

// See the Route Handler documentation for examples.

// Server Components and Route Handlers

// Since Server Components render on the server, you don't need to call a Route
//  Handler from a Server Component to fetch data. Instead, you can fetch the data 
// directly inside the Server Component.

// Fetching Data on the Client with third-party libraries
// You can also fetch data on the client using a third-party library such as SWR 
// or TanStack Query. These libraries provide their own APIs for memoizing requests, 
// caching, revalidating, and mutating data.

// Future APIs:

// use is a React function that accepts and handles a promise returned by a function.
//  Wrapping fetch in use is currently not recommended in Client Components and may
//  trigger multiple re-renders. Learn more about use in the React docs.

// Previous
// Data Fetching
// Next
// Server Actions and Mutations