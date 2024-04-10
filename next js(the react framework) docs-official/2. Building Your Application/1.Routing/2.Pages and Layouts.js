
// We recommend reading the Routing Fundamentals and Defining Routes pages before continuing.

// The special files layout.js, page.js, and template.js allow you to create UI for 
// a route. This page will guide you through how and when to use these special files.

// Pages
// A page is UI that is unique to a route. You can define a page by default 
// exporting a component from a page.js file.

// For example, to create your index page, add the page.js file inside the app 
// directory:

// page.js special file
// app/page.tsx

// TypeScript

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return <h1>Hello, Home page!</h1>
}
// Then, to create further pages, create a new folder and add the page.js file inside
//  it. For example, to create a page for the /dashboard route, create a new folder 
// called dashboard, and add the page.js file inside it:

// app/dashboard/page.tsx

// TypeScript

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return <h1>Hello, Dashboard Page!</h1>
}
// Good to know:

// The .js, .jsx, or .tsx file extensions can be used for Pages.
// A page is always the leaf of the route subtree.
// A page.js file is required to make a route segment publicly accessible.
// Pages are Server Components by default, but can be set to a Client Component.
// Pages can fetch data. View the Data Fetching section for more information.

// Layouts
// A layout is UI that is shared between multiple routes. On navigation, layouts 
// preserve state, remain interactive, and do not re-render. Layouts can also be 
// nested.

// You can define a layout by default exporting a React component from a layout.js
//  file. The component should accept a children prop that will be populated with 
// a child layout (if it exists) or a page during rendering.

// For example, the layout will be shared with the /dashboard and /dashboard/settings
//  pages:

// layout.js special file
// app/dashboard/layout.tsx

// TypeScript

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      {children}
    </section>
  )
}
// Root Layout (Required)
// The root layout is defined at the top level of the app directory and applies to 
// all routes. This layout is required and must contain html and body tags, 
// allowing you to modify the initial HTML returned from the server.

// app/layout.tsx

// TypeScript

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}
// Nesting Layouts
// By default, layouts in the folder hierarchy are nested, which means they wrap 
// child layouts via their children prop. You can nest layouts by adding layout.js 
// inside specific route segments (folders).

// For example, to create a layout for the /dashboard route, add a new layout.js 
// file inside the dashboard folder:

// Nested Layout
// app/dashboard/layout.tsx

// TypeScript

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
// If you were to combine the two layouts above, the root layout (app/layout.js) 
// would wrap the dashboard layout (app/dashboard/layout.js), which would wrap 
// route segments inside app/dashboard/*.

// The two layouts would be nested as such:

// Nested Layouts
// Good to know:

// .js, .jsx, or .tsx file extensions can be used for Layouts.
// Only the root layout can contain <html> and <body> tags.
// When a layout.js and page.js file are defined in the same folder. The layout will
//  wrap the page.

// Layouts are Server Components by default but can be set to a Client Component.
// Layouts can fetch data. View the Data Fetching section for more information.
// Passing data between a parent layout and its children is not possible. However, 
// you can fetch the same data in a route more than once, and React will automatically
//  dedupe the requests without affecting performance.
// Layouts do not have access to the route segments below itself. To access all route 
// segments, you can use useSelectedLayoutSegment or useSelectedLayoutSegments in 
// a Client Component.

// You can use Route Groups to opt specific route segments in and out of shared layouts.
// You can use Route Groups to create multiple root layouts. See an example here.
// Migrating from the pages directory: The root layout replaces the _app.js and _document.js files. View the migration guide.

// Templates
// Templates are similar to layouts in that they wrap each child layout or page. 
// Unlike layouts that persist across routes and maintain state, templates create 
// a new instance for each of their children on navigation. This means that when 
// a user navigates between routes that share a template, a new instance of the
//  component is mounted, DOM elements are recreated, state is not preserved, and
//  effects are re-synchronized.

// There may be cases where you need those specific behaviors, and templates would 
// be a more suitable option than layouts. For example:

// Features that rely on useEffect (e.g logging page views) and useState (e.g a 
// per-page feedback form).

// To change the default framework behavior. For example, Suspense Boundaries inside
//  layouts only show the fallback the first time the Layout is loaded and not when
//  switching pages. For templates, the fallback is shown on each navigation.

// A template can be defined by exporting a default React component from a template.js
//  file. The component should accept a children prop.

// template.js special file
// app/template.tsx

// TypeScript

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
// In terms of nesting, template.js is rendered between a layout and its children. 
// Here's a simplified output:

// Output

<Layout>
  {/* Note that the template is given a unique key. */}
  <Template key={routeParam}>{children}</Template>
</Layout>
// Metadata
// In the app directory, you can modify the <head> HTML elements such as title and 
// meta using the Metadata APIs.

// Metadata can be defined by exporting a metadata object or generateMetadata 
// function in a layout.js or page.js file.

// app/page.tsx

// TypeScript

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Next.js',
}
 
export default function Page() {
  return '...'
}
// Good to know: You should not manually add <head> tags such as <title> and <meta> 
// to root layouts. Instead, you should use the Metadata API which automatically 
// handles advanced requirements such as streaming and de-duplicating <head> elements.

// Learn more about available metadata options in the API reference

// Previous
// Defining Routes
// Next
// Linking and Navigating