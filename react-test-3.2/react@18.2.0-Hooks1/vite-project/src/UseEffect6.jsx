import Box from './Box.jsx';

export default function UseEffect6() {
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
