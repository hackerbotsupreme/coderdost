import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createMapWidget, addPopupToMapWidget } from './map-widget.jsx';

export default function CreatePortal4() {
    const containerRef = useRef(null);
    const mapRef = useRef(null);
    const [popupContainer, setPopupContainer] = useState(null);

    useEffect(() => {
        if (mapRef.current === null) {
            const map = createMapWidget(containerRef.current);
            mapRef.current = map;
            const popupDiv = addPopupToMapWidget(map);
            setPopupContainer(popupDiv);
        }
    }, []);

    return (
        <div style={{ width: 250, height: 250 }} ref={containerRef}>
            {popupContainer !== null && createPortal(
                <p>Hello from React!</p>,
                popupContainer
            )}
        </div>
    );
}
