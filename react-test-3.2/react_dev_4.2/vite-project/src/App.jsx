
import './App.css'
import App1 from './App1'
import App10 from './App10'
import App11 from './App11'
import App12 from './App12'
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
      <h1>Manipulating the DOM with Refs</h1>
      Manipulating the DOM with Refs <br />
      React automatically updates the DOM to match your render output, so your components won’t often need to manipulate it. However, sometimes you might need access to the DOM elements managed by React—for example, to focus a node, scroll to it, or measure its size and position. There is no built-in way to do those things in React, so you will need a ref to the DOM node. <br /> <br />
      <hr />
      <h2>Getting a ref to the node </h2>
      To access a DOM node managed by React, first, import the useRef Hook: <br /> <br />
      {/* import { useRef } from 'react'; */}
      Then, use it to declare a ref inside your component: <br /> <br />

      {/* const myRef = useRef(null); */}
      Finally, pass your ref as the ref attribute to the JSX tag for which you want to get the DOM node: <br /> <br />

      {/* <div ref={myRef}> */}
      The useRef Hook returns an object with a single property called current. Initially, myRef.current will be null. When React creates a DOM node for this div, React will put a reference to this node into myRef.current. You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it. <br /> <br />

      You can use any browser APIs, for example: <br />
      myRef.current.scrollIntoView(); <br /> <br />
      <br />
      <h1>problem1-Example: Focusing a text input </h1>
      In this example, clicking the button will focus the input: <br />
      <App1 />
      To implement this: <br />

      Declare inputRef with the useRef Hook. <br />
      Pass it as
      {/* <input ref={inputRef}>.  */}
      This tells React to put this input’s DOM node into inputRef.current. <br />
      In the handleClick function, read the input DOM node from inputRef.current and call focus() on it with inputRef.current.focus(). <br />
      Pass the handleClick event handler to button with onClick. <br />
      While DOM manipulation is the most common use case for refs, the useRef Hook can be used for storing other things outside React, like timer IDs. Similarly to state, refs remain between renders. Refs are like state variables that don’t trigger re-renders when you set them. Read about refs in Referencing Values with Refs. <br />
      <br /><hr />
      <h1>problem2-Example: Scrolling to an element </h1>
      You can have more than a single ref in a component. In this example, there is a carousel of three images. Each button centers an image by calling the browser scrollIntoView() method on the corresponding DOM node: <br />
      <App2 />
      How to manage a list of refs using a ref callback ? <br />
      In the above examples, there is a predefined number of refs. However, sometimes you might need a ref to each item in the list, and you don’t know how many you will have. Something like this wouldn’t work: <br />
      {/* <ul>
  {items.map((item) => {
    // Doesn't work!
    const ref = useRef(null);
    return <li ref={ref} />;
  })}
</ul> */}

      This is because Hooks must only be called at the top-level of your component. You can’t call useRef in a loop, in a condition, or inside a map() call. <br />

      One possible way around this is to get a single ref to their parent element, and then use DOM manipulation methods like querySelectorAll to “find” the individual child nodes from it. However, this is brittle and can break if your DOM structure changes. <br />

      Another solution is to pass a function to the ref attribute. This is called a ref callback. React will call your ref callback with the DOM node when it’s time to set the ref, and with null when it’s time to clear it. This lets you maintain your own array or a Map, and access any ref by its index or some kind of ID. <br />

      This example shows how you can use this approach to scroll to an arbitrary node in a long list: <br />
      {/* import { useRef } from 'react';

export default function CatFriends() {
  const itemsRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToId(0)}>
          Tom
        </button>
        <button onClick={() => scrollToId(5)}>
          Maru
        </button>
        <button onClick={() => scrollToId(9)}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          {catList.map(cat => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
} */}

      In this example, itemsRef doesn’t hold a single DOM node. Instead, it holds a Map from item ID to a DOM node. (Refs can hold any values!) The ref callback on every list item takes care to update the Map: <br />
      {/* <li
  key={cat.id}
  ref={node => {
    const map = getMap();
    if (node) {
      // Add to the Map
      map.set(cat.id, node);
    } else {
      // Remove from the Map
      map.delete(cat.id);
    }
  }}
></li> */}
      This lets you read individual DOM nodes from the Map later. <br />


      <br /><hr />
      <h1>problem3-Example: How to manage a list of refs using a ref callback </h1>
      <App3 />
      <br /><hr />
      <h1>problem4-Example: Accessing another component’s DOM nodes </h1>
      Accessing another component’s DOM nodes
      When you put a ref on a built-in component that outputs a browser element like input , React will set that ref’s current property to the corresponding DOM node (such as the actual input in the browser). <br />

      However, if you try to put a ref on your own component, like MyInput, by default you will get null. Here is an example demonstrating it. Notice how clicking the button does not focus the input: <br /> <br />
      {/* 
import { useRef } from 'react';

function MyInput(props) {
  return <input {...props} />;
}

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  } 
    return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
  */}
      To help you notice the issue, React also prints an error to the console: <br /> <br />

      Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()? <br />

      This happens because by default React does not let a component access the DOM nodes of other components. Not even for its own children! This is intentional. Refs are an escape hatch that should be used sparingly. Manually manipulating another component’s DOM nodes makes your code even more fragile. <br /> <br />

      Instead, components that want to expose their DOM nodes have to opt in to that behavior. A component can specify that it “forwards” its ref to one of its children. Here’s how MyInput can use the forwardRef API: <br /> <br />

      {/* const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
}); */}
      This is how it works: <br />

      {/* <MyInput ref={inputRef} />  */}
      tells React to put the corresponding DOM node into inputRef.current. However, it’s up to the MyInput component to opt into that—by default, it doesn’t.
      The MyInput component is declared using forwardRef. This opts it into receiving the inputRef from above as the second ref argument which is declared after props. <br />
      MyInput itself passes the ref it received to the input inside of it. <br /> <br />
      Now clicking the button to focus the input works: <br />

      <App4 />
      In design systems, it is a common pattern for low-level components like buttons, inputs, and so on, to forward their refs to their DOM nodes. On the other hand, high-level components like forms, lists, or page sections usually won’t expose their DOM nodes to avoid accidental dependencies on the DOM structure. <br /> <br />



      <br /><hr />
      <h1>problem5-Example: Exposing a subset of the API with an imperative handle </h1>
      In the above example, MyInput exposes the original DOM input element. This lets the parent component call focus() on it. However, this also lets the parent component do something else—for example, change its CSS styles. In uncommon cases, you may want to restrict the exposed functionality. You can do that with useImperativeHandle: <br />
      <App5 />
      Here, realInputRef inside MyInput holds the actual input DOM node. However, useImperativeHandle instructs React to provide your own special object as the value of a ref to the parent component. So inputRef.current inside the Form component will only have the focus method. In this case, the ref “handle” is not the DOM node, but the custom object you create inside useImperativeHandle call. <br /> <br />

      When React attaches the refs
      In React, every update is split in two phases: <br />

      During render, React calls your components to figure out what should be on the screen.
      During commit, React applies changes to the DOM.
      In general, you don’t want to access refs during rendering. That goes for refs holding DOM nodes as well. During the first render, the DOM nodes have not yet been created, so ref.current will be null. And during the rendering of updates, the DOM nodes haven’t been updated yet. So it’s too early to read them. <br />

      React sets ref.current during the commit. Before updating the DOM, React sets the affected ref.current values to null. After updating the DOM, React immediately sets them to the corresponding DOM nodes. <br />

      Usually, you will access refs from event handlers. If you want to do something with a ref, but there is no particular event to do it in, you might need an Effect. We will discuss effects on the next pages. <br />
      <br /><hr />
      <h1>problem6-Example: Flushing state updates synchronously with flushSync </h1>
      Consider code like this, which adds a new todo and scrolls the screen down to the last child of the list. Notice how, for some reason, it always scrolls to the todo that was just before the last added one: <br />

      The issue is with these two lines: <br />

      {/* setTodos([ ...todos, newTodo]);
listRef.current.lastChild.scrollIntoView(); */}
      In React, state updates are queued. Usually, this is what you want. However, here it causes a problem because setTodos does not immediately update the DOM. So the time you scroll the list to its last element, the todo has not yet been added. This is why scrolling always “lags behind” by one item. <br />

      To fix this issue, you can force React to update (“flush”) the DOM synchronously. To do this, import flushSync from react-dom and wrap the state update into a flushSync call: <br />

      {/* flushSync(() => {
  setTodos([ ...todos, newTodo]);
});
listRef.current.lastChild.scrollIntoView(); */}
      This will instruct React to update the DOM synchronously right after the code wrapped in flushSync executes. As a result, the last todo will already be in the DOM by the time you try to scroll to it: <br />

      <App6 />
      <br /><hr />
      <h1>problem7</h1>
      <App7 />
      <br /><hr />
      <h1>problem8-Best practices for DOM manipulation with refs </h1>
      Refs are an escape hatch. You should only use them when you have to “step outside React”. Common examples of this include managing focus, scroll position, or calling browser APIs that React does not expose. <br />

      If you stick to non-destructive actions like focusing and scrolling, you shouldn’t encounter any problems. However, if you try to modify the DOM manually, you can risk conflicting with the changes React is making. <br />

      To illustrate this problem, this example includes a welcome message and two buttons. The first button toggles its presence using conditional rendering and state, as you would usually do in React. The second button uses the remove() DOM API to forcefully remove it from the DOM outside of React’s control. <br />

      Try pressing “Toggle with setState” a few times. The message should disappear and appear again. Then press “Remove from the DOM”. This will forcefully remove it. Finally, press “Toggle with setState”: <br />
      <App8 />
      <br /><hr />
      After you’ve manually removed the DOM element, trying to use setState to show it again will lead to a crash. This is because you’ve changed the DOM, and React doesn’t know how to continue managing it correctly. <br />

      Avoid changing DOM nodes managed by React. Modifying, adding children to, or removing children from elements that are managed by React can lead to inconsistent visual results or crashes like above. <br />

      However, this doesn’t mean that you can’t do it at all. It requires caution. You can safely modify parts of the DOM that React has no reason to update. For example, if some <div> is always empty in the JSX, React won’t have a reason to touch its children list. Therefore, it is safe to manually add or remove elements there. <br /> <br />
        Recap  <br />
        Refs are a generic concept, but most often you’ll use them to hold DOM elements.
        You instruct React to put a DOM node into myRef.current by passing div ref=myRef.
        Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements. <br /> <br />
        A component doesn’t expose its DOM nodes by default. You can opt into exposing a DOM node by using forwardRef and passing the second ref argument down to a specific node.
        Avoid changing DOM nodes managed by React.
        If you do modify DOM nodes managed by React, modify parts that React has no reason to update. <br /> <br />
        <b>Try out some challenges</b>
        <h1>Challenge 1 of 4: Play and pause the video </h1>
        <p>In this example, the button toggles a state variable to switch between a playing and a paused state. However, in order to actually play or pause the video, toggling state is not enough. You also need to call play() and pause() on the DOM element for the video. Add a ref to it, and make the button work.</p>
        <p>For an extra challenge, keep the “Play” button in sync with whether the video is playing even if the user right-clicks the video and plays it using the built-in browser media controls. You might want to listen to onPlay and onPause on the video to do that.</p>
        <b>Solution <br />
          Declare a ref and put it on the video element. Then call ref.current.play() and ref.current.pause() in the event handler depending on the next state.</b>
        <App9 />
        <h1>Challenge 2 of 4: Focus the search field </h1>
        <p>Make it so that clicking the “Search” button puts focus into the field.</p>
        <b>Solution
          Add a ref to the input, and call focus() on the DOM node to focus it:</b>
        <App10 />
        <h1>Challenge 3 of 4: Scrolling an image carousel </h1>
        <p>This image carousel has a “Next” button that switches the active image. Make the gallery scroll horizontally to the active image on click. You will want to call scrollIntoView() on the DOM node of the active image:</p>
        <b>Solution
          You can declare a selectedRef, and then pass it conditionally only to the current image:

          li ref=index === i ? selectedRef : null
          When index === i, meaning that the image is the selected one, the li will receive the selectedRef. React will make sure that selectedRef.current always points at the correct DOM node.

          Note that the flushSync call is necessary to force React to update the DOM before the scroll. Otherwise, selectedRef.current would always point at the previously selected item.</b>
        <App11 />
        <h1>Challenge 4 of 4: Focus the search field with separate components </h1>
        <p>Make it so that clicking the “Search” button puts focus into the field. Note that each component is defined in a separate file and shouldn’t be moved out of it. How do you connect them together?</p>
        <b>Solution
          You’ll need to add an onClick prop to the SearchButton, and make the SearchButton pass it down to the browser button. You’ll also pass a ref down to SearchInput, which will forward it to the real input and populate it. Finally, in the click handler, you’ll call focus on the DOM node stored inside that ref.</b>
        <App12 />

      </>
      )
            }
      export default App
