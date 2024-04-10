import { useId } from 'react';

export default function Textarea2() {
    const postTextAreaId = useId();
    return (
        <>
            <label htmlFor={postTextAreaId}>
                Write your post:
            </label>
            <textarea
                id={postTextAreaId}
                name="postContent"
                rows={4}
                cols={40}
            />
        </>
    );
}
