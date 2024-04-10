import { useEffect } from 'react';
import { createConnection } from './chat.jsx';

export default function App4() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
