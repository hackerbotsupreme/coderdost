// NextResponse
// NextResponse extends the Web Response API with additional convenience methods.

// cookies
// Read or mutate the Set-Cookie header of the response.
set(name, value)

// Given a name, set a cookie with the given value on the response.

// Given incoming request /home
let response = NextResponse.next()
// Set a cookie to hide the banner
response.cookies.set('show-banner', 'false')
// Response will have a `Set-Cookie:show-banner=false;path=/home` header
return response
// get(name)
// Given a cookie name, return the value of the cookie. If the cookie is not found, 
// undefined is returned. If multiple cookies are found, the first one is returned.
// Given incoming request /home
let response = NextResponse.next()
// { name: 'show-banner', value: 'false', Path: '/home' }
response.cookies.get('show-banner')
getAll()
// Given a cookie name, return the values of the cookie. If no name is given, 
// return all cookies on the response.

// Given incoming request /home
let response = NextResponse.next()
// [
//   { name: 'experiments', value: 'new-pricing-page', Path: '/home' },
//   { name: 'experiments', value: 'winter-launch', Path: '/home' },
// ]
response.cookies.getAll('experiments')
// Alternatively, get all cookies for the response
response.cookies.getAll()
delete(name)
// Given a cookie name, delete the cookie from the response.

// Given incoming request /home
let response = NextResponse.next()
// Returns true for deleted, false is nothing is deleted
response.cookies.delete('experiments')
json()
// Produce a response with the given JSON body.

// app/api/route.ts
import { NextResponse } from 'next/server'
export async function GET(request: Request) {
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}
redirect()
// Produce a response that redirects to a URL.

import { NextResponse } from 'next/server'
return NextResponse.redirect(new URL('/new', request.url))
// The URL can be created and modified before being used in the NextResponse.redirect() method. For example, you can use the request.nextUrl property to get the current URL, and then modify it to redirect to a different URL.

import { NextResponse } from 'next/server'
 
// Given an incoming request...
const loginUrl = new URL('/login', request.url)
// Add ?from=/incoming-url to the /login URL
loginUrl.searchParams.set('from', request.nextUrl.pathname)
// And redirect to the new URL
return NextResponse.redirect(loginUrl)
rewrite()
// Produce a response that rewrites (proxies) the given URL while 
// preserving the original URL.

import { NextResponse } from 'next/server'
// Incoming request: /about, browser shows /about
// Rewritten request: /proxy, browser shows /about
return NextResponse.rewrite(new URL('/proxy', request.url))
// next()
// The next() method is useful for Middleware, as it allows you to return early
//  and continue routing.
import { NextResponse } from 'next/server'
return NextResponse.next()
// You can also forward headers when producing the response:
import { NextResponse } from 'next/server'
 
// Given an incoming request...
const newHeaders = new Headers(request.headers)
// Add a new header
newHeaders.set('x-version', '123')
// And produce a response with the new headers
return NextResponse.next({
  request: {
    // New request headers
    headers: newHeaders,
  },
})
