import { useEffect } from 'react';
import { experimental_useEffectEvent as useEffectEvent } from 'react';

export function useInterval(callback, delay) {
    const onTick = useEffectEvent(callback);
    useEffect(() => {
        const id = setInterval(onTick, delay);
        return () => clearInterval(id);
    }, [delay]);
}
