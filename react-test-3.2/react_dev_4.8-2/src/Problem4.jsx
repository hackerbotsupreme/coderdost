import { useCounter } from './useCounter4.jsx';
import { useInterval } from './useInterval4.jsx';

export default function Counter() {
    const count = useCounter(1000);

    useInterval(() => {
        const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
        document.body.style.backgroundColor = randomColor;
    }, 2000);

    return <h1>Seconds passed: {count}</h1>;
}
