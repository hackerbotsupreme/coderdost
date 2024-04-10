import { Suspense } from 'react';
import Albums from './Albums.jsx';
import Biography from './Biography.jsx';
import Panel from './Panel.jsx';

export default function ArtistPage({ artist }) {
    return (
        <>
            <h1>{artist.name}</h1>
            <Biography artistId={artist.id} />
            <Suspense fallback={<AlbumsGlimmer />}>
                <Panel>
                    <Albums artistId={artist.id} />
                </Panel>
            </Suspense>
        </>
    );
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
