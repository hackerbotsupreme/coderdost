// import { useRef } from 'react';

// export default function App3() {
//     const itemsRef = useRef(null);

//     function scrollToId(itemId) {
//         const map = getMap();
//         const node = map.get(itemId);
//         node.scrollIntoView({
//             behavior: 'smooth',
//             block: 'nearest',
//             inline: 'center'
//         });
//     }

//     function getMap() {
//         if (!itemsRef.current) {
//             // Initialize the Map on first usage.
//             itemsRef.current = new Map();
//         }
//         return itemsRef.current;
//     }

//     return (
//         <>
//             <nav>
//                 <button onClick={() => scrollToId(0)}>
//                     Tom
//                 </button>
//                 <button onClick={() => scrollToId(5)}>
//                     Maru
//                 </button>
//                 <button onClick={() => scrollToId(9)}>
//                     Jellylorum
//                 </button>
//             </nav>
//             <div>
//                 <ul>
//                     {catList.map(cat => (
//                         <li
//                             key={cat.id}
//                             ref={(node) => {
//                                 const map = getMap();
//                                 if (node) {
//                                     map.set(cat.id, node);
//                                 } else {
//                                     map.delete(cat.id);
//                                 }
//                             }}
//                         >
//                             <img
//                                 src={cat.imageUrl}
//                                 alt={'Cat #' + cat.id}
//                             />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     );
// }

// const catList = [];
// for (let i = 0; i < 10; i++) {
//     catList.push({
//         id: i,
//         imageUrl: 'https://placekitten.com/250/200?image=' + i
//     });
// }


import { useRef } from 'react';

export default function App3() {
    const itemsRef = useRef(null);

    function scrollToId(itemId) {
        const map = getMap();
        const node = map.get(itemId);
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function getMap() {
        if (!itemsRef.current) {
            // Initialize the Map on first usage.
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }

    return (
        <>
            <nav>
                <button onClick={() => scrollToId(0)}>
                    Tom
                </button>
                <button onClick={() => scrollToId(5)}>
                    Maru
                </button>
                <button onClick={() => scrollToId(9)}>
                    Jellylorum
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map(cat => (
                        <li
                            key={cat.id}
                            ref={(node) => {
                                const map = getMap();
                                if (node) {
                                    map.set(cat.id, node);
                                } else {
                                    map.delete(cat.id);
                                }
                            }}
                        >
                            <img
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const catList = [
    { id: 0, imageUrl: 'https://cataas.com/cat' },
    { id: 1, imageUrl: 'https://cataas.com/cat/cute' },
    { id: 2, imageUrl: 'https://cataas.com/cat/says/hello' },
    { id: 3, imageUrl: 'https://cataas.com/cat/square' },
    { id: 4, imageUrl: 'https://cataas.com/cat/gif' },
    { id: 5, imageUrl: 'https://cataas.com/cat/crazy' },
    { id: 6, imageUrl: 'https://cataas.com/cat/funny' },
    { id: 7, imageUrl: 'https://cataas.com/cat/small' },
    { id: 8, imageUrl: 'https://cataas.com/cat/large' },
    { id: 9, imageUrl: 'https://cataas.com/cat/sweet' },
];