
import './App.css'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'

function App() {

  return (
    <>
      <h1>Scaling Up with Reducer and Context</h1>
      Reducers let you consolidate a component’s state update logic.  <br />
      Context lets you pass information deep down to other components. <br />
      You can combine reducers and context together to manage state <br />
      of a complex screen.<br /> <br />
      <hr />
      <h2>problem1-Combining a reducer with context </h2>
      A reducer helps keep the event handlers short and concise. <br />
      However, as your app grows, you might run into another difficulty. <br />
      Currently, the tasks state and the dispatch function are only available <br />
      in the top-level TaskApp component. To let other components read the list <br />
      of tasks or change it, you have to explicitly pass down the current state <br />
      and the event handlers that change it as props.<br /><br />
      For example, TaskApp passes a list of tasks and the event handlers to TaskList:<br />
      And TaskList passes the event handlers to Task:<br /><br /><br />

      In a small example like this, this works well, but if you have tens or hundreds <br />
      of components in the middle, passing down all state and functions can be quite frustrating!<br /><br />

      This is why, as an alternative to passing them through props, you might want <br />
      to put both the tasks state and the dispatch function into context. This way, <br />
      any component below TaskApp in the tree can read the tasks and dispatch actions <br />
      without the repetitive “prop drilling”.<br /> <br />

      Here is how you can combine a reducer with context:<br /><br />

      Create the context.<br />
      Put state and dispatch into context.<br />
      Use context anywhere in the tree.<br /><br />

      <App1 />
      <br />
      <hr />
      <h2>problem2-Step 1: Create the context  </h2>

      <App2 />
      <br />
      <hr />
      <h2>problem3-Step 2: Put state and dispatch into context </h2>
      <App3 />
      <br />
      <hr />
      <h2>problem4-Step4 : Step 3: Use context anywhere in the tree  </h2>
      <App4 />
      <br />
      <hr />
      <h2>problem5-Step5 :Moving all wiring into a single file   </h2>
      You don’t have to do this, but you could further declutter the components by moving <br />
      both reducer and context into a single file. Currently, TasksContext.js contains only <br />
      two context declarations:<br /><br />

      This file is about to get crowded! You’ll move the reducer into that same file. <br />
      Then you’ll declare a new TasksProvider component in the same file. This component <br />
      will tie all the pieces together:<br />

      It will manage the state with a reducer.<br />
      It will provide both contexts to components below.<br />
      It will take children as a prop so you can pass JSX to it.<br />
      This removes all the complexity and wiring from your TaskApp component:<br /><br />


      <App5 />

      <br />
      You can also export functions that use the context from TasksContext.js:<br />

      When a component needs to read context, it can do it through these functions:<br /><br />

      This doesn’t change the behavior in any way, but it lets you later split these contexts <br />
      further or add some logic to these functions. Now all of the context and reducer wiring <br />
      is in TasksContext.js. This keeps the components clean and uncluttered, focused on what <br />
      they display rather than where they get the data:<br /><br />

      You can think of TasksProvider as a part of the screen that knows how to deal with tasks, <br />
      useTasks as a way to read them, and useTasksDispatch as a way to update them from any <br />
      component below in the tree.<br /><br />

      <h1>Note</h1>
      Functions like useTasks and useTasksDispatch are called Custom Hooks. Your function is <br />
      considered a custom Hook if its name starts with use. This lets you use other Hooks, <br />
      like useContext, inside it.<br />

      As your app grows, you may have many context-reducer pairs like this. This is a powerful <br />
      way to scale your app and lift state up without too much work whenever you want to access <br />
      the data deep in the tree.<br />

      <hr />
      <h2>problem5-Step6 :Moving all wiring into a single file   </h2>
      <App6 />
      <br />
      <hr />
      react-test-3.2\react_dev_3.7\vite-project\src\App.jsx
      <h1>Recap</h1> <br />
      You can combine reducer with context to let any component read and update state above it.<br />
      To provide state and the dispatch function to components below:<br />
      Create two contexts (for state and for dispatch functions).<br />
      Provide both contexts from the component that uses the reducer.<br />
      Use either context from components that need to read them.<br />
      You can further declutter the components by moving all wiring into one file.<br />
      You can export a component like TasksProvider that provides context.<br />
      You can also export custom Hooks like useTasks and useTasksDispatch to read it.<br />
      You can have many context-reducer pairs like this in your app.<br /><br /><br />

    </>
  )
}

export default App
