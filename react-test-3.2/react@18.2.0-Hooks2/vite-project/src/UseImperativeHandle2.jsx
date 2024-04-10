import { useRef } from 'react';
import Post from './Post.jsx';
import "./UseImperativeHandle2.css"


export default function UseImperativeHandle2() {
    const postRef = useRef(null);

    function handleClick() {
        postRef.current.scrollAndFocusAddComment();
    }

    return (
        <>
            <button onClick={handleClick}>
                Write a comment
            </button>
            <Post ref={postRef} />
        </>
    );
}
