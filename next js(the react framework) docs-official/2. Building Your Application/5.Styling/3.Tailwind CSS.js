// Tailwind CSS
// Tailwind CSS is a utility-first CSS framework that works exceptionally well with Next.js.

// Installing Tailwind
// Install the Tailwind CSS packages and run the init command to generate both 
// the tailwind.config.js and postcss.config.js files:

// Terminal
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
// Configuring Tailwind
// Inside tailwind.config.js, add paths to the files that will use Tailwind CSS 
// class names:

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// You do not need to modify postcss.config.js.

// Importing Styles
// Add the Tailwind CSS directives that Tailwind will use to inject its generated 
// styles to a Global Stylesheet in your application, for example:

// app/globals.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// Inside the root layout (app/layout.tsx), import the globals.css stylesheet 
// to apply the styles to every route in your application.

// app/layout.tsx

// TypeScript

import type { Metadata } from 'next'

// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
// Using Classes
// After installing Tailwind CSS and adding the global styles, you can use Tailwind's 
// utility classes in your application.

// app/page.tsx

// TypeScript

export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
}
// Usage with Turbopack
// As of Next.js 13.1, Tailwind CSS and PostCSS are supported with Turbopack.

// Previous
// CSS Modules
// Next
// CSS-in-JS