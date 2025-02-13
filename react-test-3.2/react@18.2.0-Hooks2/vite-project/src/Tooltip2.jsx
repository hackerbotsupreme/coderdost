import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './TooltipContainer2.jsx';

export default function Tooltip({ children, targetRect }) {
    const ref = useRef(null);
    const [tooltipHeight, setTooltipHeight] = useState(0);

    useEffect(() => {
        const { height } = ref.current.getBoundingClientRect();
        setTooltipHeight(height);
    }, []);

    let tooltipX = 0;
    let tooltipY = 0;
    if (targetRect !== null) {
        tooltipX = targetRect.left;
        tooltipY = targetRect.top - tooltipHeight;
        if (tooltipY < 0) {
            // It doesn't fit above, so place below.
            tooltipY = targetRect.bottom;
        }
    }

    return createPortal(
        <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
            {children}
        </TooltipContainer>,
        document.body
    );
}
