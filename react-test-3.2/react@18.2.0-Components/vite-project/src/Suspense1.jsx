import { Suspense } from 'react';
import Albums from './Albums.jsx';

export default function Suspense1({ artist }) {
    return (
        <>
            <h1>{artist.name}</h1>
            <Suspense fallback={<Loading />}>
                <Albums artistId={artist.id} />
            </Suspense>
        </>
    );
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}
