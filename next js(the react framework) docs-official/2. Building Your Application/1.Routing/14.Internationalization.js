// App Router
// ...
// Routing
// Internationalization
// Internationalization
// Next.js enables you to configure the routing and rendering of content to 
// support multiple languages. Making your site adaptive to different locales 
// includes translated content (localization) and internationalized routes.

// Terminology
// Locale: An identifier for a set of language and formatting preferences. 
// This usually includes the preferred language of the user and possibly 
// their geographic region.
// en-US: English as spoken in the United States
// nl-NL: Dutch as spoken in the Netherlands
// nl: Dutch, no specific region
// Routing Overview
// It’s recommended to use the user’s language preferences in the browser to 
// select which locale to use. Changing your preferred language will modify
//  the incoming Accept-Language header to your application.

// For example, using the following libraries, you can look at an incoming Request 
// to determine which locale to select, based on the Headers, locales you plan to 
// support, and the default locale.

// middleware.js

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en-US', 'nl-NL', 'nl']
let defaultLocale = 'en-US'
 
match(languages, locales, defaultLocale) // -> 'en-US'
// Routing can be internationalized by either the sub-path (/fr/products) or domain 
// (my-site.fr/products). With this information, you can now redirect the user based
//  on the locale inside Middleware.

// middleware.js

import { NextResponse } from "next/server";
 
let locales = ['en-US', 'nl-NL', 'nl']
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request) { ... }
 
export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
// Finally, ensure all special files inside app/ are nested under app/[lang]. 
// This enables the Next.js router to dynamically handle different locales in 
// the route, and forward the lang parameter to every layout and page. For example:

// app/[lang]/page.js

// You now have access to the current locale
// e.g. /en-US/products -> `lang` is "en-US"
export default async function Page({ params: { lang } }) {
  return ...
}
// The root layout can also be nested in the new folder (e.g. app/[lang]/layout.js).

// Localization
// Changing displayed content based on the user’s preferred locale, or localization, 
// is not something specific to Next.js. The patterns described below would work 
// the same with any web application.

// Let’s assume we want to support both English and Dutch content inside our 
// application. We might maintain two different “dictionaries”, which are objects
//  that give us a mapping from some key to a localized string. For example:

// dictionaries/en.json

// {
//   "products": {
//     "cart": "Add to Cart"
//   }
// }
// dictionaries/nl.json

// {
//   "products": {
//     "cart": "Toevoegen aan Winkelwagen"
//   }
// }
// We can then create a getDictionary function to load the translations for 
// the requested locale:

// app/[lang]/dictionaries.js

import 'server-only'
 
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  nl: () => import('./dictionaries/nl.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()
// Given the currently selected language, we can fetch the dictionary inside of a layout or page.

// app/[lang]/page.js

import { getDictionary } from './dictionaries'
 
export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang) // en
  return <button>{dict.products.cart}</button> // Add to Cart
}
// Because all layouts and pages in the app/ directory default to Server Components,
//  we do not need to worry about the size of the translation files affecting our 
// client-side JavaScript bundle size. This code will only run on the server, and 
// only the resulting HTML will be sent to the browser.

// Static Generation
// To generate static routes for a given set of locales, we can use generateStaticParams with any page or layout. This can be global, for example, 
// in the root layout:

// app/[lang]/layout.js

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}

export default function Root({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}
// Resources
// Minimal i18n routing and translations
// next-intl
// next-international
// next-i18n-router
// Previous
// Middleware
// Next
// Data Fetching