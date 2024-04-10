// Font Optimization
// next/font will automatically optimize your fonts (including custom fonts) and 
// remove external network requests for improved privacy and performance.

// 🎥 Watch: Learn more about using next/font → YouTube (6 minutes).

// next/font includes built-in automatic self-hosting for any font file. This means 
// you can optimally load web fonts with zero layout shift, thanks to the underlying 
// CSS size-adjust property used.

// This new font system also allows you to conveniently use all Google Fonts with
//  performance and privacy in mind. CSS and font files are downloaded at build time 
// and self-hosted with the rest of your static assets. No requests are sent to Google
//  by the browser.

// Google Fonts
// Automatically self-host any Google Font. Fonts are included in the deployment and 
// served from the same domain as your deployment. No requests are sent to Google by 
// the browser.

// Get started by importing the font you would like to use from next/font/google as 
// a function. We recommend using variable fonts for the best performance and flexibility.

// app/layout.tsx
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
// If you can't use a variable font, you will need to specify a weight:

// app/layout.tsx
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
// You can specify multiple weights and/or styles by using an array:

// app/layout.js
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
// Good to know: Use an underscore (_) for font names with multiple words.
//  E.g. Roboto Mono should be imported as Roboto_Mono.

// Specifying a subset
// Google Fonts are automatically subset. This reduces the size of the font file 
// and improves performance. You'll need to define which of these subsets you want 
// to preload. Failing to specify any subsets while preload is true will result 
// in a warning.

// This can be done by adding it to the function call:

// app/layout.tsx
const inter = Inter({ subsets: ['latin'] })
// View the Font API Reference for more information.

// Using Multiple Fonts
// You can import and use multiple fonts in your application. There are two approaches 
// you can take.

// The first approach is to create a utility function that exports a font, imports it, 
// and applies its className where needed. This ensures the font is preloaded only 
// when it's rendered:

// app/fonts.ts
import { Inter, Roboto_Mono } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
// app/layout.tsx
import { inter } from './fonts'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
// app/page.tsx
import { roboto_mono } from './fonts'
export default function Page() {
  return (
    <>
      <h1 className={roboto_mono.className}>My page</h1>
    </>
  )
}
// In the example above, Inter will be applied globally, and Roboto Mono can be 
// imported and applied as needed.

// Alternatively, you can create a CSS variable and use it with your preferred CSS 
// solution:

// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google'
import styles from './global.css'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <h1>My App</h1>
        <div>{children}</div>
      </body>
    </html>
  )
}
// app/global.css
    // html {
    //   font-family: var(--font-inter);
    // }
    
    // h1 {
    //   font-family: var(--font-roboto-mono);
    // }
    
// In the example above, Inter will be applied globally, and any <h1> tags will 
// be styled with Roboto Mono.

// Recommendation: Use multiple fonts conservatively since each new font is 
// an additional resource the client has to download.

// Local Fonts
// Import next/font/local and specify the src of your local font file. We recommend 
// using variable fonts for the best performance and flexibility.

// app/layout.tsx
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
// If you want to use multiple files for a single font family, src can be an array:


const roboto = localFont({
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})
// View the Font API Reference for more information.

// With Tailwind CSS
// next/font can be used with Tailwind CSS through a CSS variable.
// In the example below, we use the font Inter from next/font/google (you can use any 
// font from Google or Local Fonts). Load your font with the variable option to define 
// your CSS variable name and assign it to inter. Then, use inter.variable to add 
// the CSS variable to your HTML document.

// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
// Finally, add the CSS variable to your Tailwind CSS config:

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
}
// You can now use the font-sans and font-mono utility classes to apply the font 
// to your elements.

// Preloading
// When a font function is called on a page of your site, it is not globally available 
// and preloaded on all routes. Rather, the font is only preloaded on the related 
// routes based on the type of file where it is used:

// If it's a unique page, it is preloaded on the unique route for that page.
// If it's a layout, it is preloaded on all the routes wrapped by the layout.
// If it's the root layout, it is preloaded on all routes.


// Reusing fonts
// Every time you call the localFont or Google font function, that font is hosted as 
// one instance in your application. Therefore, if you load the same font function in
//  multiple files, multiple instances of the same font are hosted. In this situation, 
// it is recommended to do the following:

// Call the font loader function in one shared file
// Export it as a constant
// Import the constant in each file where you would like to use this font
// API Reference
// Learn more about the next/font API.
// App Router
// ...
// Components
// Font
// Optimizing loading web fonts with the built-in `next/font` loaders.
// Previous
// Videos
// Next
// Metadata