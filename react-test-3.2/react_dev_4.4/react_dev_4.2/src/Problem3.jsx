import { forwardRef, useRef } from 'react';
import "./styles2.css"

const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
});

export default function Form2() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    );
}