export default function Textarea3() {
    return (
        <label>
            Edit your post:
            <textarea
                name="postContent"
                defaultValue="I really enjoyed biking yesterday!"
                rows={4}
                cols={40}
            />
        </label>
    );
}
