import { useState } from 'react';

export default function ContactList() {
    const [reverse, setReverse] = useState(false);

    const displayedContacts = [...contacts];
    if (reverse) {
        displayedContacts.reverse();
    }

    function Contact({ contact }) {
        const [expanded, setExpanded] = useState(false);
        return (
            <>
                <p><b>{contact.name}</b></p>
                {expanded &&
                    <p><i>{contact.email}</i></p>
                }
                <button onClick={() => {
                    setExpanded(!expanded);
                }}>
                    {expanded ? 'Hide' : 'Show'} email
                </button>
            </>
        );
    }


    return (
        <>
            <label>
                <input
                    type="checkbox"
                    value={reverse}
                    onChange={e => {
                        setReverse(e.target.checked)
                    }}
                />{' '}
                Show in reverse order
            </label>
            <ul>
                {displayedContacts.map(contact =>
                    <li key={contact.id}>
                        <Contact contact={contact} />
                    </li>
                )}
            </ul>
        </>
    );
}

const contacts = [
    { id: 0, name: 'Alice', email: 'alice@mail.com' },
    { id: 1, name: 'Bob', email: 'bob@mail.com' },
    { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];
