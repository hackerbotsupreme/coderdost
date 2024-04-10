import { useRef } from 'react';
import SearchButton from './SearchButton.jsx';
import SearchInput from './SearchInput.jsx';

export default function Page2() {
    const inputRef = useRef(null);
    return (
        <>
            <nav>
                <SearchButton onClick={() => {
                    inputRef.current.focus();
                }} />
            </nav>
            <SearchInput ref={inputRef} />
        </>
    );
}
