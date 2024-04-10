// revalidatePath
// revalidatePath allows you to purge cached data on-demand for a specific path.

// Good to know:
// revalidatePath is available in both Node.js and Edge runtimes.
// revalidatePath only invalidates the cache when the included path is next visited. 
// This means calling revalidatePath with a dynamic route segment will not immediately
//  trigger many revalidations at once. The invalidation only happens when the path 
// is next visited.

// Currently, revalidatePath invalidates all the routes in the client-side Router 
// Cache. This behavior is temporary and will be updated in the future to apply only
//  to the specific path.

// Using revalidatePath invalidates only the specific path in the server-side Route Cache.
// Parameters

// revalidatePath(path: string, type?: 'page' | 'layout'): void;
// path: Either a string representing the filesystem path associated with the data 
// you want to revalidate (for example, /product/[slug]/page), or the literal route
//  segment (for example, /product/123). Must be less than 1024 characters. This 
// value is case-sensitive.

// type: (optional) 'page' or 'layout' string to change the type of path to 
// revalidate. If path contains a dynamic segment (for example, /product/[slug]/page), 
// this parameter is required.


// Returns
// revalidatePath does not return any value.

// Examples
// Revalidating A Specific URL

import { revalidatePath } from 'next/cache'
revalidatePath('/blog/post-1')
// This will revalidate one specific URL on the next page visit.

// Revalidating A Page Path

import { revalidatePath } from 'next/cache'
revalidatePath('/blog/[slug]', 'page')
// or with route groups
revalidatePath('/(main)/post/[slug]', 'page')
// This will revalidate any URL that matches the provided page file on the next 
// page visit. This will not invalidate pages beneath the specific page. 
// For example, /blog/[slug] won't invalidate /blog/[slug]/[author].

// Revalidating A Layout Path
import { revalidatePath } from 'next/cache'
revalidatePath('/blog/[slug]', 'layout')
// or with route groups
revalidatePath('/(main)/post/[slug]', 'layout')

// This will revalidate any URL that matches the provided layout file on the next page
//  visit. This will cause pages beneath with the same layout to revalidate on 
// the next visit. For example, in the above case, /blog/[slug]/[another] would 
// also revalidate on the next visit.

// Revalidating All Data
import { revalidatePath } from 'next/cache'
revalidatePath('/', 'layout')
// This will purge the Client-side Router Cache, and revalidate the Data Cache 
// on the next page visit.

// Server Action
// app/actions.ts
'use server'
import { revalidatePath } from 'next/cache'
export default async function submit() {
  await submitForm()
  revalidatePath('/')
}
// Route Handler
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path')
  if (path) {
    revalidatePath(path)
    return Response.json({ revalidated: true, now: Date.now() })
  }
  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  })
}
