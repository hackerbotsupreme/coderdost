import { Suspense, useState, useTransition } from 'react';
import IndexPage from './IndexPage.jsx';
import ArtistPage from './ArtistPage.jsx';
import Layout from './Layout.jsx';
import "./UseTransition7.css"

export default function UseTransition7() {
    return (
        <Suspense fallback={<BigSpinner />}>
            <Router />
        </Suspense>
    );
}

function Router() {
    const [page, setPage] = useState('/');
    const [isPending, startTransition] = useTransition();

    function navigate(url) {
        startTransition(() => {
            setPage(url);
        });
    }

    let content;
    if (page === '/') {
        content = (
            <IndexPage navigate={navigate} />
        );
    } else if (page === '/the-beatles') {
        content = (
            <ArtistPage
                artist={{
                    id: 'the-beatles',
                    name: 'The Beatles',
                }}
            />
        );
    }
    return (
        <Layout isPending={isPending}>
            {content}
        </Layout>
    );
}

function BigSpinner() {
    return <h2>🌀 Loading...</h2>;
}
