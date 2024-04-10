import RowList from './RowList2.jsx';

export default function Children2() {
    return (
        <RowList>
            <p>This is the first item.</p>
            <MoreRows />
        </RowList>
    );
}

function MoreRows() {
    return (
        <>
            <p>This is the second item.</p>
            <p>This is the third item.</p>
        </>
    );
}
