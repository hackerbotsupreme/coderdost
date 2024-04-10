import { useRef } from 'react';
import FormField from './FormField.jsx';

export default function ForwardRef2() {
    const ref = useRef(null);

    function handleClick() {
        ref.current.focus();
    }

    return (
        <form>
            <FormField label="Enter your name:" ref={ref} isRequired={true} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    );
}
