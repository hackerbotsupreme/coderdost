import { useCounter } from './useCounter3.jsx';

export default function Counter3() {
    const count = useCounter(1000);
    return <h1>Seconds passed: {count}</h1>;
}
