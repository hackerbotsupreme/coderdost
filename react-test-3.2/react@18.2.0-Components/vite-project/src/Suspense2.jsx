import { Suspense } from 'react';
import Albums from './Albums.jsx';
import Biography from './Biography.jsx';
import Panel from './Panel.jsx';

export default function Suspense2({ artist }) {
    return (
        <>
            <h1>{artist.name}</h1>
            <Suspense fallback={<Loading />}>
                <Biography artistId={artist.id} />
                <Panel>
                    <Albums artistId={artist.id} />
                </Panel>
            </Suspense>
        </>
    );
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}
