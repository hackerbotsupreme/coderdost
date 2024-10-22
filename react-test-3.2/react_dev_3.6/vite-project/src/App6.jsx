import Heading from './Heading6.jsx';
import Section from './Section6.jsx';

export default function App6() {
    return (
        <Section>
            <Heading>My Profile</Heading>
            <Post
                title="Hello traveller!"
                body="Read about my adventures."
            />
            <AllPosts />
        </Section>
    );
}

function AllPosts() {
    return (
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    );
}

function RecentPosts() {
    return (
        <Section>
            <Heading>Recent Posts</Heading>
            <Post
                title="Flavors of Lisbon"
                body="...those pastéis de nata!"
            />
            <Post
                title="Buenos Aires in the rhythm of tango"
                body="I loved it!"
            />
        </Section>
    );
}

function Post({ title, body }) {
    return (
        <Section isFancy={true}>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section>
    );
}
