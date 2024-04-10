import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

export function createMapWidget(containerDomNode) {
    const map = L.map(containerDomNode);
    map.setView([0, 0], 0);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    return map;
}

export function addPopupToMapWidget(map) {
    const popupDiv = document.createElement('div');
    L.popup()
        .setLatLng([0, 0])
        .setContent(popupDiv)
        .openOn(map);
    return popupDiv;
}
