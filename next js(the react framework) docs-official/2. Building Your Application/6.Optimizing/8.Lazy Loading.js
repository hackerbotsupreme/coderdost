// Lazy Loading
// Lazy loading in Next.js helps improve the initial loading performance of 
// an application by decreasing the amount of JavaScript needed to render a route.

// It allows you to defer loading of Client Components and imported libraries, 
// and only include them in the client bundle when they're needed. For example, 
// you might want to defer loading a modal until a user clicks to open it.

// There are two ways you can implement lazy loading in Next.js:

// Using Dynamic Imports with next/dynamic
// Using React.lazy() with Suspense
// By default, Server Components are automatically code split, and you can use 
// streaming to progressively send pieces of UI from the server to the client.
//  Lazy loading applies to Client Components.

// next/dynamic
// next/dynamic is a composite of React.lazy() and Suspense. It behaves the same
//  way in the app and pages directories to allow for incremental migration.

// Examples
// Importing Client Components
// app/page.js
'use client'
 
import { useState } from 'react'
import dynamic from 'next/dynamic'
 
// Client Components:
const ComponentA = dynamic(() => import('../components/A'))
const ComponentB = dynamic(() => import('../components/B'))
const ComponentC = dynamic(() => import('../components/C'), { ssr: false })
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)
  return (
    <div>
      {/* Load immediately, but in a separate client bundle */}
      <ComponentA />
      {/* Load on demand, only when/if the condition is met */}
      {showMore && <ComponentB />}
      <button onClick={() => setShowMore(!showMore)}>Toggle</button>
      {/* Load only on the client side */}
      <ComponentC />
    </div>
  )
}
// Skipping SSR
// When using React.lazy() and Suspense, Client Components will be 
// pre-rendered (SSR) by default.

// If you want to disable pre-rendering for a Client Component, you can use 
// the ssr option set to false:
const ComponentC = dynamic(() => import('../components/C'), { ssr: false })

// Importing Server Components
// If you dynamically import a Server Component, only the Client Components that are
//  children of the Server Component will be lazy-loaded - not the Server Component itself.

// app/page.js
import dynamic from 'next/dynamic'
// Server Component:
const ServerComponent = dynamic(() => import('../components/ServerComponent'))
export default function ServerComponentExample() {
  return (
    <div>
      <ServerComponent />
    </div>
  )
}
// Loading External Libraries
// External libraries can be loaded on demand using the import() function. This example
//  uses the external library fuse.js for fuzzy search. The module is only loaded on the
//  client after the user types in the search input.

// app/page.js
'use client'
 
import { useState } from 'react'
 
const names = ['Tim', 'Joe', 'Bel', 'Lee']
 
export default function Page() {
  const [results, setResults] = useState()
 
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={async (e) => {
          const { value } = e.currentTarget
          // Dynamically load fuse.js
          const Fuse = (await import('fuse.js')).default
          const fuse = new Fuse(names)
 
          setResults(fuse.search(value))
        }}
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </div>
  )
}
// Adding a custom loading component
// app/page.js

import dynamic from 'next/dynamic'
 
const WithCustomLoading = dynamic(
  () => import('../components/WithCustomLoading'),
  {
    loading: () => <p>Loading...</p>,
  }
)
 
export default function Page() {
  return (
    <div>
      {/* The loading component will be rendered while  <WithCustomLoading/> is loading */}
      <WithCustomLoading />
    </div>
  )
}
// Importing Named Exports
// To dynamically import a named export, you can return it from the Promise returned 
// by import() function:

// components/hello.js
'use client'
export function Hello() {
  return <p>Hello!</p>
}
// app/page.js
import dynamic from 'next/dynamic'
const ClientComponent = dynamic(() =>
  import('../components/hello').then((mod) => mod.Hello)
)
