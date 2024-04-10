import "./Fragment1.css"

export default function Fragment1() {
    return (
        <>
            <Post title="An update" body="It's been a while since I posted..." />
            <Post title="My new blog" body="I am starting a new blog!" />
        </>
    )
}

function Post({ title, body }) {
    return (
        <>
            <PostTitle title={title} />
            <PostBody body={body} />
        </>
    );
}

function PostTitle({ title }) {
    return <h1>{title}</h1>
}

function PostBody({ body }) {
    return (
        <article>
            <p>{body}</p>
        </article>
    );
}
