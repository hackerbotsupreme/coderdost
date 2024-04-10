import { useRef } from 'react';
import MyInput from './MyInput.jsx';

export default function ForwardRef1() {
    const ref = useRef(null);

    function handleClick() {
        ref.current.focus();
    }

    return (
        <form>
            <MyInput label="Enter your name:" ref={ref} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    );
}
