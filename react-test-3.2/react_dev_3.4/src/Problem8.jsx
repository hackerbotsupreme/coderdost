import { useState } from 'react';

export default function Scoreboard2() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
        <div>
            {/* this is using/rendering a comonent in different positions in the react tree   */}
            {isPlayerA &&
                <Counter person="Taylor" />
            }
            {!isPlayerA &&
                <Counter person="Sarah" />
            }
            {/* and why these two are not reserving its values  */}
            {/* this is using/rendering a componenet in same/one position  in react tree */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {isPlayerA === true ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
            {/* why two counters have the same values  */}
            <button onClick={() => {
                setIsPlayerA(!isPlayerA);
            }}>
                Next player!
            </button>
            <p>In your code, the Counter component for “Aloke” and “Myself” is being rendered at the same position in the React tree. This is because you’re using a ternary operator to decide which one to render based on the player1 state</p>
            <p>When you use a ternary operator like this:</p>
            <p>{"{player1===true ? <Counter person='Aloke' /> :<Counter person='Myself' />  }"}</p>
            <p>React sees that you’re rendering a Counter component at the same position in the tree, regardless of the person prop. So, when player1 changes, React just updates the person prop of the existing Counter component instead of unmounting the old component and mounting a new one. This is why the state is preserved and not reset.
                On the other hand, when you render the components like this:</p>
            <p>{'{player1 && <Counter person="Aloke" />}'}</p>
            <p>{'{!player1 && <Counter person="Myself" />}'}</p>
            <p>React sees two different positions in the tree for the Counter component, one for “Aloke” and one for “Myself”. So, when player1 changes, React unmounts the old component and mounts a new one, effectively resetting the state.</p>
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
