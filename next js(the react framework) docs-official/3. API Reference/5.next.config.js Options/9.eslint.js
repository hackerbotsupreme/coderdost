// App Router
// ...
// next.config.js Options
// eslint
// eslint
// When ESLint is detected in your project, Next.js fails your production build 
// (next build) when errors are present.

// If you'd like Next.js to produce production code even when your application 
// has ESLint errors, you can disable the built-in linting step completely. This 
// is not recommended unless you already have ESLint configured to run in a separate 
// part of your workflow (for example, in CI or a pre-commit hook).

// Open next.config.js and enable the ignoreDuringBuilds option in the eslint config:

// next.config.js

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
// Previous
// env
// Next
// exportPathMap