
import './App.css'
import UseId2 from './UseId2'
import UseImperativeHandle2 from './UseImperativeHandle2'
import UseLayoutEffect2 from './UseLayoutEffect2'
import UseLayoutEffect3 from './UseLayoutEffect3'
import UseMemo2 from './UseMemo2'
import UseMemo3 from './UseMemo3'
import UseMemo4 from './UseMemo4'
import UseReducer1 from './UseReducer1'
import UseReducer2 from './UseReducer2'
import UseReducer3 from './UseReducer3'
import UseReducer4 from './UseReducer4'
import UseReducer5 from './UseReducer5'
import UseReducer6 from './UseReducer6'
import UseRef2 from './UseRef2'
import UseRef3 from './UseRef3'
import UseRef4 from './UseRef4'
import UseRef5 from './UseRef5'
import UseRef6 from './UseRef6'
import UseState10 from './UseState10'
import UseState11 from './UseState11'
import UseState12 from './UseState12'
import UseState13 from './UseState13'
import UseState14 from './UseState14'
import UseState2 from './UseState2'
import UseState3 from './UseState3'
import UseState4 from './UseState4'
import UseState5 from './UseState5'
import UseState6 from './UseState6'
import UseState7 from './UseState7'
import UseState8 from './UseState8'
import UseState9 from './UseState9'
import UseId1 from './useId1'
import UseImperativeHandle1 from './useImperativeHandle1'
import UseLayoutEffect1 from './useLayoutEffect1'
import UseMemo1 from './useMemo1'
import UseRef1 from './useRef1'
import UseState1 from './useState1'

