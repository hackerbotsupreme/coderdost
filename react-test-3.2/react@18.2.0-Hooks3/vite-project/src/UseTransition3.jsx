import { useState } from 'react';
import TabButton from './TabButton1.jsx';
import AboutTab from './AboutTab1.jsx';
import PostsTab from './PostsTab1.jsx';
import ContactTab from './ContactTab1.jsx';

export default function UseTransition3() {
    const [tab, setTab] = useState('about');
    return (
        <>
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
                Posts (slow)
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
        </>
    );
}
