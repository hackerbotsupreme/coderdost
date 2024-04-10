// generateBuildId
// Next.js generates an ID during next build to identify which version of your 
// application is being served. The same build should be used and boot up multiple 
// containers.

// If you are rebuilding for each stage of your environment, you will need to 
// generate a consistent build ID to use between containers. Use the generateBuildId 
// command in next.config.js:

// next.config.js
module.exports = {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH
  },
}