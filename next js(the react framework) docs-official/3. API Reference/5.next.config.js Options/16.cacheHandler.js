// cacheHandler
// Custom Next.js Cache Handler
// In Next.js, the default cache handler for the Pages and App Router uses 
// the filesystem cache. This requires no configuration, however, you can 
// customize the cache handler by using the cacheHandler field in next.config.js.

// next.config.js

module.exports = {
  cacheHandler: require.resolve('./cache-handler.js'),
  cacheMaxMemorySize: 0, // disable default in-memory caching
}
// View an example of a custom cache handler and learn more about implementation.

// API Reference
// The cache handler can implement the following methods: get, set, and revalidateTag.

// get()
// Parameter	Type	Description
// key	string	The key to the cached value.
// Returns the cached value or null if not found.

// set()
// Parameter	Type	Description
// key	string	The key to store the data under.
// data	Data or null	The data to be cached.
// ctx	{ tags: [] }	The cache tags provided.
// Returns Promise<void>.

// revalidateTag()
// Parameter	Type	Description
// tag	string	The cache tag to revalidate.
// Returns Promise<void>. Learn more about revalidating data or the revalidateTag() function.

// Good to know:

// revalidatePath is a convenience layer on top of cache tags. Calling revalidatePath will call your revalidateTag function, which you can then choose if you want to tag cache keys based on the path.
// Version History
// Version	Changes
// v14.1.0	Renamed cacheHandler is stable.
// v13.4.0	incrementalCacheHandlerPath (experimental) supports revalidateTag.
// v13.4.0	incrementalCacheHandlerPath (experimental) supports standalone output.
// v12.2.0	incrementalCacheHandlerPath (experimental) is added.
