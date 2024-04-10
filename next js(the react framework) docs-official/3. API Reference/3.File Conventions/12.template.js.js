// template.js
// A template file is similar to a layout in that it wraps each child layout or page.
//  Unlike layouts that persist across routes and maintain state, templates create 
// a new instance for each of their children on navigation.

// app/template.tsx
export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
// template.js special file
// While less common, you might choose a template over a layout if you want:

// Features that rely on useEffect (e.g logging page views) and useState 
// (e.g a per-page feedback form).
// To change the default framework behavior. For example, Suspense Boundaries 
// inside layouts only show the fallback the first time the Layout is loaded and
//  not when switching pages. For templates, the fallback is shown on each navigation.

// Props
// children (required)
// Template components should accept and use a children prop. template is
//  rendered between a layout and its children. For example:

// Output
<Layout>
  {/* Note that the template is given a unique key. */}
  <Template key={routeParam}>{children}</Template>
</Layout>

// Good to know:
// By default, template is a Server Component, but can also be used as 
// a Client Component through the "use client" directive.
// When a user navigates between routes that share a template, a new instance of 
// the component is mounted, DOM elements are recreated, state is not preserved, 
// and effects are re-synchronized.