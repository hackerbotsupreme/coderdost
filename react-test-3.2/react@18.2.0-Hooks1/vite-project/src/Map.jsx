import { useRef, useEffect } from 'react';
import { MapWidget } from './map-widget.jsx';

export default function Map({ zoomLevel }) {
    const containerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current === null) {
            mapRef.current = new MapWidget(containerRef.current);
        }

        const map = mapRef.current;
        map.setZoom(zoomLevel);
    }, [zoomLevel]);

    return (
        <div
            style={{ width: 200, height: 200 }}
            ref={containerRef}
        />
    );
}
