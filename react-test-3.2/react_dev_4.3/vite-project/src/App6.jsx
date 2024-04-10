import { useEffect, useRef } from 'react';

export default function App6({ value, onChange }) {
    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
        />
    );
}
