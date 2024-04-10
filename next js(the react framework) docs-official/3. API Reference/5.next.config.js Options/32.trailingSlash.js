// trailingSlash
// By default Next.js will redirect urls with trailing slashes to their 
// counterpart without a trailing slash. For example /about/ will redirect 
// to /about. You can configure this behavior to act the opposite way,
//  where urls without trailing slashes are redirected to their counterparts 
// with trailing slashes.

// Open next.config.js and add the trailingSlash config:

// next.config.js
module.exports = {
  trailingSlash: true,
}
// With this option set, urls like /about will redirect to /about/.

// When used with output: "export" configuration, the /about page will 
// output /about/index.html (instead of the default /about.html).

