
// Server Actions and Mutations
// Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.

// 🎥 Watch: Learn more about forms and mutations with Server Actions → YouTube (10 minutes).https://youtu.be/dDpZfOQBMaU?si=cJZHlUu_jFhCzHUg

// Convention
// A Server Action can be defined with the React "use server" directive. You can place the directive at the top of an async function to mark the function as a Server Action, or at the top of a separate file to mark all exports of that file as Server Actions.

// Server Components
// Server Components can use the inline function level or module level "use server" directive. To inline a Server Action, add "use server" to the top of the function body:
// app/page.tsx
// Server Component
export default function Page() {
  // Server Action
  async function create() {
    'use server'
    // ...
  }
  return (
    // ...
  )
}

// Client Components
// Client Components can only import actions that use the module-level "use server" directive.
// To call a Server Action in a Client Component, create a new file and add the "use server" directive at the top of it. All functions within the file will be marked as Server Actions that can be reused in both Client and Server Components:

// app/actions.ts
'use server'
 
export async function create() {
  // ...
}

// app/ui/button.tsx
import { create } from '@/app/actions'
 
export function Button() {
  return (
    // ...
  )
}

// You can also pass a Server Action to a Client Component as a prop:
<ClientComponent updateItem={updateItem} />

// app/client-component.jsx
'use client'
 
export default function ClientComponent({ updateItem }) {
  return <form action={updateItem}>{/* ... */}</form>
}

// Behavior
// Server actions can be invoked using the action attribute in a <form> element:(https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms)


// Behavior
// Server actions can be invoked using the action attribute in a <form> element:
    // Server Components support progressive enhancement by default, meaning the form 
    // will be submitted even if JavaScript hasn't loaded yet or is disabled.
    // In Client Components, forms invoking Server Actions will queue submissions 
    // if JavaScript isn't loaded yet, prioritizing client hydration.
    // After hydration, the browser does not refresh on form submission.
// Server Actions are not limited to <form> and can be invoked from event handlers,
//  useEffect, third-party libraries, and other form elements like <button>.
// Server Actions integrate with the Next.js caching and revalidation architecture. 
// When an action is invoked, Next.js can return both the updated UI and new data in
//  a single server roundtrip.
// Behind the scenes, actions use the POST method, and only this HTTP method can invoke them.
// The arguments and return value of Server Actions must be serializable by React. 
// See the React docs for a list of serializable arguments and values.
// Server Actions are functions. This means they can be reused anywhere in your application.
// Server Actions inherit the runtime from the page or layout they are used on.
// Server Actions inherit the Route Segment Config from the page or layout they 
// are used on, including fields like maxDuration.


// Examples
// Forms
// React extends the HTML <form>(https://developer.mozilla.org/docs/Web/HTML/Element/form) element to allow Server Actions to be invoked 
// with the action prop.

// When invoked in a form, the action automatically receives the FormData object.
//  You don't need to use React useState to manage fields, instead, you can extract 
// the data using the native FormData methods(https://developer.mozilla.org/en-US/docs/Web/API/FormData#instance_methods):

// app/invoices/page.tsx
export default function Page() {
  async function createInvoice(formData: FormData) {
    'use server'
    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    }
    // mutate data
    // revalidate cache
  }
  return <form action={createInvoice}>...</form>
}

// Good to know:

// Example: Form with Loading & Error States(https://github.com/vercel/next.js/tree/canary/examples/next-forms)
// When working with forms that have many fields, you may want to consider using
//  the entries()(https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries) method with JavaScript's Object.fromEntries()(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries). 
// For example: 
const rawFormData = Object.fromEntries(formData.entries())
// See React <form> documentation(https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-action) to learn more.


// Passing Additional Arguments
// You can pass additional arguments to a Server Action using the JavaScript 
// bind method.

// app/client-component.tsx
'use client'
import { updateUser } from './actions'
export function UserProfile({ userId }: { userId: string }) {
  const updateUserWithId = updateUser.bind(null, userId)
  return (
    <form action={updateUserWithId}>
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  )
}
// The Server Action will receive the userId argument, in addition to the form data:

