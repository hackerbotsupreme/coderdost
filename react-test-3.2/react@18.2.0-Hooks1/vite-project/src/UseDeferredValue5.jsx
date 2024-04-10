import { useState } from 'react';
import SlowList from './SlowList2.jsx';
import "./useDefferdValue.css"

export default function UseDeferredValue5() {
    const [text, setText] = useState('');
    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <SlowList text={text} />
        </>
    );
}
