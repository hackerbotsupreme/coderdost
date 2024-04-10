import { useState } from 'react';

export default function App7() {
    const [isOn, setIsOn] = useState(false);

    return (
        <button onClick={() => {
            setIsOn(!isOn);
        }}>
            {isOn ? 'On' : 'Off'}
        </button>
    );
}
