// App Router
// ...
// File Conventions
// default.js
// default.js
// The default.js file is used to render a fallback within Parallel Routes when Next.js cannot recover a slot's active state after a full-page load.

// During soft navigation, Next.js keeps track of the active state (subpage) for each slot. However, for hard navigations (full-page load), Next.js cannot recover the active state. In this case, a default.js file can be rendered for subpages that don't match the current URL.

// Consider the following folder structure. The @team slot has a settings page, but @analytics does not.

// Parallel Routes unmatched routes
// When navigating to /dashboard/settings, the @team slot will render the settings page while maintaining the currently active page for the @analytics slot.

// On refresh, Next.js will render a default.js for @analytics. If default.js doesn't exist, a 404 is rendered instead.

// Additionally, since children is an implicit slot, you also need to create
//  a default.js file to render a fallback for children when Next.js cannot recover 
// the active state of the parent page.

// Props
// params (optional)
// An object containing the dynamic route parameters from the root segment down 
// to the slot's subpages. For example:

// Example	URL	params
// app/@sidebar/[artist]/default.js	/zack	{ artist: 'zack' }
// app/@sidebar/[artist]/[album]/default.js	/zack/next	{ artist: 'zack', album: 'next' }

// Learn more about Parallel Routes
// App Router
// ...
// Routing
// Parallel Routes
// Simultaneously render one or more pages in the same view that can be navigated independently. A pattern for highly dynamic applications.
// Previous
// File Conventions
// Next
// error.js