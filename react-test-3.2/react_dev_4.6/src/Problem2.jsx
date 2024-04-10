import { useState, useEffect } from 'react';
import { createConnection, sendMessage } from './chat2.jsx';
import { showNotification } from './notifications.jsx';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId, theme }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on('connected', () => {
            showNotification('Connected!', theme);
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, theme]);

    return <h1>Welcome to the {roomId} room!</h1>
}

export default function ChatRoom3() {
    const [roomId, setRoomId] = useState('general');
    const [isDark, setIsDark] = useState(false);
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
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use dark theme
            </label>
            <hr />
            <ChatRoom
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}
