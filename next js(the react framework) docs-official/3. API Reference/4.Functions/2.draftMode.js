App Router
...
Functions
draftMode
draftMode
The draftMode function allows you to detect Draft Mode inside a Server Component.

app/page.js

import { draftMode } from 'next/headers'
 
export default function Page() {
  const { isEnabled } = draftMode()
  return (
    <main>
      <h1>My Blog Post</h1>
      <p>Draft Mode is currently {isEnabled ? 'Enabled' : 'Disabled'}</p>
    </main>
  )
}
Version History
Version	Changes
v13.4.0	draftMode introduced.
Previous
cookies
Next
fetch