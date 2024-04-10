import { Suspense } from 'react';
import Albums from './Albums2.jsx';
import Biography from './Biography2.jsx';
import Panel from './Panel2.jsx';

export default function Suspense4({ artist }) {
    return (
        <>
            <h1>{artist.name}</h1>
            <Suspense fallback={<BigSpinner />}>
                <Biography artistId={artist.id} />
                <Suspense fallback={<AlbumsGlimmer />}>
                    <Panel>
                        <Albums artistId={artist.id} />
                    </Panel>
                </Suspense>
            </Suspense>
        </>
    );
}

function BigSpinner() {
    return <h2>🌀 Loading...</h2>;
}

function AlbumsGlimmer() {
    return (
        <div className="glimmer-panel">
            <div className="glimmer-line" />
            <div className="glimmer-line" />
            <div className="glimmer-line" />
        </div>
    );
}
