import { useState, useEffect } from 'react';
import { createConnection } from './chat.jsx';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);
    return <h1>Welcome to the {roomId} room!</h1>;
}

export default function ChatRoom1() {
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
