import { useCounter } from './useCounter.jsx';
import { useInterval } from './useInterval.jsx';
import "./styles.css"

export default function Counter() {
    const count = useCounter(1000);

    useInterval(() => {
        const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
        document.body.style.backgroundColor = randomColor;
    }, 2000);

    return <h1>Seconds passed: {count}</h1>;
}
