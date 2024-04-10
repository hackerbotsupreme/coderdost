// Server Components
// React Server Components allow you to write UI that can be rendered and optionally
//  cached on the server. In Next.js, the rendering work is further split by route
//  segments to enable streaming and partial rendering, and there are three different
//  server rendering strategies:

// Static Rendering
// Dynamic Rendering

// Streaming
// This page will go through how Server Components work, when you might use them, 
// and the different server rendering strategies.

// Benefits of Server Rendering
// There are a couple of benefits to doing the rendering work on the server, including:

// Data Fetching: Server Components allow you to move data fetching to the server, 
// closer to your data source. This can improve performance by reducing time 
// it takes to fetch data needed for rendering, and the number of requests 
// the client needs to make.

// Security: Server Components allow you to keep sensitive data and logic on
//  the server, such as tokens and API keys, without the risk of exposing them 
// to the client.

// Caching: By rendering on the server, the result can be cached and reused 
// on subsequent requests and across users. This can improve performance and 
// reduce cost by reducing the amount of rendering and data fetching done on each request.
// Bundle Sizes: Server Components allow you to keep large dependencies that 
// previously would impact the client JavaScript bundle size on the server. 
// This is beneficial for users with slower internet or less powerful devices,
//  as the client does not have to download, parse and execute any JavaScript 
// for Server Components.

// Initial Page Load and First Contentful Paint (FCP)(https://web.dev/fcp/): On the server, we can 
// generate HTML to allow users to view the page immediately, without waiting 
// for the client to download, parse and execute the JavaScript needed to render 
// the page.

// Search Engine Optimization and Social Network Shareability: The rendered HTML 
// can be used by search engine bots to index your pages and social network bots 
// to generate social card previews for your pages.

// Streaming: Server Components allow you to split the rendering work into chunks
//  and stream them to the client as they become ready. This allows the user to 
// see parts of the page earlier without having to wait for the entire page to be rendered on the server.

// Using Server Components in Next.js
// By default, Next.js uses Server Components. This allows you to automatically 
// implement server rendering with no additional configuration, and you can opt 
// into using Client Components when needed, see Client Components.

// How are Server Components rendered?
// On the server, Next.js uses React's APIs to orchestrate rendering. The rendering 
// work is split into chunks: by individual route segments and Suspense Boundaries.

// Each chunk is rendered in two steps:

// React renders Server Components into a special data format called the React Server Component Payload (RSC Payload).
// Next.js uses the RSC Payload and Client Component JavaScript instructions to render HTML on the server.

// Then, on the client:
// The HTML is used to immediately show a fast non-interactive preview of 
// the route - this is for the initial page load only.
// The React Server Components Payload is used to reconcile the Client and 
// Server Component trees, and update the DOM.
// The JavaScript instructions are used to hydrate Client Components and 
// make the application interactive.

// What is the React Server Component Payload (RSC)?
// The RSC Payload is a compact binary representation of the rendered React Server 
// Components tree. It's used by React on the client to update the browser's DOM. 
// The RSC Payload contains:

// The rendered result of Server Components
// Placeholders for where Client Components should be rendered and references
//  to their JavaScript files
// Any props passed from a Server Component to a Client Component

// Server Rendering Strategies
// There are three subsets of server rendering: Static, Dynamic, and Streaming.
// Static Rendering (Default)
// With Static Rendering, routes are rendered at build time, or in the background 
// after data revalidation. The result is cached and can be pushed to a Content 
// Delivery Network (CDN). This optimization allows you to share the result of the 
// rendering work between users and server requests.

// Static rendering is useful when a route has data that is not personalized to 
// the user and can be known at build time, such as a static blog post or 
// a product page.

// Dynamic Rendering
// With Dynamic Rendering, routes are rendered for each user at request time.

// Dynamic rendering is useful when a route has data that is personalized to 
// the user or has information that can only be known at request time, such 
// as cookies or the URL's search params.

// Dynamic Routes with Cached Data

// In most websites, routes are not fully static or fully dynamic - it's a spectrum.
//  For example, you can have an e-commerce page that uses cached product data that's
//  revalidated at an interval, but also has uncached, personalized customer data.

// In Next.js, you can have dynamically rendered routes that have both cached and 
// uncached data. This is because the RSC Payload and data are cached separately. 
// This allows you to opt into dynamic rendering without worrying about 
// the performance impact of fetching all the data at request time.

