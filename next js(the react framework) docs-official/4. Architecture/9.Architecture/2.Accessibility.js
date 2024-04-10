// Accessibility
// The Next.js team is committed to making Next.js accessible to all developers 
// (and their end-users). By adding accessibility features to Next.js by default, 
// we aim to make the Web more inclusive for everyone.

// Route Announcements
// When transitioning between pages rendered on the server 
// (e.g. using the <a href> tag) screen readers and other assistive 
// technology announce the page title when the page loads so that users 
// understand that the page has changed.

// In addition to traditional page navigations, Next.js also supports client-side 
// transitions for improved performance (using next/link). To ensure that client-side
//  transitions are also announced to assistive technology, Next.js includes a route 
// announcer by default.

// The Next.js route announcer looks for the page name to announce by first inspecting
//  document.title, then the <h1> element, and finally the URL pathname. For the most 
// accessible user experience, ensure that each page in your application has a unique 
// and descriptive title.

// Linting
// Next.js provides an integrated ESLint experience out of the box, including custom
//  rules for Next.js. By default, Next.js includes eslint-plugin-jsx-a11y to help
//  catch accessibility issues early, including warning on:

// aria-props
// aria-proptypes
// aria-unsupported-elements
// role-has-required-aria-props
// role-supports-aria-props
