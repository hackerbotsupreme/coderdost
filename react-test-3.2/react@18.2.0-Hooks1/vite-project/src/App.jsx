
import './App.css'
import UseCallback2 from './UseCallback2'
import UseContext1 from './UseContext1'
import UseContext2 from './UseContext2'
import UseContext3 from './UseContext3'
import UseContext4 from './UseContext4'
import UseContext5 from './UseContext5'
import UseContext6 from './UseContext6'
import UseContext7 from './UseContext7'
import UseContext8 from './UseContext8'
import UseContext9 from './UseContext9'
import UseDeferredValue2 from './UseDeferredValue2'
import UseDeferredValue3 from './UseDeferredValue3'
import UseDeferredValue5 from './UseDeferredValue5'
import UseDeferredValue1 from './UseDefferedValue1'
import UseEffect1 from './UseEffect'
import UseEffect10 from './UseEffect10'
import UseEffect11 from './UseEffect11'
import UseEffect12 from './UseEffect12'
import UseEffect13 from './UseEffect13'
import UseEffect14 from './UseEffect14'
import UseEffect15 from './UseEffect15'
import UseEffect16 from './UseEffect16'
import UseEffect2 from './UseEffect2'
import UseEffect3 from './UseEffect3'
import UseEffect4 from './UseEffect4'
import UseEffect5 from './UseEffect5'
import UseEffect6 from './UseEffect6'
import UseEffect7 from './UseEffect7'
import UseEffect8 from './UseEffect8'
import UseEffect9 from './UseEffect9'
import UseDeferredValue4 from './UsseDefferredValue4'
import Use1 from './use1'
import UseCallback1 from './useCallback1'
import UseCallback3 from './useCallback3'
import UseDebugValue from './useDebugValue1'

