import { useState } from 'react';

export default function ContactManager_using_state() {
    const [contacts,setContacts] = useState(initialContacts);
    const [selectedId,setSelectedId] = useState(0);
    const selectedContact = contacts.find(c =>
        c.id === selectedId
    );

    function handleSave(updatedData) {
        const nextContacts = contacts.map(c => {
            if (c.id === updatedData.id) {
                return updatedData;
            } else {
                return c;
            }
        });
        setContacts(nextContacts);
    }

    function ContactList({
        contacts,
        selectedId,
        onSelect
    }) {
        return (
            <section>
                <ul>
                    {contacts.map(contact =>
                        <li key={contact.id}>
                            <button onClick={() => {
                                onSelect(contact.id);
                            }}>
                                {contact.id === selectedId ?
                                    <b>{contact.name}</b> :
                                    contact.name
                                }
                            </button>
                        </li>
                    )}
                </ul>
            </section>
        );
    }

    function EditContact({ initialData, onSave }) {
        const [name, setName] = useState(initialData.name);
        const [email, setEmail] = useState(initialData.email);
        return (
            <section>
                <label>
                    Name:{' '}
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email:{' '}
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <button onClick={() => {
                    const updatedData = {
                        id: initialData.id,
                        name: name,
                        email: email
                    };
                    onSave(updatedData);
                }}>
                    Save
                </button>
                <button onClick={() => {
                    setName(initialData.name);
                    setEmail(initialData.email);
                }}>
                    Reset
                </button>
            </section>
        );
    }
    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedId={selectedId}
                onSelect={id => setSelectedId(id)}
            />
            <br />
            <EditContact
                key={selectedId}
                initialData={selectedContact}
                onSave={handleSave}
            /> <br />
        </div> 
    )
}

const initialContacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

// This version of the code handles the issue of updating the input fields in the `EditContact` component when a new contact is selected from the `ContactList` by using the `key` prop.

// React keeps track of component instances based on their `key` prop. When the `key` changes, React will unmount the old component instance and mount a new one with the updated props. This process is known as component remounting.

// In this code, the `EditContact` component is given a `key` prop that is set to the `selectedId`:

// ```jsx
// <EditContact
//   key={selectedId}
//   initialData={selectedContact}
//   onSave={handleSave}
// />
// ```

// When you click on a different contact in the `ContactList`, the `selectedId` state changes, causing the `key` prop of the `EditContact` component to change. This triggers React to unmount the old `EditContact` instance and mount a new one with the updated `initialData` prop, which is set to the newly selected `selectedContact` object.

// During the mounting of the new `EditContact` instance, the `useState` hooks for `name` and `email` are initialized with the values from the new `initialData` prop, which ensures that the input fields display the correct values for the newly selected contact.

// Here's a step-by-step breakdown of what happens when you click on a new contact:

// 1. You click on a new contact in the `ContactList`.
// 2. The `onSelect` callback function is called with the new contact's `id`.
// 3. The `setSelectedId` function is called with the new `id`, updating the `selectedId` state.
// 4. The `selectedContact` variable is updated based on the new `selectedId`.
// 5. The `key` prop of the `EditContact` component changes due to the new `selectedId`.
// 6. React unmounts the old `EditContact` instance and mounts a new one with the updated `initialData` prop.
// 7. The new `EditContact` instance initializes its `name` and `email` state with the values from the new `initialData` prop, which is the newly selected `selectedContact` object.
// 8. The input fields in the new `EditContact` instance display the correct values for the newly selected contact.

// By using the `key` prop to trigger component remounting, this code ensures that the `EditContact` component is always rendered with the correct `initialData` prop, which corresponds to the currently selected contact, and the input fields are updated accordingly.
