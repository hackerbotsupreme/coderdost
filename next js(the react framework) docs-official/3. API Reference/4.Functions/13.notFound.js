// notFound
// The notFound function allows you to render the not-found file within a route 
// segment as well as inject a <meta name="robots" content="noindex" /> tag.

// notFound()
// Invoking the notFound() function throws a NEXT_NOT_FOUND error and terminates
//  rendering of the route segment in which it was thrown. Specifying a not-found file
//  allows you to gracefully handle such errors by rendering a Not Found UI within 
// the segment.

// app/user/[id]/page.js

import { notFound } from 'next/navigation'

async function fetchUser(id) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}

export default async function Profile({ params }) {
  const user = await fetchUser(params.id)

  if (!user) {
    notFound()
  }

  // ...
}
// Good to know: notFound() does not require you to use return notFound() due 
// to using the TypeScript never type.
