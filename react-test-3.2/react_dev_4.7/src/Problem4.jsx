import { useState, useEffect } from 'react';
import { createConnection } from './chat3.jsx';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
    const [message, setMessage] = useState('');

    // Temporarily disable the linter to demonstrate the problem
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const options = {
        serverUrl: serverUrl,
        roomId: roomId
    };

    useEffect(() => {
        const connection = createConnection(options);
        connection.connect();
        return () => connection.disconnect();
    }, [options]);

    return (
        <>
            <h1>Welcome to the {roomId} room!</h1>
            <input value={message} onChange={e => setMessage(e.target.value)} />
        </>
    );
}

export default function ChatRoom3() {
    const [roomId, setRoomId] = useState('general');
    return (
        <>
            <label>
                Choose the chat room:{' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <hr />
            <ChatRoom roomId={roomId} />
        </>
    );
}
