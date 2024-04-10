// logging
// You can configure the logging level and whether the full URL is logged to 
// the console when running Next.js in development mode.

// Currently, logging only applies to data fetching using the fetch API. It does 
// not yet apply to other logs inside of Next.js.

// next.config.js
module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}