// Learn more about the full-route cache(https://nextjs.org/docs/app/building-your-application/caching#full-route-cache) and Data Cache.(https://nextjs.org/docs/app/building-your-application/caching#data-cache)

// Switching to Dynamic Rendering
// During rendering, if a dynamic function or uncached data request is discovered, 
// Next.js will switch to dynamically rendering the whole route. This table summarizes
//  how dynamic functions and data caching affect whether a route is statically or 
// dynamically rendered:

// Dynamic Functions	        Data	        Route
// No	                        Cached	        Statically Rendered
// Yes	                        Cached	        Dynamically Rendered
// No	                    Not Cached	        Dynamically Rendered
// Yes	                    Not Cached	         Dynamically Rendered
// means 
// Got it, let me describe each line based on your format:

// 1. **Dynamic Functions Data Route**
//    - If it is using a dynamic function (API route) to fetch data, then it doesn't matter whether the data is cached at build time or not; the page will be rendered dynamically.

// 2. **No Cached Statically Rendered**
//    - If it's not using a dynamic function and the data is not cached at build time, then the page will be rendered statically (at build time).

// 3. **Yes Cached Dynamically Rendered**
//    - If it's not using a dynamic function, but the data is cached at build time, then the page will be rendered dynamically (at runtime) using the cached data.

// 4. **No Not Cached Dynamically Rendered**
//    - If it's not using a dynamic function and the data is not cached at build time, then the page will be rendered dynamically (at runtime) without any caching.

// 5. **Yes Not Cached Dynamically Rendered**
//    - If it's not using a dynamic function and the data is not cached at build time, then the page will be rendered dynamically (at runtime) without any caching.

// in summary ,
//  The choice of whether to use caching or not in a Next.js application depends on the frequency of data changes.

// If the data doesn't change frequently:
// - It's recommended to use caching mechanisms like "Yes Cached Dynamically Rendered" or static rendering ("No Cached Statically Rendered").
// - Caching can significantly improve performance by serving cached data instead of fetching it for every request.

// If the data changes frequently:
// - It's better to avoid caching and opt for "No Not Cached Dynamically Rendered" or "Yes Not Cached Dynamically Rendered".
// - This ensures that users always get the latest data, but it can come at the cost of performance, especially for high-traffic applications.

// The trade-off is between data freshness and performance. Caching improves performance but may serve stale data if the data changes frequently. Not caching ensures fresh data but can be slower, especially for high-traffic sites.

// So in summary:
// - Use caching if data doesn't change often and performance is a priority.
// - Avoid caching if data changes frequently and you need to serve the latest data for every request, even if it means sacrificing some performance.

// In the table above, for a route to be fully static, all data must be cached. 
// However, you can have a dynamically rendered route that uses both cached and
//  uncached data fetches.

// As a developer, you do not need to choose between static and dynamic rendering as 
// Next.js will automatically choose the best rendering strategy for each route based
//  on the features and APIs used. Instead, you choose when to cache or revalidate 
// specific data, and you may choose to stream parts of your UI.

// Dynamic Functions
// Dynamic functions rely on information that can only be known at request time such
//  as a user's cookies, current requests headers, or the URL's search params.
//  In Next.js, these dynamic functions are:

// cookies() and headers(): Using these in a Server Component will opt the whole
//  route into dynamic rendering at request time.
// searchParams: Using the Pages prop will opt the page into dynamic rendering 
// at request time.
// Using any of these functions will opt the whole route into dynamic rendering at request time.

// Streaming
// Diagram showing parallelization of route segments during streaming, showing 
// data fetching, rendering, and hydration of individual chunks.
// Streaming enables you to progressively render UI from the server. Work is split 
// into chunks and streamed to the client as it becomes ready. This allows the user 
// to see parts of the page immediately, before the entire content has
//  finished rendering.
// Diagram showing partially rendered page on the client, with loading UI 
// for chunks that are being streamed.
// Streaming is built into the Next.js App Router by default. This helps improve both 
// the initial page loading performance, as well as UI that depends on slower data 
// fetches that would block rendering the whole route. For example, reviews on a 
// product page.
// You can start streaming route segments using loading.js and UI components with 
// React Suspense. See the Loading UI and Streaming section(https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) for more information.
