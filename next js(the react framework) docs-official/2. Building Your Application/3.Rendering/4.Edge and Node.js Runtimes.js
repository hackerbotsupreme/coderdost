// Edge and Node.js Runtimes
// In the context of Next.js, runtime refers to the set of libraries, APIs, 
// and general functionality available to your code during execution.

// On the server, there are two runtimes where parts of your application code 
// can be rendered:

// The Node.js Runtime (default) has access to all Node.js APIs and compatible packages from the ecosystem.
// The Edge Runtime is based on Web APIs.
// Runtime Differences
// There are many considerations to make when choosing a runtime. This table 
// shows the major differences at a glance. If you want a more in-depth 
// analysis of the differences, check out the sections below.

// Node	Serverless	Edge
// Cold Boot	/	Normal	Low
// HTTP Streaming	Yes	Yes	Yes
// IO	All	All	fetch
// Scalability	/	High	Highest
// Security	Normal	High	High
// Latency	Normal	Low	Lowest
// npm Packages	All	All	A smaller subset
// Static Rendering	Yes	Yes	No
// Dynamic Rendering	Yes	Yes	Yes
// Data Revalidation w/ fetch	Yes	Yes	Yes

// This table compares three different runtimes in Next.js: Node, Serverless, and Edge, and highlights the key differences between them across various aspects. Here's what it tells us about the Node runtime:

// 1. **Cold Boot/Normal**: When using the Node runtime, the cold boot time (the time it takes to start the runtime from scratch) is low compared to other runtimes.

// 2. **HTTP Streaming**: The Node runtime supports HTTP streaming, which allows for efficient transfer of data in real-time.

// 3. **IO**: In the Node runtime, you have access to all I/O operations (file system, network, etc.).

// 4. **Scalability/High**: The Node runtime has high scalability, which means it can handle a significant number of concurrent requests efficiently.

// 5. **Security/Normal**: The security level of the Node runtime is considered normal or standard.

// 6. **Latency/Normal**: The latency (the delay between a request and a response) in the Node runtime is considered normal or average.

// 7. **npm Packages/All**: When using the Node runtime, you have access to all npm packages, which means you can use any third-party package available on the npm registry.

// 8. **Static Rendering/Yes**: The Node runtime supports static rendering, which means pages can be pre-rendered at build time for better performance.

// 9. **Dynamic Rendering/Yes**: The Node runtime also supports dynamic rendering, which means pages can be rendered on the server at runtime.

// 10. **Data Revalidation w/ `fetch`/Yes**: In the Node runtime, you can use the `fetch` function to revalidate or fetch data at runtime, allowing for dynamic updates.

// In summary, the table highlights that the Node runtime is a versatile option with normal performance characteristics, access to all npm packages, and support for both static and dynamic rendering. It's a good choice for applications that require a balance between performance, scalability, and access to a wide range of third-party packages.


// The table provides the following information about the Edge runtime in Next.js:

// 1. **Cold Boot/Lowest**: The Edge runtime has the lowest cold boot time compared to Node and Serverless runtimes. This means it can start up very quickly.

// 2. **HTTP Streaming/Yes**: The Edge runtime supports HTTP streaming, allowing efficient real-time data transfer.

// 3. **IO/`fetch`**: In the Edge runtime, you can only use the `fetch` function for I/O operations, as it doesn't have access to the file system or other I/O operations.

// 4. **Scalability/Highest**: The Edge runtime has the highest scalability, meaning it can handle the largest number of concurrent requests efficiently.

// 5. **Security/High**: The Edge runtime has a high level of security compared to other runtimes.

// 6. **Latency/Lowest**: The Edge runtime has the lowest latency, which means the delay between a request and a response is minimal.

// 7. **npm Packages/A smaller subset**: The Edge runtime can only use a smaller subset of npm packages, as not all packages are compatible with the Edge runtime environment.

// 8. **Static Rendering/No**: The Edge runtime does not support static rendering, as pages are rendered at runtime.

// 9. **Dynamic Rendering/Yes**: The Edge runtime supports dynamic rendering, where pages are rendered on the Edge network at runtime.

// 10. **Data Revalidation w/ `fetch`/Yes**: In the Edge runtime, you can use the `fetch` function to revalidate or fetch data at runtime, allowing for dynamic updates.

// In summary, the table highlights that the Edge runtime is optimized for performance, scalability, security, and low latency. It's suitable for applications that prioritize lightning-fast responses and high concurrency, but may be limited in terms of the available npm packages and lack of static rendering support.

