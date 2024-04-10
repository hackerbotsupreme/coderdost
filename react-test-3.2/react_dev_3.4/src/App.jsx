// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "./styles.css"
import MainCounter from "./Problem1"
import MainCounter2 from "./Problem2"
import MainCounter3 from "./Problem3"
import MainCounter4 from "./Problem4"
import MainCounter5 from "./Problem5"
import MainCounter6 from "./Problem6"
import Scoreboard from "./Problem7"
import Scoreboard2 from "./Problem8"
import Scoreboard3 from "./Problem9"
import Messenger from "./Problem10"
import Messenger2 from "./Problem11"
import Challenge1 from "./Problem12"
import SwapTwoFormFields from "./Problem13"
import ContactManager from "./Problem14"
import Gallery from "./Problem15"
import ContactList from "./Problem16"
import Problem3 from './Problem3.1'
import EditableTodolist from './EditableTodolist'
import MainCounter3_1 from './Problem3_1'
import Problem6_1 from './Problem6_1'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <b style={{ textAlign: "center" }}><h1>Preserving and Resetting State</h1></b>
      <hr />
      <h1>3.4-problem 1:State is tied to a position in the render tree </h1>
      <p> there is only one Conter JSX tag, but it’s rendered at two different positions</p>
      <br />
      <MainCounter />
      <br /><br />
      <p>These are two separate counters because each is rendered at its own position in the tree. You don’t usually have to think about these positions to use React, but it can be useful to understand how it works.
        In React, each component on the screen has fully isolated state. For example, if you render two Counter components side by side, each of them will get its own, independent, score and hover states.
        Try clicking both counters and notice they don’t affect each other</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MainCounter2 />
      <br />
      <p>React will keep the state around for as long as you render the same component at the same position in the tree. To see this, increment both counters, then remove the second component by unchecking “Render the second counter” checkbox, and then add it back by ticking it again</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>this is creating an instance </p>
      <MainCounter3 />
      <br />
      <MainCounter3_1/>
      <Problem3 />
      <p>this is toggling/changing visibility </p>
      <br />
      <p>React preserves a component’s state for as long as it’s being rendered at its position in the UI tree. If it gets removed, or a different component gets rendered at the same position, React discards its state.</p>
      <br />
      <b>Important Note </b>
      <p>The state in React is not tied to the visibility of the component, but to the instance of the component. When you toggle the show state, you’re not creating a new instance of the Counter component, but merely hiding or showing the existing one. Therefore, the state of the Counter component is preserved.</p>
      <p>Yes, exactly! If you want to reset the state of a component in React, you need to unmount the component and then mount it again. This creates a new instance of the component with a fresh state</p>
      <br />
      <b>so what is the difference between rendering and creating an instance ?</b>
      <p>Creating an instance: When a component is used in the JSX (the HTML-like syntax used in React), a new instance of that component is created. Each instance has its own state and props, and they are independent of each other. <br />

        Rendering: Rendering is the process of converting React elements (which describe what the user interface should look like) into actual DOM (Document Object Model) nodes that the browser can understand and display on the screen. This process involves creating instances of components, but it also involves updating the instances when state or props change, and many other things. <br />

        So, while creating an instance is a part of the rendering process, rendering involves a lot more than just creating instances. I hope this clarifies your question! If you have more questions, feel free to ask.</p>
      <hr />
      <h1>3.4-problem 2:Same component at the same position preserves state </h1>
      <MainCounter4 />
      <p>It’s the same component at the same position, so from React’s perspective, it’s the same counter.</p>
      <br />
      <br />
      <p>Remember that it’s the position in the UI tree—not in the JSX markup—that matters to React! This component has two return clauses with different Counter  JSX tags inside and outside the if:</p>

      <h2>You might expect the state to reset when you tick checkbox, but it doesn’t! This is because both of these counter tags are rendered at the same position. React doesn’t know where you place the conditions in your function. All it “sees” is the tree you return.
        In both cases, the App component returns a div with Counter as a first child. To React, these two counters have the same “address”: the first child of the first child of the root. This is how React matches them up between the previous and next renders, regardless of how you structure your logic.</h2>
        <h1>react preserves state depending to position in the ui tree and the type  </h1>
      <MainCounter5 />
      <br />
      <hr />
      <h1>3.4-problem 3:Different components at the same position reset state </h1>
      <MainCounter6 />
      <Problem6_1/>
      <br />
      <hr />
      <h1>3.4-problem 4:Resetting state at the same position </h1>
      <Scoreboard />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h1>3.4-problem 5:Option 1: Rendering a component in different positions </h1>
      <Scoreboard2 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>3.4-problem 6:Option 2: Resetting state with a key </h1>
      <Scoreboard3 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h2>before the next task first revise some neccesary stuff</h2>
      <h3>an editable todo list</h3>
      <EditableTodolist/>
      <hr />
      <h1>3.4-problem 7:Resetting a form with a key </h1>
      <Messenger />
      <p>Try entering something into the input, and then press “Alice” or “Bob” to choose a different recipient. You will notice that the input state is preserved because the chat is rendered at the same position in the tree.
        In many apps, this may be the desired behavior, but not in a chat app! You don’t want to let the user send a message they already typed to a wrong person due to an accidental click. To fix it, add a key:</p>
      <p>This ensures that when you select a different recipient, the Chat component will be recreated from scratch, including any state in the tree below it. React will also re-create the DOM elements instead of reusing them.
        Now switching the recipient always clears the text field</p>
      <Messenger2 />
      <br />
      <hr />
      <h3>3.4-problem 8:Preserving state for removed components </h3>
      <p>In a real chat app, you’d probably want to recover the input state when the user selects the previous recipient again. There are a few ways to keep the state “alive” for a component that’s no longer visible:

        You could render all chats instead of just the current one, but hide all the others with CSS. The chats would not get removed from the tree, so their local state would be preserved. This solution works great for simple UIs. But it can get very slow if the hidden trees are large and contain a lot of DOM nodes.
        You could lift the state up and hold the pending message for each recipient in the parent component. This way, when the child components get removed, it doesn’t matter, because it’s the parent that keeps the important information. This is the most common solution.
        You might also use a different source in addition to React state. For example, you probably want a message draft to persist even if the user accidentally closes the page. To implement this, you could have the Chat component initialize its state by reading from the localStorage, and save the drafts there too.
        No matter which strategy you pick, a chat with Alice is conceptually distinct from a chat with Bob, so it makes sense to give a key to the chat tree based on the current recipient.</p>
      <hr />
      <h1>3.4-problem 9:Challenge 1 of 5: Fix disappearing input text </h1>
      <p>This example shows a message when you press the button. However, pressing the button also accidentally resets the input. Why does this happen? Fix it so that pressing the button does not reset the input text.</p>
      <Challenge1 />
      <br />
      <hr />
      <h1>3.4-problem 10:Challenge 2 of 5: Swap two form fields </h1>
      <p>This form lets you enter first and last name. It also has a checkbox controlling which field goes first. When you tick the checkbox, the “Last name” field will appear before the “First name” field.

        It almost works, but there is a bug. If you fill in the “First name” input and tick the checkbox, the text will stay in the first input (which is now “Last name”). Fix it so that the input text also moves when you reverse the order.</p>
      <SwapTwoFormFields />
      <p>Solution
        Give a key to both field components in both if and else branches. This tells React how to “match up” the correct state for either field even if their order within the parent changes</p>
      <hr />
      <h1>3.4-problem 11:Challenge 3 of 5: Reset a detail form </h1>
      <p>This is an editable contact list. You can edit the selected contact’s details and then either press “Save” to update it, or “Reset” to undo your changes.

        When you select a different contact (for example, Alice), the state updates but the form keeps showing the previous contact’s details. Fix it so that the form gets reset when the selected contact changes.</p>
      <ContactManager />
      <p>Solution
        Give key=selectedId to the EditContact component. This way, switching between different contacts will reset the form:</p>
      <hr />
      <h1>3.4-problem 12:Challenge 4 of 5: Clear an image while it’s loading </h1>
      <p>When you press “Next”, the browser starts loading the next image. However, because it’s displayed in the same img tag, by default you would still see the previous image until the next one loads. This may be undesirable if it’s important for the text to always match the image. Change it so that the moment you press “Next”, the previous image immediately clears.</p>
      <Gallery />
      <hr />
      <h1>3.4-problem 13:Challenge 5 of 5: Fix misplaced state in the list </h1>
      <p>In this list, each Contact has state that determines whether “Show email” has been pressed for it. Press “Show email” for Alice, and then tick the “Show in reverse order” checkbox. You will notice that it’s Taylor’s email that is expanded now, but Alice’s—which has moved to the bottom—appears collapsed.

        Fix it so that the expanded state is associated with each contact, regardless of the chosen ordering.</p>
      <ContactList />
      <p>Solution
        The problem is that this example was using index as a key:
        However, you want the state to be associated with each particular contact.
        Using the contact ID as a key instead fixes the issue:</p>
    </>
  )
}

export default App
