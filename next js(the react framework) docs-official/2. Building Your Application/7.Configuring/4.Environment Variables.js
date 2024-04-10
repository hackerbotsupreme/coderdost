App Router
...
Configuring
Environment Variables
Environment Variables
Environment Variables
Next.js comes with built-in support for environment variables, which allows you to do the following:

Use .env.local to load environment variables
Bundle environment variables for the browser by prefixing with NEXT_PUBLIC_
Loading Environment Variables
Next.js has built-in support for loading environment variables from .env.local into process.env.

.env.local

DB_HOST=localhost
DB_USER=myuser
DB_PASS=mypassword
Note: Next.js also supports multiline variables inside of your .env* files:


# .env.local
 
# you can write with line breaks
PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
Kh9NV...
...
-----END DSA PRIVATE KEY-----"
 
# or with `\n` inside double quotes
PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nKh9NV...\n-----END DSA PRIVATE KEY-----\n"
Note: If you are using a /src folder, please note that Next.js will load the .env files only from the parent folder and not from the /src folder. This loads process.env.DB_HOST, process.env.DB_USER, and process.env.DB_PASS into the Node.js environment automatically allowing you to use them in Route Handlers.

For example:

app/api/route.js

export async function GET() {
  const db = await myDB.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  })
  // ...
}
Referencing Other Variables
Next.js will automatically expand variables that use $ to reference other variables e.g. $VARIABLE inside of your .env* files. This allows you to reference other secrets. For example:

.env

TWITTER_USER=nextjs
TWITTER_URL=https://twitter.com/$TWITTER_USER
In the above example, process.env.TWITTER_URL would be set to https://twitter.com/nextjs.

Good to know: If you need to use variable with a $ in the actual value, it needs to be escaped e.g. \$.

Bundling Environment Variables for the Browser
Non-NEXT_PUBLIC_ environment variables are only available in the Node.js environment, meaning they aren't accessible to the browser (the client runs in a different environment).

In order to make the value of an environment variable accessible in the browser, Next.js can "inline" a value, at build time, into the js bundle that is delivered to the client, replacing all references to process.env.[variable] with a hard-coded value. To tell it to do this, you just have to prefix the variable with NEXT_PUBLIC_. For example:

Terminal

NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
This will tell Next.js to replace all references to process.env.NEXT_PUBLIC_ANALYTICS_ID in the Node.js environment with the value from the environment in which you run next build, allowing you to use it anywhere in your code. It will be inlined into any JavaScript sent to the browser.

Note: After being built, your app will no longer respond to changes to these environment variables. For instance, if you use a Heroku pipeline to promote slugs built in one environment to another environment, or if you build and deploy a single Docker image to multiple environments, all NEXT_PUBLIC_ variables will be frozen with the value evaluated at build time, so these values need to be set appropriately when the project is built. If you need access to runtime environment values, you'll have to setup your own API to provide them to the client (either on demand or during initialization).

pages/index.js

import setupAnalyticsService from '../lib/my-analytics-service'
 
// 'NEXT_PUBLIC_ANALYTICS_ID' can be used here as it's prefixed by 'NEXT_PUBLIC_'.
// It will be transformed at build time to `setupAnalyticsService('abcdefghijk')`.
setupAnalyticsService(process.env.NEXT_PUBLIC_ANALYTICS_ID)
 
function HomePage() {
  return <h1>Hello World</h1>
}
 
export default HomePage
Note that dynamic lookups will not be inlined, such as:


// This will NOT be inlined, because it uses a variable
const varName = 'NEXT_PUBLIC_ANALYTICS_ID'
setupAnalyticsService(process.env[varName])
 
// This will NOT be inlined, because it uses a variable
const env = process.env
setupAnalyticsService(env.NEXT_PUBLIC_ANALYTICS_ID)
Runtime Environment Variables
Next.js can support both build time and runtime environment variables.

