import './App.css'
import UseTransition8 from './App1'
import UseSyncExternalStore2 from './UseSyncExternalStore2'
import UseSyncExternalStore3 from './UseSyncExternalStore3'
import UseTransition1 from './UseTransition1'
import UseTransition2 from './UseTransition2'
import UseTransition3 from './UseTransition3'
import UseTransition4 from './UseTransition4'
import UseTransition5 from './UseTransition5'
import UseTransition6 from './UseTransition6'
import UseTransition7 from './UseTransition7'
import UseSyncExternalStore1 from './useSyncExternalStore1'

function App() {
  return (
    <>
      <h1>useSyncExternalStore Hook</h1>
      <hr />
      <h2>useSyncExternalStore  Problem 1</h2>
      <UseSyncExternalStore1 />
      <hr />
      <h2>useSyncExternalStore  Problem 2</h2>
      <UseSyncExternalStore2 />
      <hr />
      <h2>useSyncExternalStore  Problem 3</h2>
      <UseSyncExternalStore3 />
      <hr />
      <h1>useTransition Hook</h1>
      <hr />
      <h2>useTransition Problem 1</h2>
      <h2>Example 1 of 2: Updating the current tab in a transition </h2>
      <p>In this example, the “Posts” tab is artificially slowed down so that it takes at least a second to render.

        Click “Posts” and then immediately click “Contact”. Notice that this interrupts the slow render of “Posts”. The “Contact” tab shows immediately. Because this state update is marked as a transition, a slow re-render did not freeze the user interface.</p>
      <UseTransition1 />
      <hr />
      <h2>useTransition Problem 2</h2>
      <h2>Example 2 of 2: Updating the current tab without a transition </h2>
      <p>In this example, the “Posts” tab is also artificially slowed down so that it takes at least a second to render. Unlike in the previous example, this state update is not a transition.

        Click “Posts” and then immediately click “Contact”. Notice that the app freezes while rendering the slowed down tab, and the UI becomes unresponsive. This state update is not a transition, so a slow re-render freezed the user interface.</p>
      <UseTransition2 />
      <hr />
      <h2>useTransition Problem 3</h2>
      <UseTransition3 />
      <hr />
      <h2>useTransition Problem 4</h2>
      <UseTransition4 />
      <hr />
      <h2>useTransition Problem 5</h2>
      <UseTransition5 />
      <hr />
      <h2>useTransition Problem 6</h2>
      <UseTransition6 />
      <hr />
      <h2>useTransition Problem 7</h2>
      <UseTransition7 />
      <hr />
      <h2>useTransition Problem 8</h2>
      <UseTransition8 />
      <hr />
    </>
  )
}

export default App
