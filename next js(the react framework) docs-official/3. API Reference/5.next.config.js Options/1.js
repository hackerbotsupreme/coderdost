// next.config.js Options
// Next.js can be configured through a next.config.js file in the root of your 
// project directory (for example, by package.json) with a default export.

// next.config.js

// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
}

module.exports = nextConfig
// next.config.js is a regular Node.js module, not a JSON file. It gets used by 
// the Next.js server and build phases, and it's not included in the browser build.

// If you need ECMAScript modules, you can use next.config.mjs:

// next.config.mjs

// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

// export default nextConfig
// You can also use a function:

// next.config.mjs

// @ts-check

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  }
  return nextConfig
}
// Since Next.js 12.1.0, you can use an async function:

// next.config.js

// // @ts-check

module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  }
  return nextConfig
}
// phase is the current context in which the configuration is loaded. You can see 
// the available phases. Phases can be imported from next/constants:


// @ts-check

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    }
  }

  return {
    /* config options for all phases except development here */
  }
}
// The commented lines are the place where you can put the configs allowed by
// next.config.js, which are defined in this file.

// However, none of the configs are required, and it's not necessary to understand
// what each config does. Instead, search for the features you need to enable or
// modify in this section and they will show you what to do.

// Avoid using new JavaScript features not available in your target Node.js version.
// next.config.js will not be parsed by Webpack, Babel or TypeScript.

// This page documents all the available configuration options:

// appDir
// Enable the App Router to use layouts, streaming, and more.
// assetPrefix
// Learn how to use the assetPrefix config option to configure your CDN.
// basePath
// Use `basePath` to deploy a Next.js application under a sub-path of a domain.
// compress
// Next.js provides gzip compression to compress rendered content and static files, it only works with the server target. Learn more about it here.
// devIndicators
// Optimized pages include an indicator to let you know if it's being statically optimized. You can opt-out of it here.
// distDir
// Set a custom build directory to use instead of the default .next directory.
// env
// Learn to add and access environment variables in your Next.js application at build time.
// eslint
// Next.js reports ESLint errors and warnings during builds by default. Learn how to opt-out of this behavior here.
// exportPathMap
// Customize the pages that will be exported as HTML files when using `next export`.
// generateBuildId
// Configure the build id, which is used to identify the current build in which your application is being served.
// generateEtags
// Next.js will generate etags for every page by default. Learn more about how to disable etag generation here.
// headers
// Add custom HTTP headers to your Next.js app.
// httpAgentOptions
// Next.js will automatically use HTTP Keep-Alive by default. Learn more about how to disable HTTP Keep-Alive here.
// images
// Custom configuration for the next/image loader
// cacheHandler
// Configure the Next.js cache used for storing and revalidating data to use any external service like Redis, Memcached, or others.
// instrumentationHook
// Use the instrumentationHook option to set up instrumentation in your Next.js App.
// logging
// Configure how data fetches are logged to the console when running Next.js in development mode.
// mdxRs
// Use the new Rust compiler to compile MDX files in the App Router.
// onDemandEntries
// Configure how Next.js will dispose and keep in memory pages created in development.
// optimizePackageImports
// API Reference for optmizedPackageImports Next.js Config Option
// output
// Next.js automatically traces which files are needed by each page to allow for easy deployment of your application. Learn how it works here.
// pageExtensions
// Extend the default page extensions used by Next.js when resolving pages in the Pages Router.
// Partial Prerendering (experimental)
// Learn how to enable Partial Prerendering (experimental) in Next.js 14.
// poweredByHeader
// Next.js will add the `x-powered-by` header by default. Learn to opt-out of it here.
// productionBrowserSourceMaps
// Enables browser source map generation during the production build.
// reactStrictMode
// The complete Next.js runtime is now Strict Mode-compliant, learn how to opt-in
// redirects
// Add redirects to your Next.js app.
// rewrites
// Add rewrites to your Next.js app.
// serverActions
// Configure Server Actions behavior in your Next.js application.
// serverComponentsExternalPackages
// Opt-out specific dependencies from the Server Components bundling and use native Node.js `require`.
// trailingSlash
// Configure Next.js pages to resolve with or without a trailing slash.
// transpilePackages
// Automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (`node_modules`).
// turbo
// Configure Next.js with Turbopack-specific options
// typedRoutes
// Enable experimental support for statically typed links.
// typescript
// Next.js reports TypeScript errors by default. Learn to opt-out of this behavior here.
// urlImports
// Configure Next.js to allow importing modules from external URLs (experimental).
// webpack
// Learn how to customize the webpack config used by Next.js
// webVitalsAttribution
// Learn how to use the webVitalsAttribution option to pinpoint the source of Web Vitals issues.
