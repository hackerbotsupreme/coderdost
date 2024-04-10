import { useState, useDeferredValue } from 'react';
import SlowList from './SlowList.jsx';
import "./useDefferdValue.css"


export default function UseDeferredValue4() {
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text);
    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <SlowList text={deferredText} />
        </>
    );
}
