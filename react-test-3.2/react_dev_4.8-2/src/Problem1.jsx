import { useState } from 'react';
import { useCounter } from './useCounter2.jsx';

export default function Counter2() {
    const [delay, setDelay] = useState(1000);
    const count = useCounter(delay);
    return (
        <>
            <label>
                Tick duration: {delay} ms
                <br />
                <input
                    type="range"
                    value={delay}
                    min="10"
                    max="2000"
                    onChange={e => setDelay(Number(e.target.value))}
                />
            </label>
            <hr />
            <h1>Ticks: {count}</h1>
        </>
    );
}
