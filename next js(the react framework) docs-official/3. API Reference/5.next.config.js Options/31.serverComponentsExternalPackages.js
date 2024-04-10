// serverComponentsExternalPackages
// Dependencies used inside Server Components and Route Handlers will 
// automatically be bundled by Next.js.

// If a dependency is using Node.js specific features, you can choose 
// to opt-out specific dependencies from the Server Components bundling 
// and use native Node.js require.

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },
}
 
module.exports = nextConfig
// Next.js includes a short list of popular packages that currently 
// are working on compatibility and automatically opt-ed out:

// @aws-sdk/client-s3
// @aws-sdk/s3-presigned-post
// @blockfrost/blockfrost-js
// @highlight-run/node
// @libsql/client
// @jpg-store/lucid-cardano
// @mikro-orm/core
// @mikro-orm/knex
// @prisma/client
// @sentry/nextjs
// @sentry/node
// @swc/core
// argon2
// autoprefixer
// aws-crt
// bcrypt
// better-sqlite3
// canvas
// cpu-features
// cypress
// eslint
// express
// firebase-admin
// jest
// jsdom
// libsql
// lodash
// mdx-bundler
// mongodb
// mongoose
// next-mdx-remote
// next-seo
// node-pty
// node-web-audio-api
// payload
// pg
// playwright
// postcss
// prettier
// prisma
// puppeteer
// puppeteer-core
// rimraf
// sharp
// shiki
// sqlite3
// tailwindcss
// ts-node
// typescript
// vscode-oniguruma
// webpack
// websocket
// Previous
// serverActions
// Next
// trailingSlash