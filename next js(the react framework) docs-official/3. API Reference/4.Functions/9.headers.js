// headers
// The headers function allows you to read the HTTP incoming request headers 
// from a Server Component.

// headers()
// This API extends the Web Headers API. It is read-only, meaning you cannot
//  set / delete the outgoing request headers.

// app/page.tsx
import { headers } from 'next/headers'
export default function Page() {
  const headersList = headers()
  const referer = headersList.get('referer')
  return <div>Referer: {referer}</div>
}
// Good to know:
// headers() is a Dynamic Function whose returned values cannot be known ahead 
// of time. Using it in a layout or page will opt a route into dynamic rendering 
// at request time.

// API Reference
const headersList = headers()
// Parameters
// headers does not take any parameters.

// Returns
// headers returns a read-only Web Headers object.

// Headers.entries(): Returns an iterator allowing to go through all 
// key/value pairs contained in this object.

// Headers.forEach(): Executes a provided function once for each key/value 
// pair in this Headers object.

// Headers.get(): Returns a String sequence of all the values of a header within 
// a Headers object with a given name.

// Headers.has(): Returns a boolean stating whether a Headers object contains 
// a certain header.

// Headers.keys(): Returns an iterator allowing you to go through all keys of 
// the key/value pairs contained in this object.

// Headers.values(): Returns an iterator allowing you to go through all values 
// of the key/value pairs contained in this object.

// Examples
// Usage with Data Fetching
// headers() can be used in combination with Suspense for Data Fetching.

// app/page.js
import { Suspense } from 'react'
import { headers } from 'next/headers'
async function User() {
  const authorization = headers().get('authorization')
  const res = await fetch('...', {
    headers: { authorization }, // Forward the authorization header
  })
  const user = await res.json()
  return <h1>{user.name}</h1>
}
export default function Page() {
  return (
    <Suspense fallback={null}>
      <User />
    </Suspense>
  )
}
// IP Address
// headers() can be used to get the IP address of the client.

// app/page.js
import { Suspense } from 'react'
import { headers } from 'next/headers'
function IP() {
  const FALLBACK_IP_ADDRESS = '0.0.0.0'
  const forwardedFor = headers().get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
  }
  return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
}
export default function Page() {
  return (
    <Suspense fallback={null}>
      <IP />
    </Suspense>
  )
}
// In addition to x-forwarded-for, headers() can also read:
// x-real-ip
// x-forwarded-host
// x-forwarded-port
// x-forwarded-proto