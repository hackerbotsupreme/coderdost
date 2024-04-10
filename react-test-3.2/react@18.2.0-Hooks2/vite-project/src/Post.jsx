import { forwardRef, useRef, useImperativeHandle } from 'react';
import CommentList from './CommentList.jsx';
import AddComment from './AddComment.jsx';

const Post = forwardRef((props, ref) => {
    const commentsRef = useRef(null);
    const addCommentRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            scrollAndFocusAddComment() {
                commentsRef.current.scrollToBottom();
                addCommentRef.current.focus();
            }
        };
    }, []);

    return (
        <>
            <article>
                <p>Welcome to my blog!</p>
            </article>
            <CommentList ref={commentsRef} />
            <AddComment ref={addCommentRef} />
        </>
    );
});

export default Post;
