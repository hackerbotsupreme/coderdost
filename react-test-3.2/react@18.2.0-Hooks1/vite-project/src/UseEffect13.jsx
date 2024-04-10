import { useState, useEffect } from 'react';
import { createConnection } from './chat13.jsx';

const serverUrl = 'https://localhost:1234';
const roomId = 'music';

function ChatRoom() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, []);

    return (
        <>
            <h1>Welcome to the {roomId} room!</h1>
            <label>
                Your message:{' '}
                <input value={message} onChange={e => setMessage(e.target.value)} />
            </label>
        </>
    );
}

export default function UseEffect13() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Close chat' : 'Open chat'}
            </button>
            {show && <hr />}
            {show && <ChatRoom />}
        </>
    );
}
