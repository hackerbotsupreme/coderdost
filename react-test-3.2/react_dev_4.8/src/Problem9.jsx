import { useState, useEffect, useRef } from 'react';
import "./stylez.css"

function Welcome() {
    const ref = useRef(null);

    useEffect(() => {
        const duration = 1000;
        const node = ref.current;

        let startTime = performance.now();
        let frameId = null;

        function onFrame(now) {
            const timePassed = now - startTime;
            const progress = Math.min(timePassed / duration, 1);
            onProgress(progress);
            if (progress < 1) {
                // We still have more frames to paint
                frameId = requestAnimationFrame(onFrame);
            }
        }

        function onProgress(progress) {
            node.style.opacity = progress;
        }

        function start() {
            onProgress(0);
            startTime = performance.now();
            frameId = requestAnimationFrame(onFrame);
        }

        function stop() {
            cancelAnimationFrame(frameId);
            startTime = null;
            frameId = null;
        }

        start();
        return () => stop();
    }, []);

    return (
        <h1 className="welcome" ref={ref}>
            Welcome
        </h1>
    );
}

export default function Show() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Remove' : 'Show'}
            </button>
            <hr />
            {show && <Welcome />}
        </>
    );
}
