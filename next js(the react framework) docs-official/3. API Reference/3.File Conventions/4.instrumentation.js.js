// instrumentation.js
// The instrumentation.js|ts file is used to integrate monitoring and logging tools
//  into your application. This allows you to track the performance and behavior of 
// your application, and to debug issues in production.

// To use it, place the file in the root of your application or inside a src folder 
// if using one.

// Config Option
// Instrumentation is currently an experimental feature, to use the instrumentation
//  file, you must explicitly opt-in by defining experimental.
// instrumentationHook = true; in your next.config.js:

// next.config.js
module.exports = {
  experimental: {
    instrumentationHook: true,
  },
}
// Exports
// register (required)
// The file exports a register function that is called once when a new Next.js 
// server instance is initiated. register can be an async function.

// instrumentation.ts
import { registerOTel } from '@vercel/otel'
 
export function register() {
  registerOTel('next-app')
}
