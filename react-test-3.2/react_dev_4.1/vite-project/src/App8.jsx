import { useRef } from 'react';

function DebouncedButton({ onClick, children }) {
    const timeoutRef = useRef(null);
    return (
        <button onClick={() => {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                onClick();
            }, 1000);
        }}>
            {children}
        </button>
    );
}

export default function App8() {
    return (
        <>
            <DebouncedButton
                onClick={() => alert('Spaceship launched!')}
            >
                Launch the spaceship
            </DebouncedButton>
            <DebouncedButton
                onClick={() => alert('Soup boiled!')}
            >
                Boil the soup
            </DebouncedButton>
            <DebouncedButton
                onClick={() => alert('Lullaby sung!')}
            >
                Sing a lullaby
            </DebouncedButton>
        </>
    )
}
// what is debouncing in react ?

// Debouncing is a technique used in programming to limit the rate at which a function is executed. In the context of React, debouncing is commonly used to optimize performance by reducing the number of times a particular function is called, especially in cases where the function is computationally expensive or triggers unnecessary re-renders.

// The idea behind debouncing is to introduce a delay before executing a function. If the function is called again during the delay period, the timer is reset, and the delay starts over. The function is only executed if the delay period elapses without any new calls.

// Here's a common use case for debouncing in React:

// **Optimizing Event Handlers**

// Consider a scenario where you have an input field, and you need to perform some operation (e.g., fetching data from an API) based on the user's input. If you trigger the operation on every keystroke, it can lead to numerous unnecessary API calls, causing performance issues and potential over-fetching.

// To address this, you can apply debouncing to the event handler function, ensuring that the operation is only executed after a certain delay (e.g., 300ms) since the last keystroke. This way, if the user keeps typing within the delay period, the operation is not triggered until they pause for the specified delay.

// Here's an example implementation using the `useDebounce` hook from the `use-debounce` library:

// ```jsx
// import { useState, useEffect } from 'react';
// import useDebounce from 'use-debounce';

// function SearchInput() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const debouncedSearchTerm = useDebounce(searchTerm, 300); // Debounce delay of 300ms

//   useEffect(() => {
//     // Perform the search operation with debouncedSearchTerm
//     // This effect will only run after the user pauses typing for 300ms
//     fetchDataFromAPI(debouncedSearchTerm);
//   }, [debouncedSearchTerm]);

//   return (
//     <input
//       type="text"
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       placeholder="Search..."
//     />
//   );
// }
// ```

// In this example, the `useDebounce` hook from the `use-debounce` library is used to create a debounced version of the `searchTerm` state variable. The debounced value (`debouncedSearchTerm`) is then used in the `useEffect` hook to trigger the search operation. This ensures that the search operation is only performed after the user has stopped typing for 300ms.

// Debouncing can also be useful in other scenarios, such as:

// - Optimizing window resize or scroll event handlers
// - Rate-limiting API calls or other expensive operations
// - Preventing unnecessary re-renders due to frequent state updates

// It's important to note that debouncing can introduce a slight delay in the execution of the function, so it should be used judiciously and with consideration for the user experience.

// explain how does this work ?

// The provided code demonstrates a custom `DebouncedButton` component that implements debouncing using the `useRef` hook and `setTimeout`.

// Here's how it works:

// 1. The `DebouncedButton` component receives two props: `onClick` and `children`. The `onClick` prop is a function that will be called after the debounce delay, and `children` represents the content to be rendered inside the button.

// 2. Inside the `DebouncedButton` component, the `useRef` hook is used to create a mutable reference `timeoutRef` and initialize it with `null`.

// 3. When the button is clicked, an anonymous function is executed, which performs the following steps:
//    a. First, it clears any existing timeout using `clearTimeout(timeoutRef.current)`. This ensures that if the button is clicked multiple times within the debounce delay, the previous timeout is canceled.
//    b. Then, it creates a new `setTimeout` and stores its reference in `timeoutRef.current`. The `setTimeout` is set to execute the `onClick` function provided as a prop after a delay of 1000 milliseconds (1 second).

// 4. The `DebouncedButton` component renders a regular `<button>` element with the `onClick` handler set to the anonymous function described in step 3. The content of the button is rendered using the `children` prop.

// 5. In the `App8` component, three `DebouncedButton` components are rendered with different `onClick` handlers that display an alert.

// When a `DebouncedButton` is clicked, the following happens:

// 1. The anonymous function inside the `onClick` handler is executed.
// 2. If there's an existing timeout (from a previous button click), it is cleared using `clearTimeout(timeoutRef.current)`.
// 3. A new `setTimeout` is created with a delay of 1000 milliseconds (1 second), and its reference is stored in `timeoutRef.current`.
// 4. If the button is clicked again within the 1-second delay, the previous `setTimeout` is cleared, and a new 1-second delay starts.
// 5. If the 1-second delay elapses without any new button clicks, the `onClick` function provided as a prop is executed, triggering the desired action (e.g., displaying an alert).

// This implementation ensures that the `onClick` function provided as a prop to the `DebouncedButton` component is only executed once after the specified debounce delay (1 second in this case), even if the button is clicked multiple times within that delay.

// Debouncing can be useful in scenarios where you want to limit the rate at which a function is executed, especially for expensive operations or to prevent excessive updates or API calls. In this example, it is used to limit the frequency at which the alert is displayed when the button is clicked rapidly.