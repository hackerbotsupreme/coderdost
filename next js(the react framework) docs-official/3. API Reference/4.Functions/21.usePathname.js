// usePathname
// usePathname is a Client Component hook that lets you read 
// the current URL's pathname.

// app/example-client-component.tsx
'use client'
import { usePathname } from 'next/navigation' 
export default function ExampleClientComponent() {
  const pathname = usePathname()
  return <p>Current pathname: {pathname}</p>
}
// usePathname intentionally requires using a Client Component. 
// It's important to note Client Components are not a de-optimization. 
// They are an integral part of the Server Components architecture.

// For example, a Client Component with usePathname will be rendered into 
// HTML on the initial page load. When navigating to a new route,
//  this component does not need to be re-fetched. Instead, the component 
// is downloaded once (in the client JavaScript bundle), and re-renders 
// based on the current state.

// Good to know:

// Reading the current URL from a Server Component is not supported. This design 
// is intentional to support layout state being preserved across page navigations.

// Compatibility mode:
// usePathname can return null when a fallback route is being rendered or when 
// a pages directory page has been automatically statically optimized by Next.js 
// and the router is not ready.
// Next.js will automatically update your types if it detects both an app 
// and pages directory in your project.


// Parameters
const pathname = usePathname()
// usePathname does not take any parameters.

// Returns
// usePathname returns a string of the current URL's pathname. For example:

// URL	Returned value
// /	'/'
// /dashboard	'/dashboard'
// /dashboard?v=2	'/dashboard'
// /blog/hello-world	'/blog/hello-world'
// Examples
// Do something in response to a route change
// app/example-client-component.tsx
'use client'
import { usePathname, useSearchParams } from 'next/navigation' 
function ExampleClientComponent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    // Do something here...
  }, [pathname, searchParams])
}
