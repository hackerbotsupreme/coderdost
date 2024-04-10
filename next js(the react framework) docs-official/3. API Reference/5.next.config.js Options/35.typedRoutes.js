// typedRoutes (experimental)
// Experimental support for statically typed links. This feature requires using
//  the App Router as well as TypeScript in your project.

// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
