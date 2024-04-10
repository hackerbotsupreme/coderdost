import { useCounter } from './useCounter1.jsx';

export default function Counter() {
    const count = useCounter();
    return <h1>Seconds passed: {count}</h1>;
}
