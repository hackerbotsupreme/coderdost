import { useState } from 'react';
import TabButton from './TabButton2.jsx';
import AboutTab from './AboutTab2.jsx';
import PostsTab from './PostsTab2.jsx';
import ContactTab from './ContactTab2.jsx';

export default function UseTransition4() {
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
