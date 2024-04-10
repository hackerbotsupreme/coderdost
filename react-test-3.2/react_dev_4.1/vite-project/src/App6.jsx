import { useState, useRef } from 'react';

export default function App6() {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const timeoutRef = useRef(null);

    function handleSend() {
        setIsSending(true);
        timeoutRef.current = setTimeout(() => {
            alert('Sent!');
            setIsSending(false);
        }, 3000);
    }

    function handleUndo() {
        setIsSending(false);
        clearTimeout(timeoutRef.current);
    }

    return (
        <>
            <input
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                disabled={isSending}
                onClick={handleSend}>
                {isSending ? 'Sending...' : 'Send'}
            </button>
            {isSending &&
                <button onClick={handleUndo}>
                    Undo
                </button>
            }
        </>
    );
}
//  so exxplain why do we need useref  in this scenario ?
// In this scenario, we need to use `useRef` to store the reference to the `setTimeout` instance that is created when the "Send" button is clicked. Here's why:

// 1. **Preserving the `setTimeout` instance across re-renders**:
//    When the `handleSend` function is called, it creates a new `setTimeout` instance and assigns it to `timeoutRef.current`. This `setTimeout` instance is responsible for displaying the "Sent!" alert after a 3-second delay.

//    However, if we didn't store the `setTimeout` instance somewhere, it would be lost after the component re-renders (e.g., due to a state update or user interaction). By storing it in the `timeoutRef` ref, we can preserve the `setTimeout` instance even after a re-render.

// 2. **Canceling the `setTimeout` instance**:
//    The `handleUndo` function is responsible for canceling the pending "Send" operation. It does this by calling `clearTimeout(timeoutRef.current)`, which cancels the `setTimeout` instance stored in `timeoutRef.current`.

//    If we didn't have a reference to the `setTimeout` instance, we wouldn't be able to cancel it. By using `useRef` to store the `setTimeout` instance, we can access and clear it when needed.

// 3. **Mutable value that doesn't trigger re-renders**:
//    The value stored in `timeoutRef.current` is a mutable value that doesn't trigger a re-render when it's updated. This is important because we don't want the component to re-render every time the `setTimeout` instance is created or cleared, as it would lead to unnecessary rendering and potential performance issues.

// In summary, we need to use `useRef` in this scenario to:

// 1. Preserve the `setTimeout` instance across re-renders, so that the "Sent!" alert is displayed correctly after the 3-second delay.
// 2. Have a reference to the `setTimeout` instance, so that we can cancel it when the "Undo" button is clicked.
// 3. Store a mutable value (`setTimeout` instance) that doesn't trigger unnecessary re-renders when it's updated.

// Without `useRef`, we wouldn't be able to achieve these requirements effectively and would need to resort to alternative solutions that might be less efficient or more complex.

// and why do we need to preserve the settimeout ?

// We need to preserve the `setTimeout` instance across re-renders because it represents an asynchronous operation that should continue executing even if the component re-renders before the timer completes.

// In this specific example, the `setTimeout` instance is responsible for displaying the "Sent!" alert after a 3-second delay. If the component were to re-render during this 3-second period (e.g., due to a state update or user interaction), the `setTimeout` instance would be lost, and the "Sent!" alert would never be displayed.

// By storing the `setTimeout` instance in the `timeoutRef` ref using `useRef`, we ensure that the instance persists across re-renders. This way, even if the component re-renders multiple times while the timer is running, the original `setTimeout` instance is preserved, and the "Sent!" alert will still be displayed after the 3-second delay.

// If we didn't preserve the `setTimeout` instance, the asynchronous operation (displaying the "Sent!" alert) would be interrupted or lost whenever the component re-rendered, leading to unexpected behavior or missing functionality.

// Preserving asynchronous operations across re-renders is a common use case for `useRef`. It allows you to maintain references to ongoing operations, timers, subscriptions, or any other asynchronous work that should continue executing regardless of component re-renders.

// In general, you should use `useRef` to store and preserve any mutable values or references that represent ongoing operations or side effects that should not be interrupted or lost due to re-renders. This helps maintain the correct behavior and state of your application, ensuring that asynchronous tasks and side effects are handled properly even in the presence of re-renders.