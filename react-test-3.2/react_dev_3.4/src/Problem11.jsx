import React from 'react'
import { useState } from 'react';


const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

const App = () => {
    function ContactList({ contacts, onSelect, selectedContact }) {
        return (
            <>
                <section className='contact-list'>
                    <ul>
                        {
                            contacts.map(
                                contact => <li key={contact.id}>
                                    <button
                                        onClick={() => {
                                            onSelect(contact)
                                        }}
                                    >
                                        {contact.name}
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </section>
            </>
        )
    }


    function Chat({ contact }) {
        const [text, setText] = useState("");
        const [status, setStatus] = useState("");
        const [message, setMessage] = useState("");

        async function sendText(text) {
            setStatus("sending");
            try {
                // Simulate an API request (replace with your actual API call)
                await fetch('https://api.example.com/send', {
                    method: 'POST',
                    body: JSON.stringify({ text }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setMessage(`Text sent successfully to ${contact.name}`);
            } catch (error) {
                setMessage(`Error sending text: ${error.message}`);
            } finally {
                setStatus("");
                // Clear the message after 3 seconds
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            }
        }

        return (
            <>
                <section className='chat'>
                    <textarea
                        value={text}
                        placeholder={`Chat to ${contact.name}`}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <br />
                    <button
                        onClick={async () => {
                            await sendText(text);
                        }}
                    >
                        Send to {contact.email}
                    </button>
                    {status === "sending" && <p>Sending data...</p>}
                    {message && <p>{message}</p>}
                </section>
            </>
        );
    }

    const [to, setTo] = useState(contacts[0])
    return (
        <>
            <h1>Resetting a form with a key</h1>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat
                contact={to}
            />
        </>
    )
}

export default App