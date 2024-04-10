import { useState, useEffect } from 'react';
import { createConnection } from './chat16.jsx';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const connection = createConnection(options);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return (
        <>
            <h1>Welcome to the {roomId} room!</h1>
            <input value={message} onChange={e => setMessage(e.target.value)} />
        </>
    );
}

export default function UseEffect16() {
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
