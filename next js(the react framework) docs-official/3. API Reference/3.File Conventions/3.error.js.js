// error.js
// An error file defines an error UI boundary for a route segment.

// It is useful for catching unexpected errors that occur in Server Components 
// and Client Components and displaying a fallback UI.

// app/dashboard/error.tsx
'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
// Props
// error
// An instance of an Error object forwarded to the error.js Client Component.

// error.message
// The error message.

// For errors forwarded from Client Components, this will be the original 
// Error's message.
// For errors forwarded from Server Components, this will be a generic error 
// message to avoid leaking sensitive details. errors.digest can be used to 
// match the corresponding error in server-side logs.

// error.digest
// An automatically generated hash of the error thrown in a Server Component. 
// It can be used to match the corresponding error in server-side logs.

// reset
// A function to reset the error boundary. When executed, the function will 
// try to re-render the Error boundary's contents. If successful, the fallback 
// error component is replaced with the result of the re-render.

// Can be used to prompt the user to attempt to recover from the error.

// Good to know:
// error.js boundaries must be Client Components.
// In Production builds, errors forwarded from Server Components will be stripped 
// of specific error details to avoid leaking sensitive information.
// An error.js boundary will not handle errors thrown in a layout.js component in 
// the same segment because the error boundary is nested inside that layouts component.
// To handle errors for a specific layout, place an error.js file in the layouts parent segment.
// To handle errors within the root layout or template, use a variation of 
// error.js called app/global-error.js.

// global-error.js
// To specifically handle errors in root layout.js, use a variation of error.js
//  called app/global-error.js located in the root app directory.

// app/global-error.tsx
'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
// Good to know:
// global-error.js replaces the root layout.js when active and so must define 
// its own <html> and <body> tags.
// While designing error UI, you may find it helpful to use the React Developer
//  Tools to manually toggle Error boundaries.

// not-found.js
// The not-found file is used to render UI when the notFound() function is 
// thrown within a route segment.
