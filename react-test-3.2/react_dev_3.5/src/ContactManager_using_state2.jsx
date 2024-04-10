import React, { useState } from 'react';

const ContactManager_using_state2 = () => {
    const [contacts, setContacts] = useState(initialContacts);
    const [selectedContactId, setSelectedContactId] = useState(0);

    const selectedContact = contacts.find(c => c.id === selectedContactId);
    function editContact(id, name, email) {
        const newContacts = contacts.map(c => {
            if (c.id === id) {
                return { ...c, name, email };
            }
            return c;
        });
        setContacts(newContacts);
    }
    return (
        <>
            <ContactList
                setSelectedContactId={setSelectedContactId}
                contacts={contacts}
            />
            <EditContact
                selectedContact={selectedContact}
                editContact={editContact}
            />
        </>
    );
};

function ContactList({ setSelectedContactId, contacts }) {
    return (
        <ul>
            {contacts.map(c => (
                <li key={c.id}>
                    <button onClick={() => setSelectedContactId(c.id)}>{c.name}</button>
                </li>
            ))}
        </ul>
    );
}

function EditContact({ selectedContact, editContact }) {
    // const [updatedName, setupdatedName] = useState(selectedContact.name);
    // const [updatedemail, setupdatedemail] = useState(selectedContact.email );

    // why this dont work ? 
    //   The issue is that when you click on a new contact in the ContactList, the selectedContact object in the App component is updated correctly, but the EditContact component does not re-render with the new selectedContact values.

    // This is because the updatedName and updatedemail state variables in the EditContact component are initialized only once when the component mounts, using the initial selectedContact values. When a new contact is selected, these state variables are not updated, so the input fields continue to display the previous contact's details.

    // To fix this, we need to update the updatedName and updatedemail state variables in the EditContact component whenever the selectedContact prop changes.
    // Here are the changes:

    // The updatedName and updatedemail state variables are now initialized using the optional chaining operator (?.) to handle the case when selectedContact is undefined (e.g., when there are no contacts).
    // A useEffect hook has been added to update the updatedName and updatedemail state variables whenever the selectedContact prop changes. This ensures that the input fields display the correct values for the selected contact.
    // With these changes, when you click on a different contact in the ContactList, the input fields in the EditContact component should now update with the corresponding name and email values for the newly selected contact.
    const [updatedName, setUpdatedName] = useState(selectedContact?.name || '');
    const [updatedemail, setUpdatedemail] = useState(selectedContact?.email || '');


    // Update state variables when selectedContact changes
    React.useEffect(() => {
        setUpdatedName(selectedContact?.name || '');
        setUpdatedemail(selectedContact?.email || '');
    }, [selectedContact]);

    return (
        <>
            <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
            />
            <br />
            <input
                type="text"
                value={updatedemail}
                onChange={(e) => setUpdatedemail(e.target.value)}
            />
            <br />
            <button onClick={() => editContact(selectedContact.id, updatedName, updatedemail)}>
                Save
            </button>
            <button
                onClick={() => {
                    setUpdatedName('');
                    setUpdatedemail('');
                }}
            >
                Reset
            </button>
        </>
    );
}

const initialContacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

export default ContactManager_using_state2;