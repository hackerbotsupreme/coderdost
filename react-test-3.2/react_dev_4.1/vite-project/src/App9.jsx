import { useState, useRef } from 'react';

export default function App9() {
    const [text, setText] = useState('');
    const textRef = useRef(text);

    function handleChange(e) {
        setText(e.target.value);
        textRef.current = e.target.value;
    }

    function handleSend() {
        setTimeout(() => {
            alert('Sending: ' + textRef.current);
        }, 3000);
    }

    return (
        <>
            <input
                value={text}
                onChange={handleChange}
            />
            <button
                onClick={handleSend}>
                Send
            </button>
        </>
    );
}
// explain  why we cant create the same thing only  using useref ?

// We cannot create the same functionality using only `useRef` because `useRef` does not trigger a re-render when its value is updated. In React, when you update a state variable using the `setState` function (or the `useState` hook), React knows that the component needs to re-render to reflect the new state.

// However, `useRef` is designed for storing mutable values that don't trigger a re-render. When you update the `current` value of a `useRef`, React doesn't know that the component needs to re-render because it's not part of the component's state.

// In the provided code, we need to use both `useState` and `useRef` for the following reasons:

// 1. **Rendering the Input Value**: The value of the input field needs to be controlled by the `text` state variable. This is because React components need to re-render when their state changes, and the input field value should reflect the current state. If we only used `useRef` to store the input value, the input field would not re-render when the value changes.

// 2. **Accessing the Latest Value in the Timeout**: While the `text` state variable represents the value used for rendering, we need to store the latest input value in the `textRef` reference. This is because the `setTimeout` callback will execute asynchronously, and by that time, the component may have re-rendered with a different `text` state value. By storing the latest value in `textRef.current`, we can access it in the `setTimeout` callback, even if the component re-renders before the callback executes.

// Here's what would happen if we tried to implement the same functionality using only `useRef`:

// ```jsx
// import { useRef } from 'react';

// export default function App9() {
//     const textRef = useRef('');

//     function handleChange(e) {
//         textRef.current = e.target.value;
//     }

//     function handleSend() {
//         setTimeout(() => {
//             alert('Sending: ' + textRef.current);
//         }, 3000);
//     }

//     return (
//         <>
//             <input
//                 value={textRef.current}
//                 onChange={handleChange}
//             />
//             <button
//                 onClick={handleSend}>
//                 Send
//             </button>
//         </>
//     );
// }
// ```

// In this implementation, we're using only `useRef` to store the input value. However, there are two major issues:

// 1. The input field will not re-render when `textRef.current` changes because updating a `useRef` value doesn't trigger a re-render.
// 2. The `setTimeout` callback will always have access to the latest value of `textRef.current`, but the input field value will not update accordingly.

// Therefore, using only `useRef` is not sufficient in this case because we need to update the UI (the input field value) and also have access to the latest value in the asynchronous operation (`setTimeout`). By combining `useState` and `useRef`, we can achieve both goals: update the UI with the `text` state variable and access the latest value in the `setTimeout` callback using `textRef.current`.