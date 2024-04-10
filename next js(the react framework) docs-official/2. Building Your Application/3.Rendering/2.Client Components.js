// Client Components
// Client Components allow you to write interactive UI that can be rendered on 
// the client at request time. In Next.js, client rendering is opt-in, meaning 
// you have to explicitly decide what components React should render on the client.


// Benefits of Client Rendering
// There are a couple of benefits to doing the rendering work on the client, including:

// Interactivity: Client Components can use state, effects, and event listeners, 
// meaning they can provide immediate feedback to the user and update the UI.
// Browser APIs: Client Components have access to browser APIs, like geolocation 
// or localStorage, allowing you to build UI for specific use cases.

// Using Client Components in Next.js
// To use Client Components, you can add the React "use client" directive at 
// the top of a file, above your imports.

// "use client" is used to declare a boundary between a Server and Client Component
//  modules. This means that by defining a "use client" in a file, all other modules
//  imported into it, including child components, are considered part of the client
//  bundle.

// app/counter.tsx
'use client'
import { useState } from 'react'
export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
// The diagram below shows that using onClick and useState in a nested component 
// (toggle.js) will cause an error if the "use client" directive is not defined. 
// This is because, by default, the components are rendered on the server where 
// these APIs are not available. By defining the "use client" directive in toggle.js,
//  you can tell React to render the component and its children on the client,
//  where the APIs are available.

// Use Client Directive and Network Boundary

// Defining multiple use client entry points:
// You can define multiple "use client" entry points in your React Component tree. 
// This allows you to split your application into multiple client bundles 
// (or branches).
// However, "use client" doesn't need to be defined in every component that needs 
// to be rendered on the client. Once you define the boundary, all child components
//  and modules imported into it are considered part of the client bundle.

// How are Client Components Rendered?
// In Next.js, Client Components are rendered differently depending on whether
//  the request is part of a full page load (an initial visit to your application
//  or a page reload triggered by a browser refresh) or a subsequent navigation.

// Full page load
// To optimize the initial page load, Next.js will use React's APIs to render 
// a static HTML preview on the server for both Client and Server Components. 
// This means, when the user first visits your application, they will see 
// the content of the page immediately, without having to wait for the client
//  to download, parse, and execute the Client Component JavaScript bundle.

// On the server:
// React renders Server Components into a special data format called 
// the React Server Component Payload (RSC Payload), which includes references 
// to Client Components.

// Next.js uses the RSC Payload and Client Component JavaScript instructions 
// to render HTML for the route on the server.

// Then, on the client:

// The HTML is used to immediately show a fast non-interactive initial preview 
// of the route.
// The React Server Components Payload is used to reconcile the Client and 
// Server Component trees, and update the DOM.
// The JavaScript instructions are used to hydrate Client Components and make 
// their UI interactive.

// What is hydration?(https://react.dev/reference/react-dom/client/hydrateRoot)
// Hydration is the process of attaching event listeners to the DOM, to make 
// the static HTML interactive. Behind the scenes, hydration is done with 
// the hydrateRoot React API.

// Subsequent Navigations
// On subsequent navigations, Client Components are rendered entirely on the 
// client, without the server-rendered HTML.

// This means the Client Component JavaScript bundle is downloaded and parsed. 
// Once the bundle is ready, React will use the RSC Payload to reconcile 
// the Client and Server Component trees, and update the DOM.

// Going back to the Server Environment
// Sometimes, after you've declared the "use client" boundary, you may want to go
//  back to the server environment. For example, you may want to reduce the client
//  bundle size, fetch data on the server, or use an API that is only available 
// on the server.

// You can keep code on the server even though it's theoretically nested inside
//  Client Components by interleaving Client and Server Components and Server 
// Actions. See the Composition Patterns page for more information.
