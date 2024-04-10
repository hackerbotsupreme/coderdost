import { useState } from 'react';
import { HighlightContext } from './HighlightContext.jsx';

export default function List({ items, renderItem }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className="List">
            {items.map((item, index) => {
                const isHighlighted = index === selectedIndex;
                return (
                    <HighlightContext.Provider
                        key={item.id}
                        value={isHighlighted}
                    >
                        {renderItem(item)}
                    </HighlightContext.Provider>
                );
            })}
            <hr />
            <button onClick={() => {
                setSelectedIndex(i =>
                    (i + 1) % items.length
                );
            }}>
                Next
            </button>
        </div>
    );
}
