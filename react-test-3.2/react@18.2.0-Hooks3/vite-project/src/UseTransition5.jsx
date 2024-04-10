import { Suspense, useState } from 'react';
import TabButton from './TabButton3.jsx';
import AboutTab from './AboutTab3.jsx';
import PostsTab from './PostsTab3.jsx';
import ContactTab from './ContactTab3.jsx';

export default function UseTransition5() {
    const [tab, setTab] = useState('about');
    return (
        <Suspense fallback={<h1>🌀 Loading...</h1>}>
            <TabButton
                isActive={tab === 'about'}
                onClick={() => setTab('about')}
            >
                About
            </TabButton>
            <TabButton
                isActive={tab === 'posts'}
                onClick={() => setTab('posts')}
            >
                Posts
            </TabButton>
            <TabButton
                isActive={tab === 'contact'}
                onClick={() => setTab('contact')}
            >
                Contact
            </TabButton>
            <hr />
            {tab === 'about' && <AboutTab />}
            {tab === 'posts' && <PostsTab />}
            {tab === 'contact' && <ContactTab />}
        </Suspense>
    );
}
