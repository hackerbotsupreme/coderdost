import { useId } from 'react';

export default function Input2() {
    const ageInputId = useId();
    return (
        <>
            <label>
                Your first name:
                <input name="firstName" />
            </label>
            <hr />
            <label htmlFor={ageInputId}>Your age:</label>
            <input id={ageInputId} name="age" type="number" />
        </>
    );
}
