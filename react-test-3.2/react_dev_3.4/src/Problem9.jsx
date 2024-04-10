import { useState } from 'react';

export default function Scoreboard3() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
        <div>
        <p>look at the  magic of using key</p>
        <p>in this one bcz the position is same to the react </p>
        <p>theses two are same component thus react will preserve the state</p>
            {isPlayerA ? (
                <Counter  person="Taylor" />
            ) : (
                <Counter  person="Sarah" />
            )}
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>but just when you use a key the react undersstands that </p>
            <p>two are not same thus he should reset the state / rerender the state </p>
            {isPlayerA ? (
                <Counter key="Taylor" person="Taylor" />
            ) : (
                <Counter key="Sarah" person="Sarah" />
            )}
            <button onClick={() => {
                setIsPlayerA(!isPlayerA);
            }}>
                Next player!
            </button>
        </div>
    );
}

function Counter({ person }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
        className += ' hover';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{person}'s score: {score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}
