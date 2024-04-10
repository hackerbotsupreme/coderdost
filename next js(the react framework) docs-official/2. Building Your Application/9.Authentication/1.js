// App Router
// Building Your Application
// Authentication
// Authentication
// To implement authentication in Next.js, familiarize yourself with three foundational concepts:

// Authentication verifies if the user is who they say they are. It requires 
// the user to prove their identity with something they have, such as a username 
// and password.
// Session Management tracks the user's state (e.g. logged in) across multiple requests.
// Authorization decides what parts of the application the user is allowed to access.
// This page demonstrates how to use Next.js features to implement common 
// authentication, authorization, and session management patterns so you can 
// choose the best solutions based on your application's needs.

// Authentication
// Authentication verifies a user's identity. This happens when a user logs in, 
// either with a username and password or through a service like Google. It's all 
// about confirming that users are really who they claim to be, protecting both the
//  user's data and the application from unauthorized access or fraudulent activities.

// Authentication Strategies
// Modern web applications commonly use several authentication strategies:

// OAuth/OpenID Connect (OIDC): Enable third-party access without sharing user 
// credentials. Ideal for social media logins and Single Sign-On (SSO) solutions.
//  They add an identity layer with OpenID Connect.
// Credentials-based login (Email + Password): A standard choice for web applications,
//  where users log in with an email and password. Familiar and easy to implement,
//  it requires robust security measures against threats like phishing.
// Passwordless/Token-based authentication: Use email magic links or SMS one-time 
// codes for secure, password-free access. Popular for its convenience and enhanced 
// security, this method helps reduce password fatigue. Its limitation is the 
// dependency on the user's email or phone availability.
// Passkeys/WebAuthn: Use cryptographic credentials unique to each site, offering 
// high security against phishing. Secure but new, this strategy can be difficult 
// to implement.

// Selecting an authentication strategy should align with your application's specific
//  requirements, user interface considerations, and security objectives.

// Implementing Authentication
// In this section, we'll explore the process of adding basic email-password 
// authentication to a web application. While this method provides a fundamental 
// level of security, it's worth considering more advanced options like OAuth or 
// passwordless logins for enhanced protection against common security threats.
//  The authentication flow we'll discuss is as follows:

// The user submits their credentials through a login form.
// The form calls a Server Action.
// Upon successful verification, the process is completed, indicating 
// the user's successful authentication.
// If verification is unsuccessful, an error message is shown.
// Consider a login form where users can input their credentials:

// app/login/page.tsx

// TypeScript

import { authenticate } from '@/app/lib/actions'
 
export default function Page() {
  return (
    <form action={authenticate}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}
// The form above has two input fields for capturing the user's email and password. 
// On submission, it calls the authenticate Server Action.

// You can then call your Authentication Provider's API in the Server Action 
// to handle authentication:

// app/lib/actions.ts

// TypeScript

'use server'
 
import { signIn } from '@/auth'
 
export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
// In this code, the signIn method checks the credentials against stored user data. 
// After the authentication provider processes the credentials, there are 
// two possible outcomes:

// Successful Authentication: This outcome implies that the login was successful. 
// Further actions, such as accessing protected routes and fetching user information,
//  can then be initiated.
// Failed Authentication: In cases where the credentials are incorrect or an error 
// is encountered, the function returns a corresponding error message to indicate 
// the authentication failure.
// Finally, in your login-form.tsx component, you can use React's useFormState to 
// call the Server Action and handle form errors, and use useFormStatus to handle 
// the pending state of the form:

// app/login/page.tsx

// TypeScript

'use client'
 
import { authenticate } from '@/app/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'
 
export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
 
  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>
  )
}
 
function LoginButton() {
  const { pending } = useFormStatus()
 
  return (
    <button aria-disabled={pending} type="submit">
      Login
    </button>
  )
}
// For a more streamlined authentication setup in Next.js projects, especially 
// when offering multiple login methods, consider using a comprehensive authentication solution.

// Authorization
// Once a user is authenticated, you'll need to ensure the user is allowed to visit 
// certain routes, and perform operations such as mutating data with Server Actions 
// and calling Route Handlers.

// Protecting Routes with Middleware
// Middleware in Next.js helps you control who can access different parts of your 
// website. This is important for keeping areas like the user dashboard protected 
// while having other pages like marketing pages be public. It's recommended to apply
//  Middleware across all routes and specify exclusions for public access.

// Here's how to implement Middleware for authentication in Next.js:

// Setting Up Middleware:
// Create a middleware.ts or .js file in your project's root directory.
// Include logic to authorize user access, such as checking for authentication tokens.
// Defining Protected Routes:
// Not all routes require authorization. Use the matcher option in your Middleware to specify any routes that do not require authorization checks.
// Middleware Logic:
// Write logic to verify if a user is authenticated. Check user roles or permissions for route authorization.
// Handling Unauthorized Access:
// Redirect unauthorized users to a login or error page as appropriate.
// Example Middleware file:

