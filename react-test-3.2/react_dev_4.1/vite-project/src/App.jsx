
import './App.css'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'
import App7 from './App7'
import App8 from './App8'
import App9 from './App9'
function App() {
  return (
    <>
      <h1>Referencing Values with Refs</h1>
      When you want a component to “remember” some information, but <br />
      you don’t want that information to trigger new renders, you can use a ref.<br />
      <hr />
      <h2>problem1-Adding a ref to your component </h2>
      You can add a ref to your component by importing the useRef Hook from React:<br />
      Inside your component, call the useRef Hook and pass the initial value that<br />
      you want to reference as the only argument. For example, here is a ref to the value 0:<br />
      useRef returns an object like this:<br />
      You can access the current value of that ref through the ref.current property.<br />
      This value is intentionally mutable, meaning you can both read and write to it.<br />
      It’s like a secret pocket of your component that React doesn’t track.<br />
      (This is what makes it an “escape hatch” from React’s one-way data flow—more on that below!)<br /> <br />
      <App1 /> <br /> <br />
      The ref points to a number, but, like state, you could point to anything: a string,<br />
      an object, or even a function. Unlike state, ref is a plain JavaScript object with<br />
      the current property that you can read and modify.<br /><br />

      Note that the component doesn’t re-render with every increment. Like state, refs are<br />
      retained by React between re-renders. However, setting state re-renders a component.<br />
      Changing a ref does not!<br /><br />
      <br />
      <hr />
      <h2>problem2-Example: building a stopwatch </h2>
      You can combine refs and state in a single component.<br />
      When the “Stop” button is pressed, you need to cancel the existing interval so that it<br />
      stops updating the now state variable. You can do this by calling clearInterval, but<br />
      you need to give it the interval ID that was previously returned by the setInterval<br />
      call when the user pressed Start. You need to keep the interval ID somewhere. Since<br />
      the interval ID is not used for rendering, you can keep it in a ref:<br /><br />


      In order to display how much time has passed since the user pressed “Start”, you will<br />
      need to keep track of when the Start button was pressed and what the current time is.<br />
      This information is used for rendering, so you’ll keep it in state:<br /><br />
      <App2 />
      <br />
      <hr />
      <h2>problem3</h2>
      <App3 />
      <br />
      <hr />
      <h2>problem4-Differences between refs and state </h2>
      Perhaps you’re thinking refs seem less “strict” than state—you can mutate them instead <br />
      of always having to use a state setting function, for instance. But in most cases, you’ll<br />
      want to use state. Refs are an “escape hatch” you won’t need often. Here’s how state and<br />
      refs compare:<br /><br />

      Certainly! Let's break down the differences between `useRef` and `useState` in React: <br /><br />

      1. **`useRef`**:<br />
      - **Returns Current Value**: `useRef(initialValue)` returns the **current value** of the reference.<br />
      - **Mutable**: You can modify and update the current value of the reference **outside of the rendering process**.<br />
      - **No Re-render Trigger**: Changes to a `useRef` value do **not** trigger a re-render.<br />
      - **Reading During Rendering**: You **shouldn't read (or write)** the current value during rendering.<br /><br />

      2. **`useState`**: <br />
      - **Returns Tuple**: `useState(initialValue)` returns a **tuple** containing the **current value** of a state variable and a **state setter function** (`[value, setValue]`). <br />
      - **Immutable**: To modify state variables, you **must use the state setter function**, which queues a re-render.<br />
      - **Re-render Trigger**: Changes to a `useState` value **trigger a re-render**.<br />
      - **Reading State**: You can read state at any time. However, each render has its own snapshot of state, which does not change.<br /><br />

      In summary, `useRef` is suitable for managing mutable values that don't affect rendering, while `useState` is used for managing state variables that trigger re-renders when updated. 🚀<br /><br />
<br /> <br />
      <App4 /> <br /> <br />
      Because the count value is displayed, it makes sense to use a state value for it. When<br />
      the counter’s value is set with setCount(), React re-renders the component and the screen<br />
      updates to reflect the new count.<br /><br /><br />

      If you tried to implement this with a ref, React would never re-render the component, so<br />
      you’d never see the count change! See how clicking this button does not update its text:<br /><br />
      <br />
      <hr />
      <h2>problem5</h2>
      <App5 />
      <br />
      <hr />
      <h2>Try out some challenges</h2>
      <h1>Challenge 1 of 4: Fix a broken chat input </h1>
      <p>Type a message and click “Send”. You will notice there is a three second delay before<br />
        you see the “Sent!” alert. During this delay, you can see an “Undo” button. Click it.<br />
        This “Undo” button is supposed to stop the “Sent!” message from appearing. It does this<br />
        by calling clearTimeout for the timeout ID saved during handleSend. However, even after<br />
        “Undo” is clicked, the “Sent!” message still appears. Find why it doesn’t work, and<br />
        fix it.</p><br />
      <b>Solution<br />
        Whenever your component re-renders (such as when you set state), all local variables get<br />
        initialized from scratch. This is why you can’t save the timeout ID in a local variable<br />
        like timeoutID and then expect another event handler to “see” it in the future. Instead,<br />
        store it in a ref, which React will preserve between renders.</b>
      <App6 />
      <br />
      <hr />
      <h1>Challenge 2 of 4: Fix a component failing to re-render </h1>
      <p>This button is supposed to toggle between showing “On” and “Off”. However, it always <br />
        shows “Off”. What is wrong with this code? Fix it.</p>
      <b>Solution<br />
        In this example, the current value of a ref is used to calculate the rendering output:<br />
        isOnRef.current ? On : Off. This is a sign that this information should not be in a ref,<br />
        and should have instead been put in state. To fix it, remove the ref and use state instead:</b>
      <br />
      <App7 />
      How does useRef work inside? <br /> <br />
      Although both useState and useRef are provided by React, in principle useRef could be <br />
      implemented on top of useState. You can imagine that inside of React, useRef is implemented<br />
      like this:<br /><br />
      During the first render, useRef returns  current: initialValue . This object is stored by <br />
      React, so during the next render the same object will be returned. Note how the state setter<br />
      is unused in this example. It is unnecessary because useRef always needs to return the same<br />
      object!<br /><br />

      React provides a built-in version of useRef because it is common enough in practice. But you<br />
      can think of it as a regular state variable without a setter. If you’re familiar with<br />
      object-oriented programming, refs might remind you of instance fields—but instead of <br />
      this.something you write somethingRef.current.<br /><br /><br />

      When to use refs<br />
      Typically, you will use a ref when your component needs to “step outside” React and<br />
      communicate with external APIs—often a browser API that won’t impact the appearance<br />
      of the component. Here are a few of these rare situations:<br /><br />

      Storing timeout IDs<br />
      Storing and manipulating DOM elements, which we cover on the next page<br />
      Storing other objects that aren’t necessary to calculate the JSX.<br />
      If your component needs to store some value, but it doesn’t impact the rendering logic,<br />
      choose refs.<br /><br />

      Best practices for refs<br />
      Following these principles will make your components more predictable:<br /><br />

      Treat refs as an escape hatch. Refs are useful when you work with external systems or<br />
      browser APIs. If much of your application logic and data flow relies on refs, you might<br />
      want to rethink your approach.<br /><br />
      Don’t read or write ref.current during rendering. If some information is needed during<br />
      rendering, use state instead. Since React doesn’t know when ref.current changes, even<br />
      reading it while rendering makes your component’s behavior difficult to predict. (The only<br />
      exception to this is code like if (!ref.current) ref.current = new Thing() which only sets<br />
      the ref once during the first render.)<br /><br />
      Limitations of React state don’t apply to refs. For example, state acts like a snapshot<br />
      for every render and doesn’t update synchronously. But when you mutate the current value<br />
      of a ref, it changes immediately:<br /><br /><br />

      ref.current = 5;<br />
      console.log(ref.current); // 5<br />
      This is because the ref itself is a regular JavaScript object, and so it behaves like one.<br /><br />

      You also don’t need to worry about avoiding mutation when you work with a ref. As long<br />
      as the object you’re mutating isn’t used for rendering, React doesn’t care what you do<br />
      with the ref or its contents.<br /><br />

      Refs and the DOM<br />
      You can point a ref to any value. However, the most common use case for a ref is to<br />
      access a DOM element. For example, this is handy if you want to focus an input<br />
      programmatically. When you pass a ref to a ref attribute in JSX, like div ref=myRef,<br />
      React will put the corresponding DOM element into myRef.current. Once the element is<br />
      removed from the DOM, React will update myRef.current to be null. You can read more<br />
      about this in Manipulating the DOM with Refs.<br /><br />

      Recap<br />
      Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t <br />
      need them often.<br />
      A ref is a plain JavaScript object with a single property called current, which you<br />
      can read or set.<br />
      You can ask React to give you a ref by calling the useRef Hook.<br />
      Like state, refs let you retain information between re-renders of a component.<br />
      Unlike state, setting the ref’s current value does not trigger a re-render.<br />
      Don’t read or write ref.current during rendering. This makes your component hard to predict.<br /><br />


      <br />
      <hr />
      <h1>Challenge 3 of 4: Challenge 3 of 4: Fix debouncing  </h1>
      <p>In this example, all button click handlers are “debounced”. To see what this means,<br />
        press one of the buttons. Notice how the message appears a second later. If you press<br />
        the button while waiting for the message, the timer will reset. So if you keep clicking<br />
        the same button fast many times, the message won’t appear until a second after you stop<br />
        clicking. Debouncing lets you delay some action until the user “stops doing things”.<br /><br />

        This example works, but not quite as intended. The buttons are not independent. To see <br />
        the problem, click one of the buttons, and then immediately click another button. You’d <br />
        expect that after a delay, you would see both button’s messages. But only the last<br />
        button’s message shows up. The first button’s message gets lost.<br /><br />

        Why are the buttons interfering with each other? Find and fix the issue.</p>
      <b>Solution <br />
        A variable like timeoutID is shared between all components. This is why clicking on<br />
        the second button resets the first button’s pending timeout. To fix this, you can keep<br />
        timeout in a ref. Each button will get its own ref, so they won’t conflict with each<br />
        other. Notice how clicking two buttons fast will show both messages.</b>
      <br />
      <App8 />
      <br />
      <hr />
      <h1>Challenge 4 of 4: Read the latest state  </h1>
      <p>In this example, after you press “Send”, there is a small delay before the message <br />
        is shown. Type “hello”, press Send, and then quickly edit the input again. Despite<br />
        your edits, the alert would still show “hello” (which was the value of state at the<br />
        time the button was clicked).<br /><br />

        Usually, this behavior is what you want in an app. However, there may be occasional<br />
        cases where you want some asynchronous code to read the latest version of some state.<br />
        Can you think of a way to make the alert show the current input text rather than what<br />
        it was at the time of the click?</p><br />
      <b>Solution<br />
        State works like a snapshot, so you can’t read the latest state from an asynchronous<br />
        operation like a timeout. However, you can keep the latest input text in a ref. A ref<br />
        is mutable, so you can read the current property at any time. Since the current text<br />
        is also used for rendering, in this example, you will need both a state variable (for<br />
        rendering), and a ref (to read it in the timeout). You will need to update the current<br />
        ref value manually.</b><br /><br />
      <br />
      <App9 />
      <br />
      <hr />
    </>
  )
}

export default App
