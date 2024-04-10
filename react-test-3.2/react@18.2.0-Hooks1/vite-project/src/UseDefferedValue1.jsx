import { Suspense, useState } from 'react';
import SearchResults from './SearchResults.jsx';

export default function UseDeferredValue1() {
    const [query, setQuery] = useState('');
    return (
        <>
            <label>
                Search albums:
                <input value={query} onChange={e => setQuery(e.target.value)} />
            </label>
            <Suspense fallback={<h2>Loading...</h2>}>
                <SearchResults query={query} />
            </Suspense>
        </>
    );
}