// middleware.ts

// TypeScript

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
 
  if (currentUser) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
// This example uses NextResponse.redirect for handling redirects early in 
// the request pipeline, making it efficient and centralizing access control.

// For specific redirection needs, the redirect function can be used in Server 
// Components, Route Handlers, and Server Actions to provide more control. This 
// is useful for role-based navigation or context-sensitive scenarios.

// app/page.tsx

// TypeScript

import { redirect } from 'next/navigation'
 
export default function Page() {
  // Logic to determine if a redirect is needed
  const accessDenied = true
  if (accessDenied) {
    redirect('/login')
  }
 
  // Define other routes and logic
}
// After successful authentication, it's important to manage user navigation based 
// on their roles. For example, an admin user might be redirected to an admin 
// dashboard, while a regular user is sent to a different page. This is important 
// for role-specific experiences and conditional navigation, such as prompting users 
// to complete their profile if needed.

// When setting up authorization, it's important to ensure that the main security 
// checks happen where your app accesses or changes data. While Middleware can be 
// useful for initial validation, it should not be the sole line of defense in 
// protecting your data. The bulk of security checks should be performed in the
//  Data Access Layer (DAL).

// This approach, highlighted in this security blog, advocates for consolidating all 
// data access within a dedicated DAL. This strategy ensures consistent data access, 
// minimizes authorization bugs, and simplifies maintenance. To ensure comprehensive 
// security, consider the following key areas:

// Server Actions: Implement security checks in server-side processes, especially for sensitive operations.
// Route Handlers: Manage incoming requests with security measures to ensure access 
// is limited to authorized users.
// Data Access Layer (DAL): Directly interacts with the database and is crucial 
// for validating and authorizing data transactions. It's vital to perform critical 
// checks within the DAL to secure data at its most crucial interaction point—access
//  or modification.
// For a detailed guide on securing the DAL, including example code snippets and 
// advanced security practices, refer to our Data Access Layer section of the security guide.

// Protecting Server Actions
// It is important to treat Server Actions with the same security considerations 
// as public-facing API endpoints. Verifying user authorization for each action is
//  crucial. Implement checks within Server Actions to determine user permissions, 
// such as restricting certain actions to admin users.

// In the example below, we check the user's role before allowing the action to proceed:

// app/lib/actions.ts

// TypeScript

'use server'
 
// ...
 
export async function serverAction() {
  const session = await getSession()
  const userRole = session?.user?.role
 
  // Check if user is authorized to perform the action
  if (userRole !== 'admin') {
    throw new Error('Unauthorized access: User does not have admin privileges.')
  }
 
  // Proceed with the action for authorized users
  // ... implementation of the action
}
// Protecting Route Handlers
// Route Handlers in Next.js play a vital role in managing incoming requests.
//  Just like Server Actions, they should be secured to ensure that only authorized 
// users can access certain functionalities. This often involves verifying the user's
//  authentication status and their permissions.

// Here's an example of securing a Route Handler:

// app/api/route.ts

// TypeScript

export async function GET() {
  // User authentication and role verification
  const session = await getSession()
 
  // Check if the user is authenticated
  if (!session) {
    return new Response(null, { status: 401 }) // User is not authenticated
  }
 
  // Check if the user has the 'admin' role
  if (session.user.role !== 'admin') {
    return new Response(null, { status: 403 }) // User is authenticated but does not have the right permissions
  }
 
  // Data fetching for authorized users
}
// This example demonstrates a Route Handler with a two-tier security check for 
// authentication and authorization. It first checks for an active session, and then 
// verifies if the logged-in user is an 'admin'. This approach ensures secure access,
//  limited to authenticated and authorized users, maintaining robust security for 
// request processing.

// Authorization Using Server Components
// Server Components in Next.js are designed for server-side execution and offer
//  a secure environment for integrating complex logic like authorization. They 
// enable direct access to back-end resources, optimizing performance for data-heavy 
// tasks and enhancing security for sensitive operations.

// In Server Components, a common practice is to conditionally render UI elements
//  based on the user's role. This approach enhances user experience and security 
// by ensuring users only access content they are authorized to view.

// Example:

// app/dashboard/page.tsx

// TypeScript

export default function Dashboard() {
  const session = await getSession()
  const userRole = session?.user?.role // Assuming 'role' is part of the session object
 
  if (userRole === 'admin') {
    return <AdminDashboard /> // Component for admin users
  } else if (userRole === 'user') {
    return <UserDashboard /> // Component for regular users
  } else {
    return <AccessDenied /> // Component shown for unauthorized access
  }
}
// In this example, the Dashboard component renders different UIs for 'admin', 
// 'user', and unauthorized roles. This pattern ensures that each user interacts only
//  with components appropriate to their role, enhancing both security and 
// user experience.

