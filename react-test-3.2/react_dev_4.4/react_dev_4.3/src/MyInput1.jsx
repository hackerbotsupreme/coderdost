import { useEffect, useRef } from 'react';

export default function MyInput1({ shouldFocus, value, onChange }) {
    const ref = useRef(null);

    useEffect(() => {
        if (shouldFocus) {
            ref.current.focus();
        }
    }, [shouldFocus]);

    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
        />
    );
}
