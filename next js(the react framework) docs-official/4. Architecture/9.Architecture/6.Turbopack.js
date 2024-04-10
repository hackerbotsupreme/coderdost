Architecture
Turbopack
Turbopack
Turbopack (beta) is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.

Usage
Turbopack can be used in Next.js in both the pages and app directories for faster local development. To enable Turbopack, use the --turbo flag when running the Next.js development server.

package.json

{
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
Supported Features
To learn more about the currently supported features for Turbopack, view the documentation.

Unsupported Features
Turbopack currently only supports next dev and does not support next build. We are currently working on support for builds as we move closer towards stability.

Previous
Supported Browsers
Next
Community