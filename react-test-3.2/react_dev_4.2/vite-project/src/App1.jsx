import { useRef } from 'react';

export default function App1() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }
    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    );
}
// - explain how this code refering works ?

// Sure, I'll explain how the code using `useRef` for referencing works in this example.

// 1. **Importing `useRef`**
//    ```jsx
//    import { useRef } from 'react';
//    ```
//    The `useRef` hook is imported from the React library, which allows us to create a mutable reference that can be used throughout the component's lifecycle.

// 2. **Creating a reference**
//    ```jsx
//    const inputRef = useRef(null);
//    ```
//    Inside the `App1` component, we create a reference called `inputRef` using the `useRef` hook. The initial value passed to `useRef` is `null`, but it doesn't matter because we'll assign the reference to the input element later.

// 3. **Attaching the reference to the input element**
//    ```jsx
//    <input ref={inputRef} />
//    ```
//    In the JSX, we render an `<input>` element and attach the `inputRef` reference to it using the `ref` attribute. This associates the `inputRef` reference with the actual DOM input element.

// 4. **Accessing the DOM element through the reference**
//    ```jsx
//    function handleClick() {
//      inputRef.current.focus();
//    }
//    ```
//    The `handleClick` function is called when the button is clicked. Inside this function, we access the DOM input element using `inputRef.current`. The `current` property of a `useRef` object holds the actual value of the reference, which is the DOM element in this case.

//    We then call the `focus()` method on the input element, which sets the focus to that input field when the button is clicked.

// 5. **Rendering the button**
//    ```jsx
//    <button onClick={handleClick}>Focus the input</button>
//    ```
//    Finally, we render a `<button>` element with an `onClick` handler that calls the `handleClick` function when clicked.

// Here's how the flow works:

// 1. When the component mounts, the `inputRef` reference is created with an initial value of `null`.
// 2. During the render phase, the `<input>` element is rendered, and the `inputRef` reference is attached to it using the `ref` attribute.
// 3. After the render phase, `inputRef.current` now holds the actual DOM input element.
// 4. When the "Focus the input" button is clicked, the `handleClick` function is called.
// 5. Inside `handleClick`, we access the input element using `inputRef.current` and call the `focus()` method on it, causing the input field to receive focus.

// The `useRef` hook allows us to create a mutable reference that persists across component re-renders, making it useful for tasks like accessing and manipulating DOM elements directly. In this example, it ensures that we can access the input element and call the `focus()` method on it, even if the component re-renders after the initial render.