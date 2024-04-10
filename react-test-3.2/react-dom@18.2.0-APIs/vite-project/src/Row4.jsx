import { useContext } from 'react';
import { HighlightContext } from './HighlightContext.jsx';

export default function Row({ title }) {
    const isHighlighted = useContext(HighlightContext);
    return (
        <div className={[
            'Row',
            isHighlighted ? 'RowHighlighted' : ''
        ].join(' ')}>
            {title}
        </div>
    );
}
