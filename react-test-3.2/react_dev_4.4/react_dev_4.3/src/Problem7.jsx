import { useState } from 'react';
import MyInput1 from './MyInput1.jsx';
import "./styles.css"

export default function Form1() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('Taylor');
    const [upper, setUpper] = useState(false);
    return (
        <>
            <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
            <br />
            <hr />
            {show && (
                <>
                    <label>
                        Enter your name:
                        <MyInput1
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={upper}
                            onChange={e => setUpper(e.target.checked)}
                        />
                        Make it uppercase
                    </label>
                    <p>Hello, <b>{upper ? name.toUpperCase() : name}</b></p>
                </>
            )}
        </>
    );
}
