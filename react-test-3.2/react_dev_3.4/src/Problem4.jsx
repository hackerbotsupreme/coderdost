import { useState } from 'react';
import "./styles2.css"

export default function MainCounter4() {
    const [isFancy, setIsFancy] = useState(false);
    return (
        <div>
            {isFancy ? (
                <Counter isFancy={true} />
            ) : (
                <Counter isFancy={false} />
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling
            </label>
            <div className='explanation' >
                <h2>but what i meant is the way i am thinking that i am not able to differentiate between the fact that the react creates new counter instance if isfancy is true vs in reality the counter is using a single instance because its the same component in the same position in the ui tree ??</h2>
                <p>You're absolutely right, your confusion is understandable. Let me clarify: <br />

                    In the provided code, even though the JSX conditionally renders the `Counter` component with different props (`fancystatus`) based on the `isfancy` state, React is NOT creating a new instance of the `Counter` component. It is using the same single instance of the `Counter` component, regardless of whether `isfancy` is true or false. <br /> <br />

                    The reason for this is that the `Counter` component is defined outside the `App` component's render method, and it is rendered at the same position in the UI tree (within the `counter-container` div).<br /> <br />

                    React optimizes the rendering process by identifying components based on their position in the UI tree (known as the "fiber tree"). When a component is in the same position in the UI tree, React will reuse the existing instance of that component, even if its props change.<br /> <br />

                    In your case, the `Counter` component is rendered at the same position in the UI tree, regardless of the value of `isfancy`. Therefore, React sees it as the same component instance and reuses it, rather than creating a new instance.<br /> <br />

                    The conditional rendering with different props (`fancystatus`) does not trigger React to create a new instance of the `Counter` component. Instead, React updates the existing instance with the new props, and the component re-renders with the updated props and state.<br /> <br />

                    So, to summarize:<br /> <br />

                    - React is using a single instance of the `Counter` component, regardless of the value of `isfancy`.<br /> <br />
                    - The `Counter` component instance is reused because it is rendered at the same position in the UI tree.<br /> <br />
                    - The conditional rendering with different props (`fancystatus`) does not create a new instance; it updates the existing instance with the new props.<br /> <br />

                    Your confusion stems from the assumption that conditional rendering with different props would create a new instance of the component, but that's not the case when the component is rendered at the same position in the UI tree. React optimizes the rendering process by reusing existing instances whenever possible, which helps maintain state and improve performance.</p>
            </div>
        </div>

    );
}

function Counter({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
        className += ' hover';
    }
    if (isFancy) {
        className += ' fancy';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}
