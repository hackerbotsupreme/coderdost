import { useState } from 'react';

export default function App4() {
    const [isActive, setIsActive] = useState(false);
    if (isActive) {
        return (
            <div
                className="background"
                onClick={() => setIsActive(false)}
            >
                <img
                    className="picture picture--active"
                    alt="Rainbow houses in Kampung Pelangi, Indonesia"
                    src="https://i.imgur.com/5qwVYb1.jpeg"
                    onClick={e => e.stopPropagation()}
                />
            </div>
        );
    }
    return (
        <div className="background background--active">
            <img
                className="picture"
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
                onClick={() => setIsActive(true)}
            />
        </div>
    );
}
