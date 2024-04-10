import Box from './Box1.jsx';
import "./useEffect8.css"

export default function UseEffect8() {
    return (
        <>
            <LongSection />
            <Box />
            <LongSection />
            <Box />
            <LongSection />
        </>
    );
}

function LongSection() {
    const items = [];
    for (let i = 0; i < 50; i++) {
        items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
    }
    return <ul>{items}</ul>
}