function App() {
  return (
    <>
      {/* The `use` hook you're referring to is currently only available in React’s Canary and experimental channels¹. It's a proposed new feature that adds first-class support for Promises². However, as of my knowledge cutoff in 2021, it has not been released in the stable version of React. For the stable version, you would typically use the `useContext` hook to access context values. Please check the official React documentation or community resources for the most up-to-date information. 😊

        Source: Conversation with Bing, 7/1/2024
        (1) use – React. https://react.dev/reference/react/use.
        (2) All About React’s Proposed New use() Hook - ⚡️ Blixt Dev ⚡️. https://blixtdev.com/all-about-reacts-new-use-hook/.
        (3) Introducing React 16.8, featuring official support for Hooks. https://dev.to/bnevilleoneill/introducing-react-16-8-featuring-official-support-for-hooks-lbd.
        (4) Let’s get hooked: a quick introduction to React Hooks - freeCodeCamp.org. https://www.freecodecamp.org/news/lets-get-hooked-a-quick-introduction-to-react-hooks-9e8bc3fbaeac/.
        (5) Introducing Hooks – React - reactjs.org. https://legacy.reactjs.org/docs/hooks-intro.html.  */}
      <Use1 />
      <h2>UseCallbak hook</h2>
      <p>Example 1 of 2: Skipping re-rendering with useCallback and memo </p>
      <p>In this example, the ShippingForm component is artificially slowed down so that you can see what happens when a React component you’re rendering is genuinely slow. Try incrementing the counter and toggling the theme.

        Incrementing the counter feels slow because it forces the slowed down ShippingForm to re-render. That’s expected because the counter has changed, and so you need to reflect the user’s new choice on the screen.

        Next, try toggling the theme. Thanks to useCallback together with memo, it’s fast despite the artificial slowdown! ShippingForm skipped re-rendering because the handleSubmit function has not changed. The handleSubmit function has not changed because both productId and referrer (your useCallback dependencies) haven’t changed since last render.</p>
      <hr />
      <UseCallback1 />
      <p>Example 2 of 2: Always re-rendering a component </p>
      <p>In this example, the ShippingForm implementation is also artificially slowed down so that you can see what happens when some React component you’re rendering is genuinely slow. Try incrementing the counter and toggling the theme.

        Unlike in the previous example, toggling the theme is also slow now! This is because there is no useCallback call in this version, so handleSubmit is always a new function, and the slowed down ShippingForm component can’t skip re-rendering.</p>
      <br />
      <hr />
      <UseCallback2 />
      <br />
      <b>However, here is the same code with the artificial slowdown removed. Does the lack of useCallback feel noticeable or not?</b>
      <UseCallback3 />
      <br />
      <hr />
      <b>UseContext Hook</b>
      <br />
      <hr />
      <b>Problem 1</b>
      <UseContext1 />
      <hr />
      <h1>Examples of updating context</h1>
      <b>Example 1 of 5: Updating a value via context</b>
      <p>In this example, the MyApp component holds a state variable which is then passed to the ThemeContext provider. Checking the “Dark mode” checkbox updates the state. Changing the provided value re-renders all the components using that context.</p>
      <p>Note that value= dark passes the dark string, but value=theme passes the value of the JavaScript theme variable with JSX curly braces. Curly braces also let you pass context values that aren’t strings.</p>
      <UseContext2 />
      <hr />
      <b>Example 2 of 5: Updating an object via context </b>
      <p>In this example, there is a currentUser state variable which holds an object. You combine currentUser, setCurrentUser  into a single object and pass it down through the context inside the value={ }. This lets any component below, such as LoginButton, read both currentUser and setCurrentUser, and then call setCurrentUser when needed.</p>
      <UseContext3 />
      <br />
      <hr />
      <b>Example 3 of 5: Multiple contexts </b>
      <p>In this example, there are two independent contexts. ThemeContext provides the current theme, which is a string, while CurrentUserContext holds the object representing the current user.</p>
      <UseContext4 />
      <br />
      <hr />
      <b>Example 4 of 5: Extracting providers to a component </b>
      <p>As your app grows, it is expected that you’ll have a “pyramid” of contexts closer to the root of your app. There is nothing wrong with that. However, if you dislike the nesting aesthetically, you can extract the providers into a single component. In this example, MyProviders hides the “plumbing” and renders the children passed to it inside the necessary providers. Note that the theme and setTheme state is needed in MyApp itself, so MyApp still owns that piece of the state.</p>
      <UseContext5 />
      <br />
      <hr />
      <b>Example 5 of 5: Scaling up with context and a reducer </b>
      <p>In larger apps, it is common to combine context with a reducer to extract the logic related to some state out of components. In this example, all the “wiring” is hidden in the TasksContext.js, which contains a reducer and two separate contexts.

        Read a full walkthrough of this example.</p>
      <UseContext6 />
      <br />
      <hr />
      <b>Problem - 6</b>
      <UseContext7 />
      <br />
      <hr />
      <b>Problem 7 - Example 1 of 2: Overriding a theme </b>
      <p>Here, the button inside the Footer receives a different context value light than the buttons outside dark.</p>
      <UseContext8 />
      <hr />
      <b>Example 2 of 2: Automatically nested headings </b>
      <p>You can “accumulate” information when you nest context providers. In this example, the Section component keeps track of the LevelContext which specifies the depth of the section nesting. It reads the LevelContext from the parent section, and provides the LevelContext number increased by one to its children. As a result, the Heading component can automatically decide which of the h1,h2,h3 …, tags to use based on how many Section components it is nested inside of.
        Read a detailed walkthrough of this example.</p>
      <UseContext9 />
      <hr />
      <br />
      <h1>useDebugValue hook</h1>
      <hr />
      <h3>problem1</h3>
      <UseDebugValue />
      <hr />
      <br />
      <h1>useDeferredValue hook</h1>
      <h2>problem1</h2>
      <br />
      <UseDeferredValue1 />
      <hr />
      <h2>problem2</h2>
      <UseDeferredValue2 />
      <hr />
      <h2>problem3</h2>
      <UseDeferredValue3 />
      <hr />
      <h2>The difference between useDeferredValue and unoptimized re-rendering</h2>
      <h2>Example 1 of 2: Deferred re-rendering of the list </h2>
      <p>In this example, each item in the SlowList component is artificially slowed down so that you can see how useDeferredValue lets you keep the input responsive. Type into the input and notice that typing feels snappy while the list “lags behind” it.</p>
      <UseDeferredValue4 />
      <hr />
      <h2>Example 2 of 2: Unoptimized re-rendering of the list </h2>
      <p>In this example, each item in the SlowList component is artificially slowed down, but there is no useDeferredValue.

        Notice how typing into the input feels very janky. This is because without useDeferredValue, each keystroke forces the entire list to re-render immediately in a non-interruptible way.</p>
      <UseDeferredValue5 />
      <hr />
      <h1>useEffect Hook</h1>
      <h2>Example 1 of 5: Connecting to a chat server </h2>
      <p>In this example, the ChatRoom component uses an Effect to stay connected to an external system defined in chat.js. Press “Open chat” to make the ChatRoom component appear. This sandbox runs in development mode, so there is an extra connect-and-disconnect cycle, as explained here. Try changing the roomId and serverUrl using the dropdown and the input, and see how the Effect re-connects to the chat. Press “Close chat” to see the Effect disconnect one last time.</p>
      <UseEffect1 />
      <hr />
      <h2>Example 2 of 5: Listening to a global browser event </h2>
      <p>In this example, the external system is the browser DOM itself. Normally, you’d specify event listeners with JSX, but you can’t listen to the global window object this way. An Effect lets you connect to the window object and listen to its events. Listening to the pointermove event lets you track the cursor (or finger) position and update the red dot to move with it.</p>
      <UseEffect2 />
      <hr />
      <h2>Example 3 of 5: Triggering an animation </h2>
      <p>In this example, the external system is the animation library in animation.js. It provides a JavaScript class called FadeInAnimation that takes a DOM node as an argument and exposes start() and stop() methods to control the animation. This component uses a ref to access the underlying DOM node. The Effect reads the DOM node from the ref and automatically starts the animation for that node when the component appears.</p>
      <UseEffect4 />
      <hr />
      <h2>Example 1 of 3: Custom useChatRoom Hook </h2>
      <p>This example is identical to one of the earlier examples, but the logic is extracted to a custom Hook.</p>
      <UseEffect3 />
      <hr />
      <h2>Example 4 of 5: Controlling a modal dialog </h2>
      <p>In this example, the external system is the browser DOM. The ModalDialog component renders a dialog element. It uses an Effect to synchronize the isOpen prop to the showModal() and close() method calls</p>
      <UseEffect5 />
      <hr />
      <h2>Example 5 of 5: Tracking element visibility </h2>
      <p>In this example, the external system is again the browser DOM. The App component displays a long list, then a Box component, and then another long list. Scroll the list down. Notice that when all of the Box component is fully visible in the viewport, the background color changes to black. To implement this, the Box component uses an Effect to manage an IntersectionObserver. This browser API notifies you when the DOM element is visible in the viewport.</p>
      <UseEffect6 />
      <hr />
      <h2>Example 2 of 3: Custom useWindowListener Hook </h2>
      <p>This example is identical to one of the earlier examples, but the logic is extracted to a custom Hook.</p>
      <UseEffect7 />
      <hr />
      <h2>Example 3 of 3: Custom useIntersectionObserver Hook </h2>
      <p>This example is identical to one of the earlier examples, but the logic is partially extracted to a custom Hook.</p>
      <UseEffect8 />
      <hr />
      <h2>problem1 </h2>
      <UseEffect9 />
      <hr />
      <h2>problem1</h2>
      <UseEffect10 />
      <hr />
      <h2>problem1</h2>
      <UseEffect11 />
      <hr />
      <h2>Example 1 of 3: Passing a dependency array </h2>
      <UseEffect12 />
      <hr />
      <h2>Example 2 of 3: Passing an empty dependency array  </h2>
      <p>If your Effect truly doesn’t use any reactive values, it will only run after the initial render.

        useEffect(() =  {
          // ...
        }, []); // Does not run again (except once in development)
        Even with empty dependencies, setup and cleanup will run one extra time in development to help you find bugs.

        In this example, both serverUrl and roomId are hardcoded. Since they’re declared outside the component, they are not reactive values, and so they aren’t dependencies. The dependency list is empty, so the Effect doesn’t re-run on re-renders.</p>
      <UseEffect13 />
      <h2>Example 3 of 3: Passing no dependency array at all </h2>
      <p>If you pass no dependency array at all, your Effect runs after every single render (and re-render) of your component.

        useEffect(() = {
          // ...
        }); // Always runs again
        In this example, the Effect re-runs when you change serverUrl and roomId, which is sensible. However, it also re-runs when you change the message, which is probably undesirable. This is why usually you’ll specify the dependency array.</p>
        <UseEffect14/>
        <hr />
        <h2>Problem1</h2>
        <UseEffect15/>
        <hr />
        <h2>Problem1</h2>
        <UseEffect16/>
        <hr />
        <h2>Problem1</h2>
    </>
  )
}

export default App
