import { useRef } from 'react';
import MyInput from './MyInput.jsx';

export default function UseImperativeHandle1() {
    const ref = useRef(null);

    function handleClick() {
        ref.current.focus();
        // This won't work because the DOM node isn't exposed:
        // ref.current.style.opacity = 0.5;
    }

    return (
        <form>
            <MyInput placeholder="Enter your name" ref={ref} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    );
}