// app/actions.js
'use server'
export async function updateUser(userId, formData) {
  // ...
}
// Good to know:
// .bind works in both Server and Client Components. It also supports progressive enhancement.


// Pending states
// You can use the React useFormStatus hook (https://react.dev/reference/react-dom/hooks/useFormStatus)to show a pending state while the form 
// is being submitted.useFormStatus returns the status for a specific <form>, so it must be defined as 
// a child of the <form> element.
// useFormStatus is a React hook and therefore must be used in a Client Component.

// app/submit-button.tsx
'use client'
import { useFormStatus } from 'react-dom'
export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  )
}
// <SubmitButton /> can then be nested in any form:

// app/page.tsx
import { SubmitButton } from '@/app/submit-button'
import { createItem } from '@/app/actions'
// Server Component
export default async function Home() {
  return (
    <form action={createItem}>
      <input type="text" name="field-name" />
      <SubmitButton />
    </form>
  )
}

// Server-side validation and error handling
// We recommend using HTML validation like required and type="email" for basic client-side form validation.

// For more advanced server-side validation, you can use a library like zod(https://zod.dev/) to validate the form fields before mutating the data:

// app/actions.ts
'use server'
import { z } from 'zod'
const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
})
export default async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  // Mutate data
}


// Once the fields have been validated on the server,
//  you can return a serializable object in your action 
// and use the React useFormState hook(https://react.dev/reference/react-dom/hooks/useFormState) to show a message to 
// the user.

// By passing the action to useFormState, the action's function signature changes 
// to receive a new prevState or initialState parameter as its first argument.
// useFormState is a React hook and therefore must be used in a Client Component.

// app/actions.ts
'use server'
export async function createUser(prevState: any, formData: FormData) {
  // ...
  return {
    message: 'Please enter a valid email',
  }
}
// Then, you can pass your action to the useFormState hook and use the returned
//  state to display an error message.

// app/ui/signup.tsx
'use client'
import { useFormState } from 'react-dom'
import { createUser } from '@/app/actions'
const initialState = {
  message: '',
}
export function Signup() {
  const [state, formAction] = useFormState(createUser, initialState)
  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      <button>Sign up</button>
    </form>
  )
}
// Good to know:
// Before mutating data, you should always ensure a user is also authorized to 
// perform the action. See Authentication and Authorization.(https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#authentication-and-authorization)


// Optimistic updates
// You can use the React useOptimistic hook(https://react.dev/reference/react/useOptimistic) to optimistically update the UI before 
// the Server Action finishes, rather than waiting for the response:

// app/page.tsx
'use client'
import { useOptimistic } from 'react'
import { send } from './actions'
type Message = {
  message: string
}
export function Thread({ messages }: { messages: Message[] }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[]>(
    messages,
    (state: Message[], newMessage: string) => [
      ...state,
      { message: newMessage },
    ]
  )
  return (
    <div>
      {optimisticMessages.map((m, k) => (
        <div key={k}>{m.message}</div>
      ))}
      <form
        action={async (formData: FormData) => {
          const message = formData.get('message')
          addOptimisticMessage(message)
          await send(message)
        }}
      >
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
// Nested elements
// You can invoke a Server Action in elements nested inside <form> such as <button>, 
//  <input type="submit">, and <input type="image">. These elements accept the 
// formAction prop or event handlers.

// This is useful in cases where you want to call multiple server actions within 
// a form. For example, you can create a specific <button> element for saving 
// a post draft in addition to publishing it. See the React <form> docs(https://react.dev/reference/react-dom/components/form#handling-multiple-submission-types) for more information.

// Programmatic form submission
// You can trigger a form submission using the requestSubmit() method(https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/requestSubmit). For example, 
// when the user presses ⌘ + Enter, you can listen for the onKeyDown event:

// app/entry.tsx
'use client'
export function Entry() {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === 'Enter' || e.key === 'NumpadEnter')
    ) {
      e.preventDefault()
      e.currentTarget.form?.requestSubmit()
    }
  }
  return (
    <div>
      <textarea name="entry" rows={20} required onKeyDown={handleKeyDown} />
    </div>
  )
}
// This will trigger the submission of the nearest <form> ancestor, which will 
// invoke the Server Action.

