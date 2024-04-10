import { createContext, useContext, useState } from 'react';
import "./UseContext3.css"

const CurrentUserContext = createContext(null);

export default function UseContext3() {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <CurrentUserContext.Provider
            value={{
                currentUser,
                setCurrentUser
            }}
        >
            <Form />
        </CurrentUserContext.Provider>
    );
}

function Form({ children }) {
    const { currentUser } = useContext(CurrentUserContext);
    return (
        <Panel title={`Welcome ${currentUser ? currentUser.name : ''}`}>
            <LoginButton />
        </Panel>
    );
}


function LoginButton() {
    const {
        currentUser,
        setCurrentUser
    } = useContext(CurrentUserContext);

    if (currentUser !== null) {
        return <p>You logged in as {currentUser.name}.</p>;
    }

    return (
        <Button onClick={() => {
            setCurrentUser({ name: 'Advika' })
        }}>Log in as Advika</Button>
    );
}

function Panel({ title, children }) {
    return (
        <section className="panel">
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}
