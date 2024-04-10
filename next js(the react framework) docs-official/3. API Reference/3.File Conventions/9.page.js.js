// page.js
// A page is UI that is unique to a route.

// app/blog/[slug]/page.tsx
export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <h1>My Page</h1>
}
// Props
// params (optional)
// An object containing the dynamic route parameters from the root segment down 
// to that page. For example:

// Example	URL	params
// app/shop/[slug]/page.js	/shop/1	{ slug: '1' }
// app/shop/[category]/[item]/page.js	/shop/1/2	{ category: '1', item: '2' }
// app/shop/[...slug]/page.js	/shop/1/2	{ slug: ['1', '2'] }

// searchParams (optional)
// An object containing the search parameters of the current URL. For example:

// URL	searchParams
/shop?a=1	{ a: '1' }
/shop?a=1&b=2	{ a: '1', b: '2' }
/shop?a=1&a=2	{ a: ['1', '2'] }
// Good to know:

// searchParams is a Dynamic API whose values cannot be known ahead of time. Using it will opt the page into dynamic rendering at request time.
// searchParams returns a plain JavaScript object and not a URLSearchParams instance.
