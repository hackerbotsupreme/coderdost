import { useState, useEffect } from 'react';
import { experimental_useEffectEvent as useEffectEvent } from 'react';

export default function ChatRoom({ roomId, createConnection, onMessage }) {
    useEffect(() => {
        const connection = createConnection();
        connection.on('message', (msg) => onMessage(msg));
        connection.connect();
        return () => connection.disconnect();
    }, [createConnection, onMessage]);

    return <h1>Welcome to the {roomId} room!</h1>;
}
