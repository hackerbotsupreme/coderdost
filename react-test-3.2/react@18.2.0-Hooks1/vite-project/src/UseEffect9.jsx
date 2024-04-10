import { useState } from 'react';
import Map from './Map.jsx';

export default function UseEffect9() {
    const [zoomLevel, setZoomLevel] = useState(0);
    return (
        <>
            Zoom level: {zoomLevel}x
            <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
            <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
            <hr />
            <Map zoomLevel={zoomLevel} />
        </>
    );
}
