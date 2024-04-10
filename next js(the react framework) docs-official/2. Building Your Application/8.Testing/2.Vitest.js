// App Router
// ...
// Testing
// Vitest
// Setting up Vitest with Next.js
// Vite and React Testing Library are frequently used together for Unit Testing. 
// This guide will show you how to setup Vitest with Next.js and write your first 
// tests.

// Good to know: Since async Server Components are new to the React ecosystem, 
// Vitest currently does not support them. While you can still run unit tests 
// for synchronous Server and Client Components, we recommend using an E2E tests 
// for async components.

// Quickstart
// You can use create-next-app with the Next.js with-vitest example to quickly 
// get started:

// Terminal
// npx create-next-app@latest --example with-vitest with-vitest-app

// Manual Setup
// To manually set up Vitest, install vitest and the following packages as
//  dev dependencies:

// Terminal
// npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react
// # or
// yarn add -D vitest @vitejs/plugin-react jsdom @testing-library/react
// # or
// pnpm install -D vitest @vitejs/plugin-react jsdom @testing-library/react
// # or
// bun add -D vitest @vitejs/plugin-react jsdom @testing-library/react

// Create a vitest.config.ts|js file in the root of your project, and add 
// the following options:

// vitest.config.ts

// TypeScript

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})
// For more information on configuring Vitest, please refer to 
// the Vitest Configuration docs.

// Then, add a test script to your package.json:

// package.json
// {
//   "scripts": {
//     "dev": "next dev",
//     "build": "next build",
//     "start": "next start",
//     "test": "vitest"
//   }
// }

// When you run npm run test, Vitest will watch for changes in your project by default.

// Creating your first Vitest Unit Test
// Check that everything is working by creating a test to check if 
// the <Page /> component successfully renders a heading:

// app/page.tsx

// TypeScript

import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
// __tests__/page.test.tsx

// TypeScript

import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
test('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
// Good to know: The example above uses the common __tests__ convention,
//  but test files can also be colocated inside the app router.

// Running your tests
// Then, run the following command to run your tests:

// Terminal

// npm run test
// # or
// yarn test
// # or
// pnpm test
// # or
// bun test
// Additional Resources
// You may find these resources helpful:

// Next.js with Vitest example
// Vitest Docs
// React Testing Library Docs
// Previous
// Testing
// Next
// Jest