// Based on the information provided in the table, here are some guidelines on when to choose the Node runtime or the Edge runtime:

// **Choose Node runtime when:**

// 1. **You need access to all npm packages**: The Node runtime allows you to use any npm package available, which can be beneficial for applications that rely heavily on third-party libraries or have specific package dependencies.

// 2. **You require access to the file system or other I/O operations**: The Node runtime provides full access to the file system and other I/O operations, which is necessary for applications that need to read or write files, interact with databases, or perform other I/O-related tasks.

// 3. **You need static rendering**: If your application can benefit from pre-rendering pages at build time for better performance, the Node runtime supports static rendering, while the Edge runtime does not.

// 4. **You have lower scalability requirements**: If your application doesn't expect extremely high concurrency or traffic, the Node runtime's scalability may be sufficient, and the Edge runtime's highest scalability may not be necessary.

// **Choose Edge runtime when:**

// 1. **You need the highest performance and lowest latency**: The Edge runtime is optimized for lightning-fast responses and minimal latency, making it ideal for applications that prioritize speed and responsiveness, such as real-time applications or content delivery networks (CDNs).

// 2. **You require the highest scalability**: If your application expects extremely high concurrency and traffic, the Edge runtime's highest scalability can handle a massive number of concurrent requests efficiently.

// 3. **Security is a top priority**: The Edge runtime offers a higher level of security compared to the Node runtime, which can be crucial for applications that handle sensitive data or have strict security requirements.

// 4. **You don't need access to the file system or other I/O operations**: If your application doesn't require file system access or other I/O operations beyond `fetch`, the Edge runtime's limited I/O capabilities may be sufficient.

// 5. **You can work within the subset of available npm packages**: If your application doesn't rely on npm packages that are incompatible with the Edge runtime, the subset of available packages may be sufficient.

// Ultimately, the choice between the Node runtime and the Edge runtime depends on your application's specific requirements, priorities, and constraints. The Node runtime offers more flexibility and compatibility, while the Edge runtime is optimized for performance, scalability, and security.

// Edge Runtime
// In Next.js, the lightweight Edge Runtime is a subset of available Node.js APIs.

// The Edge Runtime is ideal if you need to deliver dynamic, personalized content 
// at low latency with small, simple functions. The Edge Runtime's speed comes 
// from its minimal use of resources, but that can be limiting in many scenarios.

// For example, code executed in the Edge Runtime on Vercel cannot exceed 
// between 1 MB and 4 MB, this limit includes imported packages, fonts and files, 
// and will vary depending on your deployment infrastructure. In addition, 
// the Edge Runtime does not support all Node.js APIs meaning some npm packages 
// may not work. For example, "Module not found: Can't resolve 'fs'" or similar
//  errors. We recommend using the Node.js runtime if you need to use these APIs 
// or packages.

// Node.js Runtime
// Using the Node.js runtime gives you access to all Node.js APIs, and all npm 
// packages that rely on them. However, it's not as fast to start up as routes
//  using the Edge runtime.

// Deploying your Next.js application to a Node.js server will require managing, 
// scaling, and configuring your infrastructure. Alternatively, you can consider 
// deploying your Next.js application to a serverless platform like Vercel, which 
// will handle this for you.

// Serverless Node.js
// Serverless is ideal if you need a scalable solution that can handle more complex
//  computational loads than the Edge Runtime. With Serverless Functions on Vercel,
//  for example, your overall code size is 50MB including imported packages, fonts, and files.

// The downside compared to routes using the Edge is that it can take hundreds of 
// milliseconds for Serverless Functions to boot up before they begin processing 
// requests. Depending on the amount of traffic your site receives, this could be 
// a frequent occurrence as the functions are not frequently "warm".

// Examples
// Segment Runtime Option
// You can specify a runtime for individual route segments in your Next.js 
// application. To do so, declare a variable called runtime and export it.
//  The variable must be a string, and must have a value of either 'nodejs' 
// or 'edge' runtime.

// The following example demonstrates a page route segment that exports a runtime 
// with a value of 'edge':

// app/page.tsx
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
// You can also define runtime on a layout level, which will make all routes 
// under the layout run on the edge runtime:

// app/layout.tsx
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
// If the segment runtime is not set, the default nodejs runtime will be used. 
// You do not need to use the runtime option if you do not plan to change from
//  the Node.js runtime.

// Please refer to the Node.js Docs and Edge Docs for the full list of available APIs. 
// Both runtimes can also support streaming depending on your deployment infrastructure.
