import { useState, useEffect } from 'react';
import { fetchBio } from './api11.jsx';

export default function UseEffect11() {
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);
    useEffect(() => {
        async function startFetching() {
            setBio(null);
            const result = await fetchBio(person);
            if (!ignore) {
                setBio(result);
            }
        }

        let ignore = false;
        startFetching();
        return () => {
            ignore = true;
        }
    }, [person]);

    return (
        <>
            <select value={person} onChange={e => {
                setPerson(e.target.value);
            }}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Taylor">Taylor</option>
            </select>
            <hr />
            <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    );
}
