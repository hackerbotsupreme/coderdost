import { useState } from 'react';
import StoryTray from './StoryTray.jsx';
import "./StrictMode1.css"

let initialStories = [
    { id: 0, label: "Ankit's Story" },
    { id: 1, label: "Taylor's Story" },
];

export default function StrictMode1() {
    let [stories, setStories] = useState(initialStories)
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                textAlign: 'center',
            }}
        >
            <StoryTray stories={stories} />
        </div>
    );
}
