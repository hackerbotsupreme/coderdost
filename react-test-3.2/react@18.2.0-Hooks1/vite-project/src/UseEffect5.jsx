import { useState } from 'react';
import ModalDialog from './ModalDialog.jsx';

export default function UseEffect5() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(true)}>
                Open dialog
            </button>
            <ModalDialog isOpen={show}>
                Hello there!
                <br />
                <button onClick={() => {
                    setShow(false);
                }}>Close</button>
            </ModalDialog>
        </>
    );
}
