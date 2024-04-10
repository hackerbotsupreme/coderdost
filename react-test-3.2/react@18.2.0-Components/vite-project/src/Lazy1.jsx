import { useState, Suspense, lazy } from 'react';
import Loading from './Loading.jsx';

const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.jsx')));

export default function Lazy1() {
    const [showPreview, setShowPreview] = useState(false);
    const [markdown, setMarkdown] = useState('Hello, **world**!');
    return (
        <>
            <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
            <label>
                <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
                Show preview
            </label>
            <hr />
            {showPreview && (
                <Suspense fallback={<Loading />}>
                    <h2>Preview</h2>
                    <MarkdownPreview markdown={markdown} />
                </Suspense>
            )}
        </>
    );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}
