import { useState } from 'react';
import { useInterval } from './useInterval4.jsx';

export function useCounter(delay) {
    const [count, setCount] = useState(0);
    useInterval(() => {
        setCount(c => c + 1);
    }, delay);
    return count;
}
