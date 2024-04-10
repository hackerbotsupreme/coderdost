// transpilePackages
// Next.js can automatically transpile and bundle dependencies from local packages 
// (like monorepos) or from external dependencies (node_modules). This replaces 
// the next-transpile-modules package.

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@acme/ui', 'lodash-es'],
}

module.exports = nextConfig
