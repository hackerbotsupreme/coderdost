// route.js
// Route Handlers allow you to create custom request handlers for a given route 
// using the Web Request and Response APIs.

// HTTP Methods
// A route file allows you to create custom request handlers for a given route. 
// The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD,
//  and OPTIONS.

// route.ts
export async function GET(request: Request) { }

export async function HEAD(request: Request) { }

export async function POST(request: Request) { }

export async function PUT(request: Request) { }

export async function DELETE(request: Request) { }

export async function PATCH(request: Request) { }

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and 
//  set the appropriate Response `Allow` header depending on the other methods 
// defined in the route handler.
export async function OPTIONS(request: Request) { }
// Good to know: Route Handlers are only available inside the app directory. 
// You do not need to use API Routes (pages) and Route Handlers (app) together, 
// as Route Handlers should be able to handle all use cases.

// Parameters
// request (optional)
// The request object is a NextRequest object, which is an extension of the Web 
// Request API. NextRequest gives you further control over the incoming request, 
// including easily accessing cookies and an extended, parsed, URL object nextUrl.

// context (optional)
// app/dashboard/[team]/route.js
export async function GET(request, context: { params }) {
  const team = params.team // '1'
}
// Currently, the only value of context is params, which is an object containing 
// the dynamic route parameters for the current route.

// Example	URL	params
// app/dashboard/[team]/route.js	/dashboard/1	{ team: '1' }
// app/shop/[tag]/[item]/route.js	/shop/1/2	{ tag: '1', item: '2' }
// app/blog/[...slug]/route.js	/blog/1/2	{ slug: ['1', '2'] }
// NextResponse
// Route Handlers can extend the Web Response API by returning a NextResponse object. 
// This allows you to easily set cookies, headers, redirect, and rewrite.
//  View the API reference.