By default, environment variables are only available on the server. To expose an environment variable to the browser, it must be prefixed with NEXT_PUBLIC_. However, these public environment variables will be inlined into the JavaScript bundle during next build.

To read runtime environment variables, we recommend using getServerSideProps or incrementally adopting the App Router. With the App Router, we can safely read environment variables on the server during dynamic rendering. This allows you to use a singular Docker image that can be promoted through multiple environments with different values.


import { unstable_noStore as noStore } from 'next/cache'
 
export default function Component() {
  noStore()
  // cookies(), headers(), and other dynamic functions
  // will also opt into dynamic rendering, making
  // this env variable is evaluated at runtime
  const value = process.env.MY_VALUE
  // ...
}
Good to know:

You can run code on server startup using the register function.
We do not recommend using the runtimeConfig option, as this does not work with the standalone output mode. Instead, we recommend incrementally adopting the App Router.
Default Environment Variables
In general only one .env.local file is needed. However, sometimes you might want to add some defaults for the development (next dev) or production (next start) environment.

Next.js allows you to set defaults in .env (all environments), .env.development (development environment), and .env.production (production environment).

.env.local always overrides the defaults set.

Good to know: .env, .env.development, and .env.production files should be included in your repository as they define defaults. .env*.local should be added to .gitignore, as those files are intended to be ignored. .env.local is where secrets can be stored.

Environment Variables on Vercel
When deploying your Next.js application to Vercel, Environment Variables can be configured in the Project Settings.

All types of Environment Variables should be configured there. Even Environment Variables used in Development – which can be downloaded onto your local device afterwards.

If you've configured Development Environment Variables you can pull them into a .env.local for usage on your local machine using the following command:

Terminal

vercel env pull .env.local
Good to know: When deploying your Next.js application to Vercel, your environment variables in .env* files will not be made available to Edge Runtime, unless their name are prefixed with NEXT_PUBLIC_. We strongly recommend managing your environment variables in Project Settings instead, from where all environment variables are available.

Test Environment Variables
Apart from development and production environments, there is a 3rd option available: test. In the same way you can set defaults for development or production environments, you can do the same with a .env.test file for the testing environment (though this one is not as common as the previous two). Next.js will not load environment variables from .env.development or .env.production in the testing environment.

This one is useful when running tests with tools like jest or cypress where you need to set specific environment vars only for testing purposes. Test default values will be loaded if NODE_ENV is set to test, though you usually don't need to do this manually as testing tools will address it for you.

There is a small difference between test environment, and both development and production that you need to bear in mind: .env.local won't be loaded, as you expect tests to produce the same results for everyone. This way every test execution will use the same env defaults across different executions by ignoring your .env.local (which is intended to override the default set).

Good to know: similar to Default Environment Variables, .env.test file should be included in your repository, but .env.test.local shouldn't, as .env*.local are intended to be ignored through .gitignore.

While running unit tests you can make sure to load your environment variables the same way Next.js does by leveraging the loadEnvConfig function from the @next/env package.


// The below can be used in a Jest global setup file or similar for your testing set-up
import { loadEnvConfig } from '@next/env'
 
export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}
Environment Variable Load Order
Environment variables are looked up in the following places, in order, stopping once the variable is found.

process.env
.env.$(NODE_ENV).local
.env.local (Not checked when NODE_ENV is test.)
.env.$(NODE_ENV)
.env
For example, if NODE_ENV is development and you define a variable in both .env.development.local and .env, the value in .env.development.local will be used.

Good to know: The allowed values for NODE_ENV are production, development and test.

Good to know
If you are using a /src directory, .env.* files should remain in the root of your project.
If the environment variable NODE_ENV is unassigned, Next.js automatically assigns development when running the next dev command, or production for all other commands.
Version History
Version	Changes
v9.4.0	Support .env and NEXT_PUBLIC_ introduced.
Previous
ESLint
Next
Absolute Imports and Module Path Aliase