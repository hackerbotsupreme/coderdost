import { useState, useEffect } from 'react';

export default function UseEffect15() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(c => c + 1); // ✅ Pass a state updater
        }, 1000);
        return () => clearInterval(intervalId);
    }, []); // ✅ Now count is not a dependency

    return <h1>{count}</h1>;
}
