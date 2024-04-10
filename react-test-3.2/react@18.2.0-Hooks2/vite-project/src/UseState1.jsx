import { useState } from 'react';

export default function UseState1() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            You pressed me {count} times
        </button>
    );
}
