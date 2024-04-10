// problem1-Adding a ref to your component
//You can access the current value of that ref through the ref.current property.
// you can both read and write to it.
// It’s like a secret pocket of your component that React doesn’t track.
// (This is what makes it an “escape hatch” from React’s one-way data flow
// The ref points to a number, but, like state, you could point to anything: a string,
// an object, or even a function. Unlike state, ref is a plain JavaScript object with
// the current property that you can read and modify.
// When you want a component to “remember” some information, but
// you don’t want that information to trigger new renders, you can use a ref.

import { useRef } from 'react';

export default function App1() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}
