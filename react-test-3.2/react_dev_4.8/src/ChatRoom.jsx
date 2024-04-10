import { useState, useEffect } from 'react';
import { createConnection } from './chat.jsx';
import { showNotification } from './notifications.jsx';

export default function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const connection = createConnection(options);
        connection.on('message', (msg) => {
            showNotification('New message: ' + msg);
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, serverUrl]);

    return (
        <>
            <label>
                Server URL:
                <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </>
    );
}
