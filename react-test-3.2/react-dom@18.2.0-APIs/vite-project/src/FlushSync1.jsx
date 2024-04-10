import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

export default function FlushSync1() {
    const [isPrinting, setIsPrinting] = useState(false);

    useEffect(() => {
        function handleBeforePrint() {
            flushSync(() => {
                setIsPrinting(true);
            })
        }

        function handleAfterPrint() {
            setIsPrinting(false);
        }

        window.addEventListener('beforeprint', handleBeforePrint);
        window.addEventListener('afterprint', handleAfterPrint);
        return () => {
            window.removeEventListener('beforeprint', handleBeforePrint);
            window.removeEventListener('afterprint', handleAfterPrint);
        }
    }, []);

    return (
        <>
            <h1>isPrinting: {isPrinting ? 'yes' : 'no'}</h1>
            <button onClick={() => window.print()}>
                Print
            </button>
        </>
    );
}