function App() {
  return (
    <>
      <h1>Hooks Part 2</h1>
      <hr />
      <h2>useId Hook</h2>
      <UseId1 />
      <hr />
      <h2>useId Hook</h2>
      <UseId2 />
      <hr />
      <h2>useId Hook</h2>
      <b>see it from the useId3 file </b>
      <hr />
      <h2>useImperativeHandle hook</h2>
      <UseImperativeHandle1 />
      <hr />
      <h2>useImperativeHandle hook</h2>
      <UseImperativeHandle2 />
      <hr />
      <h2>useInsertionEffect hook</h2>
      <h2>useLayoutEffect hook</h2>
      <hr />
      <h2>Problem 1</h2>
      <br />
      <UseLayoutEffect1 />
      <hr />
      <h2>Example 1 of 2: useLayoutEffect blocks the browser from repainting </h2>
      <p>React guarantees that the code inside useLayoutEffect and any state updates scheduled inside it will be processed before the browser repaints the screen. This lets you render the tooltip, measure it, and re-render the tooltip again without the user noticing the first extra render. In other words, useLayoutEffect blocks the browser from painting.</p>
      <UseLayoutEffect2 />
      <hr />
      <h2>Example 2 of 2: useEffect does not block the browser </h2>
      <p>Here is the same example, but with useEffect instead of useLayoutEffect. If you’re on a slower device, you might notice that sometimes the tooltip “flickers” and you briefly see its initial position before the corrected position.</p>
      <UseLayoutEffect3 />
      <hr />
      <h2>useMemo Hook</h2>
      <hr />
      <h2>Example 1 of 2: Skipping recalculation with useMemo </h2>
      <p>In this example, the filterTodos implementation is artificially slowed down so that you can see what happens when some JavaScript function you’re calling during rendering is genuinely slow. Try switching the tabs and toggling the theme.

        Switching the tabs feels slow because it forces the slowed down filterTodos to re-execute. That’s expected because the tab has changed, and so the entire calculation needs to re-run. (If you’re curious why it runs twice, it’s explained here.)

        Toggle the theme. Thanks to useMemo, it’s fast despite the artificial slowdown! The slow filterTodos call was skipped because both todos and tab (which you pass as dependencies to useMemo) haven’t changed since the last render.</p>
      <UseMemo1 />
      <hr />
      <h2>Example 2 of 2: Always recalculating a value </h2>
      <p>In this example, the filterTodos implementation is also artificially slowed down so that you can see what happens when some JavaScript function you’re calling during rendering is genuinely slow. Try switching the tabs and toggling the theme.

        Unlike in the previous example, toggling the theme is also slow now! This is because there is no useMemo call in this version, so the artificially slowed down filterTodos gets called on every re-render. It is called even if only theme has changed.</p>
      <UseMemo2 />
      <hr />
      <UseMemo3 />
      <hr />
      <h2>Example 1 of 2: Skipping re-rendering with useMemo and memo </h2>
      <p>In this example, the List component is artificially slowed down so that you can see what happens when a React component you’re rendering is genuinely slow. Try switching the tabs and toggling the theme.

        Switching the tabs feels slow because it forces the slowed down List to re-render. That’s expected because the tab has changed, and so you need to reflect the user’s new choice on the screen.
        
        Next, try toggling the theme. Thanks to useMemo together with memo, it’s fast despite the artificial slowdown! The List skipped re-rendering because the visibleTodos array has not changed since the last render. The visibleTodos array has not changed because both todos and tab (which you pass as dependencies to useMemo) haven’t changed since the last render.</p>
      <UseMemo4 />
      <hr />
      <h2>useReducer Hook</h2>
      <hr />
      <h2>Problem 1</h2>
      <UseReducer1/>
      <hr />
      <h2>Example 1 of 3: Form (object) </h2>
      <p>In this example, the reducer manages a state object with two fields: name and age.</p>
      <UseReducer2/>
      <hr />
      <h2>Example 2 of 3: Todo list (array) </h2>
      <p>In this example, the reducer manages an array of tasks. The array needs to be updated without mutation.</p>
      <UseReducer3/>
      <hr />
      <h2>Example 3 of 3: Writing concise update logic with Immer </h2>
      <p>If updating arrays and objects without mutation feels tedious, you can use a library like Immer to reduce repetitive code. Immer lets you write concise code as if you were mutating objects, but under the hood it performs immutable updates:</p>
      <UseReducer4/>
      <hr />
      <h2>Example 1 of 2: Passing the initializer function </h2>
      <p>This example passes the initializer function, so the createInitialState function only runs during initialization. It does not run when component re-renders, such as when you type into the input.</p>
      <UseReducer5/>
      <hr />
      <h2>Example 2 of 2: Passing the initial state directly</h2>
      <p>This example does not pass the initializer function, so the createInitialState function runs on every render, such as when you type into the input. There is no observable difference in behavior, but this code is less efficient.</p>
      <UseReducer6/>
      <hr />
      <h1>useRef Hook</h1>
      <hr />
      <h1>Example 1 of 2: Click counter </h1>
      <p>This component uses a ref to keep track of how many times the button was clicked. Note that it’s okay to use a ref instead of state here because the click count is only read and written in an event handler.</p>
      <UseRef1/>
      <hr />
      <h1>Example 2 of 2: A stopwatch </h1>
      <p>This example uses a combination of state and refs. Both startTime and now are state variables because they are used for rendering. But we also need to hold an interval ID so that we can stop the interval on button press. Since the interval ID is not used for rendering, it’s appropriate to keep it in a ref, and manually update it.</p>
      <UseRef2/>
      <hr />
      <h2>Example 1 of 4: Focusing a text input </h2>
      <p>In this example, clicking the button will focus the input:</p>
      <UseRef3/>
      <hr />
      <h2>Example 2 of 4: Scrolling an image into view  </h2>
      <p>In this example, clicking the button will scroll an image into view. It uses a ref to the list DOM node, and then calls DOM querySelectorAll API to find the image we want to scroll to.</p>
      <UseRef4/>
      <hr />
      <h2>Example 3 of 4: Playing and pausing a video </h2>
      <p>This example uses a ref to call play() and pause() on a video DOM node.</p>
      <UseRef5/>
      <hr />
      <h2>Example 4 of 4: Exposing a ref to your own component </h2>
      <p>Sometimes, you may want to let the parent component manipulate the DOM inside of your component. For example, maybe you’re writing a MyInput component, but you want the parent to be able to focus the input (which the parent has no access to). You can use a combination of useRef to hold the input and forwardRef to expose it to the parent component. Read a detailed walkthrough here.</p>
      <UseRef6/>
      <hr />
      <h1>useState  Hook</h1>
      <hr />
      <h2>Example 1 of 4: Counter (number) </h2>
      <p>In this example, the count state variable holds a number. Clicking the button increments it.</p>
      <UseState1/>
      <hr />
      <h2>Example 1 of 4: Counter (number) </h2>
      <p>In this example, the count state variable holds a number. Clicking the button increments it.</p>
      <UseState2/>
      <hr />
      <h2>Example 2 of 4: Text field (string) </h2>
      <p>In this example, the text state variable holds a string. When you type, handleChange reads the latest input value from the browser input DOM element, and calls setText to update the state. This allows you to display the current text below.</p>
      <UseState3/>
      <hr />
      <h2>Example 3 of 4: Checkbox (boolean) </h2>
      <p>In this example, the liked state variable holds a boolean. When you click the input, setLiked updates the liked state variable with whether the browser checkbox input is checked. The liked variable is used to render the text below the checkbox.</p>
      <UseState4/>
      <hr />
      <h2>Example 4 of 4: Form (two variables) </h2>
      <p>You can declare more than one state variable in the same component. Each state variable is completely independent.</p>
      <UseState5/>
      <hr />
      <h2>Example 1 of 2: Passing the updater function </h2>
      <p>This example passes the updater function, so the “+3” button works.</p>
      <UseState6/>
      <hr />
      <h2>Example 2 of 2: Passing the next state directly </h2>
      <p>This example does not pass the updater function, so the “+3” button doesn’t work as intended.</p>
      <UseState7/>
      <hr />
      <h1>Example 1 of 4: Form (object) </h1>
      <p>In this example, the form state variable holds an object. Each input has a change handler that calls setForm with the next state of the entire form. The  ...form  spread syntax ensures that the state object is replaced rather than mutated.</p>
      <UseState8/>
      <hr />
      <h1>Example 2 of 4: Form (nested object) </h1>
      <p>In this example, the state is more nested. When you update nested state, you need to create a copy of the object you’re updating, as well as any objects “containing” it on the way upwards. Read updating a nested object to learn more.</p>
      <UseState9/>
      <hr />
      <h1>Example 3 of 4: List (array) </h1>
      <p>In this example, the todos state variable holds an array. Each button handler calls setTodos with the next version of that array. The [...todos] spread syntax, todos.map() and todos.filter() ensure the state array is replaced rather than mutated.</p>
      <UseState10/>
      <hr />
      <h1>Example 4 of 4: Writing concise update logic with Immer </h1>
      <p>If updating arrays and objects without mutation feels tedious, you can use a library like Immer to reduce repetitive code. Immer lets you write concise code as if you were mutating objects, but under the hood it performs immutable updates:</p>
      <UseState11/>
      <hr />
      <h1>Example 2 of 2: Passing the initial state directly </h1>
      <p>This example does not pass the initializer function, so the createInitialTodos function runs on every render, such as when you type into the input. There is no observable difference in behavior, but this code is less efficient.</p>
      <UseState12/>
      <hr />
      <h1>Problem </h1>
      <UseState13/>
      <hr />
      <h1>Problem 2</h1>
      <UseState14/>
      <hr />
    </>
  )
}

export default App
