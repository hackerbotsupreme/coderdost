import TaskApp from "./TaskApp"
import TaskApp2 from "./TaskApp2"
import TaskApp3 from "./TaskApp3"
import Messenger from "./Dispatch actions from event handlers"
import ContactManager_using_state from "./ContactManager_using_state"
import Messenger111 from "./Problem2"
import Messenger222 from "./Problem3"
import Messenger333 from "./Messenger333"
import ContactManager_using_state2 from "./ContactManager_using_state2"
import "./App.css"

function App() {
  return (
    <>
      <b style={{ textAlign: "center" }}><h1>Extracting State Logic into a Reducer</h1></b>
      <hr />
      <h1>3.5-problem1:Consolidate state logic with a reducer </h1>
      <TaskApp />
      <hr />
      <br />
      <h1>3.5-problem2:Step 1: Move from setting state to dispatching actions </h1>
      <TaskApp2 />
      <br />
      <p>If you want, you can even move the reducer to a different file:</p>
      <br />
      <TaskApp3 />
      <hr />
      <h1>3.5-problem3:Comparing useState and useReducer and Writing reducers well </h1>
      <p>read from the docs </p>
      <br />
      <hr />
      <h1>Writing concise reducers with Immer </h1>
      <p>Just like with updating objects and arrays in regular state, you can use the Immer library to make reducers more concise. Here, useImmerReducer lets you mutate the state with push or arr[i] = assignment:</p>
      <br />
      <p>check from the site </p>
      <br />
      <hr />
      <br />
      <h2>Lets revise some imp old exercises  </h2>
      <ContactManager_using_state/>
      <hr />
      <p> when i click on a contact in contactlist , the input values are not changing </p>
      <p>this problem can be hadled in another way </p>
      <p>also the reason i have explained in the comments of this file </p>
      <br />
      <ContactManager_using_state2/>
      react-test-3.2\
      <h1>Try out some challenges</h1>
      <h1>3.5-problem4:Challenge 1 of 4: Dispatch actions from event handlers </h1>
      <p>Currently, the event handlers in ContactList.js and Chat.js have // TODO comments. This is why typing into the input doesn’t work, and clicking on the buttons doesn’t change the selected recipient.
        Replace these two // TODOs with the code to dispatch the corresponding actions. To see the expected shape and the type of the actions, check the reducer in messengerReducer.js. The reducer is already written so you won’t need to change it. You only need to dispatch the actions in ContactList.js and Chat.js.</p>
      <Messenger />
      <p>Solution
        From the reducer code, you can infer that actions need to look like this:</p>
      <hr />
      <h1>3.5-problem5:Challenge 2 of 4: Clear the input on sending a message </h1>
      <p>Currently, pressing “Send” doesn’t do anything. Add an event handler to the “Send” button that will:

        Show an alert with the recipient’s email and the message.
        Clear the message input.</p>
      <h2>rest of the challenges are not perfect to fit here
        try them seperetly</h2>
      <h1>they are good and important </h1>

      <h1>Comparing useState and useReducer </h1>
      <p>Reducers are not without downsides! Here’s a few ways you can compare them: <br />

        Code size: Generally, with useState you have to write less code upfront. <br />
        With useReducer, you have to write both a reducer function and dispatch actions. <br />
        However, useReducer can help cut down on the code if many event handlers modify <br />
        state in a similar way.<br /><br />

        Readability: useState is very easy to read when the state updates are simple. <br />
        When they get more complex, they can bloat your component’s code and make it <br />
        difficult to scan. In this case, useReducer lets you cleanly separate the how <br />
        of update logic from the what happened of event handlers.<br /><br />

        Debugging: When you have a bug with useState, it can be difficult to tell <br />
        where the state was set incorrectly, and why. With useReducer, you can add <br />
        a console log into your reducer to see every state update, and why it happened <br />
        (due to which action). If each action is correct, you’ll know that the mistake <br />
        is in the reducer logic itself. However, you have to step through more code <br />
        than with useState.<br /><br />

        Testing: A reducer is a pure function that doesn’t depend on your component. <br />
        This means that you can export and test it separately in isolation. While <br />
        generally it’s best to test components in a more realistic environment, for <br />
        complex state update logic it can be useful to assert that your reducer returns <br />
        a particular state for a particular initial state and action.<br /><br /><br />

        Personal preference: Some people like reducers, others don’t. That’s okay. It’s <br />
        a matter of preference. You can always convert between useState and useReducer <br />
        back and forth: they are equivalent!<br /><br />

        We recommend using a reducer if you often encounter bugs due to incorrect state <br />
        updates in some component, and want to introduce more structure to its code. <br />
        You don’t have to use reducers for everything: feel free to mix and match! You <br />
        can even useState and useReducer in the same component.</p><br /><br />

      <h1>Writing reducers well </h1>
      <p>Keep these two tips in mind when writing reducers:<br /><br />

        Reducers must be pure. Similar to state updater functions, reducers run <br />
        during rendering! (Actions are queued until the next render.) This means <br />
        that reducers must be pure—same inputs always result in the same output. <br />
        They should not send requests, schedule timeouts, or perform any side <br />
        effects (operations that impact things outside the component). <br />
        They should update objects and arrays without mutations.<br /><br />

        Each action describes a single user interaction, even if that leads to <br />
        multiple changes in the data. For example, if a user presses “Reset” on <br />
        a form with five fields managed by a reducer, it makes more sense to <br />
        dispatch one reset_form action rather than five separate set_field actions.<br />
        If you log every action in a reducer, that log should be clear enough for <br />
        you to reconstruct what interactions or responses happened in what order. <br />
        This helps with debugging!</p><br /><br />

      <h1>Writing concise reducers with Immer </h1>
      see on site <br /><br />

      Reducers must be pure, so they shouldn’t mutate state. But Immer provides <br />
      you with a special draft object which is safe to mutate. Under the hood, <br />
      Immer will create a copy of your state with the changes you made to the draft. <br />
      This is why reducers managed by useImmerReducer can mutate their first argument <br />
      and don’t need to return state.<br /><br />

      Recap<br />
      To convert from useState to useReducer:<br />
      Dispatch actions from event handlers.<br />
      Write a reducer function that returns the next state for a given state and action.<br />
      Replace useState with useReducer.<br />
      Reducers require you to write a bit more code, but they help with debugging and testing.<br />
      Reducers must be pure.<br />
      Each action describes a single user interaction.<br />
      Use Immer if you want to write reducers in a mutating style.<br /><br />

      <h1>Why are reducers called this way? </h1>

      Challenge 2 of 4: Clear the input on sending a message <br />
      Currently, pressing “Send” doesn’t do anything. Add an event handler<br />
      to the “Send” button that will:<br /><br />

      Show an alert with the recipient’s email and the message.<br />
      Clear the message input.<br /> <hr />
      Solution<br />
      There are a couple of ways you could do it in the “Send” button event <br />
      handler. One approach is to show an alert and then dispatch an edited_message <br />
      action with an empty message:<br />
      <Messenger111 />
      <hr />
      Challenge 3 of 4: Restore input values when switching between tabs <br />
      In this example, switching between different recipients always clears the text input:<br />
      This is because you don’t want to share a single message draft between several <br />
      recipients. But it would be better if your app “remembered” a draft for each <br />
      contact separately, restoring them when you switch contacts.<br /><br />

      Your task is to change the way the state is structured so that you remember <br />
      a separate message draft per contact. You would need to make a few changes <br />
      to the reducer, the initial state, and the components.<br /> <hr />
      Solution<br />
      You’ll need to update the reducer to store and update a separate message draft per contact:<br />
      <Messenger222 /> <hr />
      Challenge 4 of 4: Implement useReducer from scratch <br />
      In the earlier examples, you imported the useReducer Hook from React. This time, <br />
      you will implement the useReducer Hook itself! Here is a stub to get you started. <br />
      It shouldn’t take more than 10 lines of code.<br /><br />

      To test your changes, try typing into the input or select a contact.<br />  <hr />
      Solution<br />
      Dispatching an action calls a reducer with the current state and the action, and <br /><br />
      stores the result as the next state. This is what it looks like in code:<br />
      <Messenger333 />
    </>
  )
}

export default App
