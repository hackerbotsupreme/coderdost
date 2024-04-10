// permanentRedirect
// The permanentRedirect function allows you to redirect the user to another URL. 
// permanentRedirect can be used in Server Components, Client Components, 
// Route Handlers, and Server Actions.

// When used in a streaming context, this will insert a meta tag to emit the redirect 
// on the client side. When used in a server action, it will serve a 303 HTTP redirect
//  response to the caller. Otherwise, it will serve a 308 (Permanent) HTTP redirect 
// response to the caller.

// If a resource doesn't exist, you can use the notFound function instead.

// Good to know: If you prefer to return a 307 (Temporary) HTTP redirect instead 
// of 308 (Permanent), you can use the redirect function instead.

// Parameters
// The permanentRedirect function accepts two arguments:
permanentRedirect(path, type)
// Parameter	Type	Description
// path	string	The URL to redirect to. Can be a relative or absolute path.
// type	'replace' (default) or 'push' (default in Server Actions)	The type of 
// redirect to perform.
// By default, permanentRedirect will use push (adding a new entry to the browser 
// history stack) in Server Actions and replace (replacing the current URL in the 
// browser history stack) everywhere else. You can override this behavior by 
// specifying the type parameter.

// The type parameter has no effect when used in Server Components.

// Returns
// permanentRedirect does not return any value.

// Example
// Invoking the permanentRedirect() function throws a NEXT_REDIRECT error 
// and terminates rendering of the route segment in which it was thrown.

// app/team/[id]/page.js

import { permanentRedirect } from 'next/navigation'

async function fetchTeam(id) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}

export default async function Profile({ params }) {
  const team = await fetchTeam(params.id)
  if (!team) {
    permanentRedirect('/login')
  }
  // ...
}
// Good to know: permanentRedirect does not require you to use return 
// permanentRedirect() as it uses the TypeScript never type.
