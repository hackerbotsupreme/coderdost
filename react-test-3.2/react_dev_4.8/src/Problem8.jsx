import { useOnlineStatus } from './useOnlineStatus.jsx';

function StatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
    const isOnline = useOnlineStatus();

    function handleSaveClick() {
        console.log('✅ Progress saved');
    }

    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>
            {isOnline ? 'Save progress' : 'Reconnecting...'}
        </button>
    );
}

export default function StatusBar3() {
    return (
        <>
            <SaveButton />
            <StatusBar />
        </>
    );
}