// Best Practices
// Secure Session Management: Prioritize the security of session data to prevent 
// unauthorized access and data breaches. Use encryption and secure storage practices.
// Dynamic Role Management: Use a flexible system for user roles to easily adjust to 
// changes in permissions and roles, avoiding hardcoded roles.
// Security-First Approach: In all aspects of authorization logic, prioritize security
//  to safeguard user data and maintain the integrity of your application. This 
// includes thorough testing and considering potential security vulnerabilities.

// Session Management
// Session management involves tracking and managing a user's interaction with 
// the application over time, ensuring that their authenticated state is 
// preserved across different parts of the application.

// This prevents the need for repeated logins, enhancing both security and user 
// convenience. There are two primary methods used for session management: 
// cookie-based and database sessions.

// Cookie-Based Sessions
// 🎥 Watch: Learn more about cookie-based sessions and authentication with
//  Next.js → YouTube (11 minutes).

// Cookie-based sessions manage user data by storing encrypted session information 
// directly in browser cookies. Upon user login, this encrypted data is stored in 
// the cookie. Each subsequent server request includes this cookie, minimizing 
// the need for repeated server queries and enhancing client-side efficiency.

// However, this method requires careful encryption to protect sensitive data, 
// as cookies are susceptible to client-side security risks. Encrypting session 
// data in cookies is key to safeguarding user information from unauthorized access. 
// It ensures that even if a cookie is stolen, the data inside remains unreadable.

// Additionally, while individual cookies are limited in size (typically around 4KB),
//  techniques like cookie-chunking can overcome this limitation by dividing large 
// session data into multiple cookies.

// Setting a cookie in a Next.js project might look something like this:

// Setting a cookie on the server:

// app/actions.ts

// TypeScript

'use server'
 
import { cookies } from 'next/headers'
 
export async function handleLogin(sessionData) {
  const encryptedSessionData = encrypt(sessionData) // Encrypt your session data
  cookies().set('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
  // Redirect or handle the response after setting the cookie
}
// Accessing the session data stored in the cookie in a server component:

// app/page.tsx

// TypeScript

import { cookies } from 'next/headers'
 
export async function getSessionData(req) {
  const encryptedSessionData = cookies().get('session')?.value
  return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
}
// Database Sessions
// Database session management involves storing session data on the server, with 
// the user's browser only receiving a session ID. This ID references the session 
// data stored server-side, without containing the data itself. This method enhances
//  security, as it keeps sensitive session data away from the client-side 
// environment, reducing the risk of exposure to client-side attacks. Database 
// sessions are also more scalable, accommodating larger data storage needs.

// However, this approach has its tradeoffs. It can increase performance overhead
//  due to the need for database lookups at each user interaction. Strategies like
//  session data caching can help mitigate this. Additionally, reliance on the 
// database means that session management is as reliable as the database's 
// performance and availability.

// Here's a simplified example of implementing database sessions in a Next.js application:

// Creating a Session on the Server:


import db from './lib/db'
 
export async function createSession(user) {
  const sessionId = generateSessionId() // Generate a unique session ID
  await db.insertSession({ sessionId, userId: user.id, createdAt: new Date() })
  return sessionId
}
// Retrieving a Session in Middleware or Server-Side Logic:


import { cookies } from 'next/headers'
import db from './lib/db'
 
export async function getSession() {
  const sessionId = cookies().get('sessionId')?.value
  return sessionId ? await db.findSession(sessionId) : null
}
// Selecting Session Management in Next.js
// Deciding between cookie-based and database sessions in Next.js depends on your 
// application's needs. Cookie-based sessions are simpler and suit smaller 
// applications with lower server load but may offer less security. Database sessions,
//  while more complex, provide better security and scalability, ideal for larger, 
// data-sensitive applications.

// With authentication solutions such as NextAuth.js, session management becomes more
//  efficient, using either cookies or database storage. This automation simplifies 
// the development process, but it's important to understand the session management 
// method used by your chosen solution. Ensure it aligns with your application's 
// security and performance requirements.

// Regardless of your choice, prioritize security in your session management strategy.
//  For cookie-based sessions, using secure and HTTP-only cookies is crucial to 
// protect session data. For database sessions, regular backups and secure handling 
// of session data are essential. Implementing session expiry and cleanup mechanisms
//  is vital in both approaches to prevent unauthorized access and maintain 
// application performance and reliability.

// Examples
// Here are authentication solutions compatible with Next.js, please refer to 
// the quickstart guides below to learn how to configure them in your Next.js application:

// Auth0
// Clerk
// Kinde
// Lucia
// NextAuth.js
// Supabase
// Stytch
// Iron Session
// Further Reading
// To continue learning about authentication and security, check out the following resources:

// Understanding XSS Attacks
// Understanding CSRF Attacks
// Previous
// Cypress
// Next
// Deploying