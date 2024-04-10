import { forwardRef, useRef, useImperativeHandle } from 'react';

const AddComment = forwardRef(function AddComment(props, ref) {
    return <input placeholder="Add comment..." ref={ref} />;
});

export default AddComment;
