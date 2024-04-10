import { useState } from 'react';
import MarkdownPreview from './MarkdownPreview5.jsx';

export default function Textarea5() {
    const [postContent, setPostContent] = useState('_Hello,_ **Markdown**!');
    return (
        <>
            <label>
                Enter some markdown:
                <textarea
                    value={postContent}
                    onChange={e => setPostContent(e.target.value)}
                />
            </label>
            <hr />
            <MarkdownPreview markdown={postContent} />
        </>
    );
}
