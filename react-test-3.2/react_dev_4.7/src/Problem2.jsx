import { useState, useEffect } from 'react';
import { createConnection } from './chat2.jsx';

const serverUrl = 'https://localhost:1234';
const roomId = 'music';

export default function ChatRoom2() {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, []);
    return <h1>Welcome to the {roomId} room!</h1>;
}