// Non-form Elements
// While it's common to use Server Actions within <form> elements, they can also 
// be invoked from other parts of your code such as event handlers and useEffect.

// Event Handlers
// You can invoke a Server Action from event handlers such as onClick. For example, 
// to increment a like count:

// app/like-button.tsx
'use client'
import { incrementLike } from './actions'
import { useState } from 'react'
export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)
  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>
    </>
  )
}
// To improve the user experience, we recommend using other React APIs like useOptimistic and useTransition(https://react.dev/reference/react/useTransition) to update the UI before the Server Action finishes executing on the server, or to show a pending state.

// You can also add event handlers to form elements, for example, to save a form field onChange:

// app/ui/edit-post.tsx
'use client'
import { publishPost, saveDraft } from './actions'
export default function EditPost() {
  return (
    <form action={publishPost}>
      <textarea
        name="content"
        onChange={async (e) => {
          await saveDraft(e.target.value)
        }}
      />
      <button type="submit">Publish</button>
    </form>
  )
}
// For cases like this, where multiple events might be fired in quick succession, 
// we recommend debouncing to prevent unnecessary Server Action invocations.

// useEffect
// You can use the React useEffect hook to invoke a Server Action when the component
//  mounts or a dependency changes. This is useful for mutations that depend on
//  global events or need to be triggered automatically. For example, onKeyDown 
// for app shortcuts, an intersection observer hook for infinite scrolling, or 
// when the component mounts to update a view count:

// flg 
// app/view-count.tsx
'use client'
import { incrementViews } from './actions'
import { useState, useEffect } from 'react'
export default function ViewCount({ initialViews }: { initialViews: number }) {
  const [views, setViews] = useState(initialViews)
  useEffect(() => {
    const updateViews = async () => {
      const updatedViews = await incrementViews()
      setViews(updatedViews)
    }
    updateViews()
  }, []) 
  return <p>Total Views: {views}</p>
}
// Remember to consider the behavior and caveats of useEffect.

// Error Handling
// When an error is thrown, it'll be caught by the nearest error.js or <Suspense> 
// boundary on the client. We recommend using try/catch to return errors to be 
// handled by your UI.

// For example, your Server Action might handle errors from creating a new item 
// by returning a message:

// app/actions.ts
'use server'
export async function createTodo(prevState: any, formData: FormData) {
  try {
    // Mutate data
  } catch (e) {
    throw new Error('Failed to create task')
  }
}
// Good to know:

// Aside from throwing the error, you can also return an object to be handled by 
// useFormState. See Server-side validation and error handling.
// Revalidating data
// You can revalidate the Next.js Cache inside your Server Actions with the revalidatePath API:

// app/actions.ts
// TypeScript
'use server'
import { revalidatePath } from 'next/cache'
export async function createPost() {
  try {
    // ...
  } catch (error) {
    // ...
  }
  revalidatePath('/posts')
}
// Or invalidate a specific data fetch with a cache tag using revalidateTag:

// app/actions.ts
// TypeScript
'use server' 
import { revalidateTag } from 'next/cache'
export async function createPost() {
  try {
    // ...
  } catch (error) {
    // ...
  }
  revalidateTag('posts')
}
// Redirecting
// If you would like to redirect the user to a different route after the completion 
// of a Server Action, you can use redirect API. redirect needs to be called outside 
// of the try/catch block:

// app/actions.ts
// TypeScrip
'use server'
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
export async function createPost(id: string) {
  try {
    // ...
  } catch (error) {
    // ...
  }
  revalidateTag('posts') // Update cached posts
  redirect(`/post/${id}`) // Navigate to the new post page
}
// Cookies
// You can get, set, and delete cookies inside a Server Action using the cookies API:

