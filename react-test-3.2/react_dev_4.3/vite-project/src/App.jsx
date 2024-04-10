import { useState } from 'react'
import './App.css'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'
import App7 from './App7'
import App8 from './App8'

function App() {
  return (
    <>
      <h1>Synchronizing with Effects</h1>
      <hr />
      <h1>problem1</h1>
      <App1 />
      <hr />
      <h1>problem2</h1>
      <App2 />
      <hr />
      <h1>problem3</h1>
      <App3 />
      <hr />
      <h1>problem4</h1>
      <App4 />
      <hr />
      <h1>problem5</h1>
      <br />
      <App5 />
      <hr />
      <h1>problem6</h1>
      <h2>Try out some challenges</h2>
      <h1>Challenge 1 of 4: Focus a field on mount </h1>
      <p>In this example, the form renders a MyInput component.

        Use the input’s focus() method to make MyInput automatically focus when it appears on the screen. There is already a commented out implementation, but it doesn’t quite work. Figure out why it doesn’t work, and fix it. (If you’re familiar with the autoFocus attribute, pretend that it does not exist: we are reimplementing the same functionality from scratch.)</p>
      <p>To verify that your solution works, press “Show form” and verify that the input receives focus (becomes highlighted and the cursor is placed inside). Press “Hide form” and “Show form” again. Verify the input is highlighted again.

        MyInput should only focus on mount rather than after every render. To verify that the behavior is right, press “Show form” and then repeatedly press the “Make it uppercase” checkbox. Clicking the checkbox should not focus the input above it.</p>
      <b>Solution
        Calling ref.current.focus() during render is wrong because it is a side effect. Side effects should either be placed inside an event handler or be declared with useEffect. In this case, the side effect is caused by the component appearing rather than by any specific interaction, so it makes sense to put it in an Effect.

        To fix the mistake, wrap the ref.current.focus() call into an Effect declaration. Then, to ensure that this Effect runs only on mount rather than after every render, add the empty [] dependencies to it.</b>
      <br />
      <App6 />
      <hr />
      <h1>Challenge 2 of 4: Focus a field conditionally </h1>
      <p>This form renders two MyInput  components.

        Press “Show form” and notice that the second field automatically gets focused. This is because both of the MyInput  components try to focus the field inside. When you call focus() for two input fields in a row, the last one always “wins”.

        Let’s say you want to focus the first field. The first MyInput component now receives a boolean shouldFocus prop set to true. Change the logic so that focus() is only called if the shouldFocus prop received by MyInput is true.</p>
      <p>To verify your solution, press “Show form” and “Hide form” repeatedly. When the form appears, only the first input should get focused. This is because the parent component renders the first input with shouldFocus={true} and the second input with shouldFocus={false}. Also check that both inputs still work and you can type into both of them.</p>
      <b>Solution
        Put the conditional logic inside the Effect. You will need to specify shouldFocus as a dependency because you are using it inside the Effect. (This means that if some input’s shouldFocus changes from false to true, it will focus after mount.)</b>
      <br />
      <App7 />
      <hr />
      <h1>Challenge 3 of 4: Fix an interval that fires twice </h1>
      <p>Challenge 4 of 4: Fix fetching inside an Effect
        This component shows the biography for the selected person. It loads the biography by calling an asynchronous function fetchBio(person) on mount and whenever person changes. That asynchronous function returns a Promise which eventually resolves to a string. When fetching is done, it calls setBio to display that string under the select box.</p>
      <p>There is a bug in this code. Start by selecting “Alice”. Then select “Bob” and then immediately after that select “Taylor”. If you do this fast enough, you will notice that bug: Taylor is selected, but the paragraph below says “This is Bob’s bio.”

        Why does this happen? Fix the bug inside this Effect.</p>
      <b>Solution
        To trigger the bug, things need to happen in this order:

        Selecting 'Bob' triggers fetchBio('Bob')
        Selecting 'Taylor' triggers fetchBio('Taylor')
        Fetching 'Taylor' completes before fetching 'Bob'
        The Effect from the 'Taylor' render calls setBio('This is Taylor’s bio')
        Fetching 'Bob' completes
        The Effect from the 'Bob' render calls setBio('This is Bob’s bio')
        This is why you see Bob’s bio even though Taylor is selected. Bugs like this are called race conditions because two asynchronous operations are “racing” with each other, and they might arrive in an unexpected order.

        To fix this race condition, add a cleanup function:</b>
      <b>Each render’s Effect has its own ignore variable. Initially, the ignore variable is set to false. However, if an Effect gets cleaned up (such as when you select a different person), its ignore variable becomes true. So now it doesn’t matter in which order the requests complete. Only the last person’s Effect will have ignore set to false, so it will call setBio(result). Past Effects have been cleaned up, so the if (!ignore) check will prevent them from calling setBio:

        Selecting 'Bob' triggers fetchBio('Bob')
        Selecting 'Taylor' triggers fetchBio('Taylor') and cleans up the previous (Bob’s) Effect
        Fetching 'Taylor' completes before fetching 'Bob'
        The Effect from the 'Taylor' render calls setBio('This is Taylor’s bio')
        Fetching 'Bob' completes
        The Effect from the 'Bob' render does not do anything because its ignore flag was set to true
        In addition to ignoring the result of an outdated API call, you can also use AbortController to cancel the requests that are no longer needed. However, by itself this is not enough to protect against race conditions. More asynchronous steps could be chained after the fetch, so using an explicit flag like ignore is the most reliable way to fix this type of problems.</b>
      <br />
      <hr />
      <App8/>
      <br />
      <hr />
    </>
  )
}

export default App
