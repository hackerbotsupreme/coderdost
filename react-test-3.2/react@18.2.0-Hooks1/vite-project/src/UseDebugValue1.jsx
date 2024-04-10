import { useOnlineStatus } from './useOnlineStatus.jsx';

function StatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

export default function UseDebugValue() {
    return <StatusBar />;
}
