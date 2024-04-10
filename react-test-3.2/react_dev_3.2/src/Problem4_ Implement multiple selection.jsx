const letters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
}, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
}, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
}];

import { useState } from 'react';

export default function MailClient() {
    const [selectedIds, setSelectedIds] = useState([]);

    const selectedCount = selectedIds.length;

    function handleToggle(toggledId) {
        // Was it previously selected?
        if (selectedIds.includes(toggledId)) {
            // Then remove this ID from the array.
            setSelectedIds(selectedIds.filter(id =>
                id !== toggledId
            ));
        } else {
            // Otherwise, add this ID to the array.
            setSelectedIds([
                ...selectedIds,
                toggledId
            ]);
        }
    }


    function Letter({
        letter,
        onToggle,
        isSelected,
    }) {
        return (
            <li className={
                isSelected ? 'selected' : ''
            }>
                <label>
                    <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {
                            onToggle(letter.id);
                        }}
                    />
                    {letter.subject}
                </label>
            </li>
        )
    }


    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            selectedIds.includes(letter.id)
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr />
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>
    );
}
