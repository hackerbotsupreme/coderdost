//  <Link>
//  <Link> is a React component that extends the HTML <a> element to provide 
// prefetching and client-side navigation between routes. It is the primary way 
// to navigate between routes in Next.js.

// app/page.tsx
// TypeScript

import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
// Props
// Here's a summary of the props available for the Link Component:

// Prop	Example	Type	Required
// href	href="/dashboard"	String or Object	Yes
// replace	replace={false}	Boolean	-
// scroll	scroll={false}	Boolean	-
// prefetch	prefetch={false}	Boolean or null	-
// Good to know: <a> tag attributes such as className or target="_blank" can be 
// added to <Link> as props and will be passed to the underlying <a> element.

// href (required)
// The path or URL to navigate to.
{/* <Link href="/dashboard">Dashboard</Link> */ }
// href can also accept an object, for example:


// Navigate to /about?name=test
<Link
  href={{
    pathname: '/about',
    query: { name: 'test' },
  }}
>
  About
</Link>
// replace
// Defaults to false. When true, next/link will replace the current history state
//  instead of adding a new URL into the browser’s history stack.

// app/page.tsx
import Link from 'next/link'

export default function Page() {
  return (
    <Link href="/dashboard" replace>
      Dashboard
    </Link>
  )
}
// scroll
// Defaults to true. The default behavior of <Link> is to scroll to the top of 
// a new route or to maintain the scroll position for backwards and forwards 
// navigation. When false, next/link will not scroll to the top of the page after 
// a navigation.

// app/page.tsx
import Link from 'next/link'

export default function Page() {
  return (
    <Link href="/dashboard" scroll={false}>
      Dashboard
    </Link>
  )
}
// prefetch
// Prefetching happens when a <Link /> component enters the user's viewport 
// (initially or through scroll). Next.js prefetches and loads the linked route 
// (denoted by the href) and its data in the background to improve the performance 
// of client-side navigations. Prefetching is only enabled in production.

// null (default): Prefetch behavior depends on whether the route is static or 
// dynamic. For static routes, the full route will be prefetched (including all 
// its data). For dynamic routes, the partial route down to the nearest segment 
// with a loading.js boundary will be prefetched.
// true: The full route will be prefetched for both static and dynamic routes.
// false: Prefetching will never happen both on entering the viewport and on hover.

// app/page.tsx
import Link from 'next/link'

export default function Page() {
  return (
    <Link href="/dashboard" prefetch={false}>
      Dashboard
    </Link>
  )
}
// Examples
// Linking to Dynamic Routes
// For dynamic routes, it can be handy to use template literals to create 
// the link's path.

// For example, you can generate a list of links to the dynamic route 
//  app/blog/[slug]/page.js:

// app/blog/page.js
import Link from 'next/link'

function Page({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
// Middleware
// It's common to use Middleware for authentication or other purposes that involve 
// rewriting the user to a different page. In order for the <Link /> component to 
// properly prefetch links with rewrites via Middleware, you need to tell Next.js 
// both the URL to display and the URL to prefetch. This is required to avoid 
// un-necessary fetches to middleware to know the correct route to prefetch.

// For example, if you want to serve a /dashboard route that has authenticated and 
// visitor views, you may add something similar to the following in your Middleware 
// to redirect the user to the correct page:

// middleware.js
export function middleware(req) {
  const nextUrl = req.nextUrl
  if (nextUrl.pathname === '/dashboard') {
    if (req.cookies.authToken) {
      return NextResponse.rewrite(new URL('/auth/dashboard', req.url))
    } else {
      return NextResponse.rewrite(new URL('/public/dashboard', req.url))
    }
  }
}
// In this case, you would want to use the following code in your <Link /> component:


import Link from 'next/link'
import useIsAuthed from './hooks/useIsAuthed'

export default function Page() {
  const isAuthed = useIsAuthed()
  const path = isAuthed ? '/auth/dashboard' : '/public/dashboard'
  return (
    <Link as="/dashboard" href={path}>
      Dashboard
    </Link>
  )
}
