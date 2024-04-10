import { Suspense, useState, useDeferredValue } from 'react';
import SearchResults from './SearchResults2.jsx';

export default function UseDeferredValue2() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    return (
        <>
            <label>
                Search albums:
                <input value={query} onChange={e => setQuery(e.target.value)} />
            </label>
            <Suspense fallback={<h2>Loading...</h2>}>
                <SearchResults query={deferredQuery} />
            </Suspense>
        </>
    );
}