// app/actions.ts
// TypeScript
'use server'
import { cookies } from 'next/headers'
export async function exampleAction() {
  // Get cookie
  const value = cookies().get('name')?.value
  // Set cookie
  cookies().set('name', 'Delba')
  // Delete cookie
  cookies().delete('name')
}
// See additional examples for deleting cookies from Server Actions.

// Security
// Authentication and authorization
// You should treat Server Actions as you would public-facing API endpoints, 
// and ensure that the user is authorized to perform the action. For example:

// app/actions.ts
'use server'
import { auth } from './lib'
export function addItem() {
  const { user } = auth()
  if (!user) {
    throw new Error('You must be signed in to perform this action')
  }
  // ...
}
// Closures and encryption
// Defining a Server Action inside a component creates a closure where the action 
// has access to the outer function's scope. For example, the publish action has 
// access to the publishVersion variable:

// app/page.tsx
// TypeScript
export default function Page() {
  const publishVersion = await getLatestVersion();
  async function publish(formData: FormData) {
    "use server";
    if (publishVersion !== await getLatestVersion()) {
      throw new Error('The version has changed since pressing publish');
    }
    // ...
  }
  return <button action={publish}>Publish</button>;
}
// Closures are useful when you need to capture a snapshot of data (e.g. publishVersion) at the time of rendering so that it can be used later when the 
// action is invoked.

// However, for this to happen, the captured variables are sent to the client and 
// back to the server when the action is invoked. To prevent sensitive data from 
// being exposed to the client, Next.js automatically encrypts the closed-over 
// variables. A new private key is generated for each action every time a Next.js
//  application is built. This means actions can only be invoked for a specific build.

// Good to know: We don't recommend relying on encryption alone to prevent sensitive 
// values from being exposed on the client. Instead, you should use the React taint 
// APIs to proactively prevent specific data from being sent to the client.

// Overwriting encryption keys (advanced)
// When self-hosting your Next.js application across multiple servers, each server 
// instance may end up with a different encryption key, leading to potential 
// inconsistencies.

// To mitigate this, you can overwrite the encryption key using the 
// process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY environment variable. 
// Specifying this variable ensures that your encryption keys are persistent 
// across builds, and all server instances use the same key.

// This is an advanced use case where consistent encryption behavior across multiple
//  deployments is critical for your application. You should consider standard 
// security practices such key rotation and signing.

// Good to know: Next.js applications deployed to Vercel automatically handle this.

// Allowed origins (advanced)
// Since Server Actions can be invoked in a <form> element, this opens them up to 
// CSRF attacks.

// Behind the scenes, Server Actions use the POST method, and only this HTTP method 
// is allowed to invoke them. This prevents most CSRF vulnerabilities in modern 
// browsers, particularly with SameSite cookies being the default.

// As an additional protection, Server Actions in Next.js also compare the Origin 
// header to the Host header (or X-Forwarded-Host). If these don't match, the 
// request will be aborted. In other words, Server Actions can only be invoked 
// on the same host as the page that hosts it.

// For large applications that use reverse proxies or multi-layered backend 
// architectures (where the server API differs from the production domain), it's
//  recommended to use the configuration option serverActions.allowedOrigins option
//  to specify a list of safe origins. The option accepts an array of strings.

// next.config.js

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
    },
  },
}
// Learn more about Security and Server Actions.

// Additional resources
// For more information on Server Actions, check out the following React docs:

// "use server"
// <form>
// useFormStatus
// useFormState
// useOptimistic
// Next Steps
// Learn how to configure Server Actions in Next.js
// App Router
// ...
// next.config.js Options
// serverActions
// Configure Server Actions behavior in your Next.js application.
// Previous
// Fetching, Caching, and Revalidating
// Next
// Data Fetching Patterns and Best Practices