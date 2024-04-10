import { createContext, memo, useContext, useState } from 'react';
import "./Memo4.css"

const ThemeContext = createContext(null);

export default function Memo3() {
    const [theme, setTheme] = useState('dark');

    function handleClick() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={handleClick}>
                Switch theme
            </button>
            <Greeting name="Taylor" />
        </ThemeContext.Provider>
    );
}

const Greeting = memo(function Greeting({ name }) {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    const theme = useContext(ThemeContext);
    return (
        <h3 className={theme}>Hello, {name}!</h3>
    );
});
