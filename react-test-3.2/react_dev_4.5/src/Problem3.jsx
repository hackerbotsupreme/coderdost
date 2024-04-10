import { useState, useEffect } from 'react';

export default function Chatroom2() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [canMove, setCanMove] = useState(true);

    function handleMove(e) {
        if (canMove) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
    }

    useEffect(() => {
        window.addEventListener('pointermove', handleMove);
        return () => window.removeEventListener('pointermove', handleMove);
    });

    return (
        <>
            <label>
                <input type="checkbox"
                    checked={canMove}
                    onChange={e => setCanMove(e.target.checked)}
                />
                The dot is allowed to move
            </label>
            <hr />
            <div style={{
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }} />
        </>
    );
}
