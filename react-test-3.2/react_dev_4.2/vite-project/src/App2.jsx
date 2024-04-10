import { useRef } from 'react';

export default function App2() {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);

    function handleScrollToFirstCat() {
        firstCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function handleScrollToSecondCat() {
        secondCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function handleScrollToThirdCat() {
        thirdCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <>
            <nav>
                <button onClick={handleScrollToFirstCat}>
                    Tom
                </button>
                <button onClick={handleScrollToSecondCat}>
                    Maru
                </button>
                <button onClick={handleScrollToThirdCat}>
                    Jellylorum
                </button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img
                            src="https://placekitten.com/g/200/200"
                            alt="Tom"
                            ref={firstCatRef}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placekitten.com/g/300/200"
                            alt="Maru"
                            ref={secondCatRef}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placekitten.com/g/250/200"
                            alt="Jellylorum"
                            ref={thirdCatRef}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}


// Sure, let me explain this code step by step:

// 1. **Importing `useRef`**
//    ```jsx
//    import { useRef } from 'react';
//    ```
//    The `useRef` hook is imported from the React library, which allows us to create a mutable reference that persists across component re-renders.

// 2. **Creating a reference**
//    ```jsx
//    const itemsRef = useRef(null);
//    ```
//    Inside the `App3` component, we create a reference called `itemsRef` using the `useRef` hook. The initial value is set to `null`.

// 3. **`scrollToId` function**
//    ```jsx
//    function scrollToId(itemId) {
//      const map = getMap();
//      const node = map.get(itemId);
//      node.scrollIntoView({
//        behavior: 'smooth',
//        block: 'nearest',
//        inline: 'center'
//      });
//    }
//    ```
//    The `scrollToId` function is responsible for scrolling the page to the specific item with the given `itemId`. It does the following:
//    - Calls the `getMap` function to get the `Map` object that holds the references to the list items.
//    - Retrieves the DOM node associated with the `itemId` using `map.get(itemId)`.
//    - Calls the `scrollIntoView` method on the retrieved DOM node to scroll the page smoothly and center the item.

// 4. **`getMap` function**
//    ```jsx
//    function getMap() {
//      if (!itemsRef.current) {
//        // Initialize the Map on first usage.
//        itemsRef.current = new Map();
//      }
//      return itemsRef.current;
//    }
//    ```
//    The `getMap` function ensures that a `Map` object is available in `itemsRef.current`. If `itemsRef.current` is `null`, it initializes it with a new `Map` instance. This function is called whenever we need to access or modify the `Map` object.

// 5. **Rendering the navigation buttons**
//    ```jsx
//    <nav>
//      <button onClick={() => scrollToId(0)}>Tom</button>
//      <button onClick={() => scrollToId(5)}>Maru</button>
//      <button onClick={() => scrollToId(9)}>Jellylorum</button>
//    </nav>
//    ```
//    The component renders a navigation section with three buttons. Each button calls the `scrollToId` function with a specific `itemId` when clicked, triggering the scroll to the corresponding list item.

// 6. **Rendering the list items**
//    ```jsx
//    <ul>
//      {catList.map(cat => (
//        <li
//          key={cat.id}
//          ref={(node) => {
//            const map = getMap();
//            if (node) {
//              map.set(cat.id, node);
//            } else {
//              map.delete(cat.id);
//            }
//          }}
//        >
//          <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
//        </li>
//      ))}
//    </ul>
//    ```
//    The component renders an unordered list (`<ul>`) containing list items (`<li>`) for each cat in the `catList` array. Each `<li>` element has a `ref` attribute that associates it with a reference stored in the `Map` object.

//    The `ref` callback function is called by React whenever the component is rendered or re-rendered. It receives the DOM node as an argument (`node`). If the `node` exists (component is mounting), it adds the `node` to the `Map` using `map.set(cat.id, node)`. If the `node` is `null` (component is unmounting), it removes the corresponding entry from the `Map` using `map.delete(cat.id)`.

//    Inside each `<li>` element, an `<img>` element is rendered, displaying the cat's image.

// 7. **The `catList` array**
//    ```jsx
//    const catList = [];
//    for (let i = 0; i < 10; i++) {
//      catList.push({
//        id: i,
//        imageUrl: 'https://placekitten.com/250/200?image=' + i
//      });
//    }
//    ```
//    This part of the code creates an array `catList` with 10 objects, each representing a cat. Each cat object has an `id` and an `imageUrl` property, which is used to render the cat's image in the list.

// The main purpose of this code is to provide a way to scroll to specific list items using the navigation buttons. It achieves this by maintaining a `Map` object that associates each cat's `id` with the corresponding DOM node (`<li>` element).

// When a navigation button is clicked, the `scrollToId` function retrieves the DOM node from the `Map` using the `itemId` and calls `scrollIntoView` on that node, scrolling the page to that specific item.

// The `useRef` hook is used to create a mutable reference (`itemsRef`) that persists across component re-renders. This reference holds the `Map` object, ensuring that the mapping between `id`s and DOM nodes is maintained even when the component re-renders.

// The `ref` attribute on the `<li>` elements is used to associate each list item with its corresponding DOM node in the `Map`. This mapping is updated whenever the component is rendered or re-rendered, ensuring that the `Map` remains up-to-date with the current DOM structure.

// Overall, this code demonstrates how to use `useRef` to create and maintain a mutable reference that can hold data structures like `Map`, and how to associate DOM nodes with references using the `ref` attribute. It provides a way to scroll to specific elements on the page by leveraging these references and the `scrollIntoView` method.

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

// const catList = [
//     { id: 0, imageUrl: 'https://cataas.com/cat' },
//     { id: 1, imageUrl: 'https://cataas.com/cat/cute' },
//     { id: 2, imageUrl: 'https://cataas.com/cat/says/hello' },
//     { id: 3, imageUrl: 'https://cataas.com/cat/square' },
//     { id: 4, imageUrl: 'https://cataas.com/cat/gif' },
//     { id: 5, imageUrl: 'https://cataas.com/cat/crazy' },
//     { id: 6, imageUrl: 'https://cataas.com/cat/funny' },
//     { id: 7, imageUrl: 'https://cataas.com/cat/small' },
//     { id: 8, imageUrl: 'https://cataas.com/cat/large' },
//     { id: 9, imageUrl: 'https://cataas.com/cat/sweet' },
// ];