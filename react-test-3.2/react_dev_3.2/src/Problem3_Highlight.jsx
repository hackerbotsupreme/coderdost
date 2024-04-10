// this one works but the more logical version i have written below 

// import { useState } from 'react';
// import "./styles.css"

// const initialLetters = [{
//     id: 0,
//     subject: 'Ready for adventure?',
//     isStarred: true,
// }, {
//     id: 1,
//     subject: 'Time to check in!',
//     isStarred: false,
// }, {
//     id: 2,
//     subject: 'Festival Begins in Just SEVEN Days!',
//     isStarred: false,
// }];


// export default function Problem3_Highlight() {
//     const [letters, setLetters] = useState(initialLetters);
//     const [highlightedId, setHighlightedId] = useState(null);

//     function handleHover(letterId) {
//         setHighlightedId(letterId);
//     }

//     function handleStar(starredId) {
//         setLetters(letters.map(letter => {
//             if (letter.id === starredId) {
//                 return {
//                     ...letter,
//                     isStarred: !letter.isStarred
//                 };
//             } else {
//                 return letter;
//             }
//         }));
//     }

//     function Letter({
//         letter,
//         isHighlighted,
//         onHover,
//         onToggleStar,
//     }) {
//         return (
//             <li
//                 className={
//                     isHighlighted ? 'highlighted' : ''
//                 }
//                 onFocus={() => {
//                     onHover(letter.id);
//                 }}
//                 onPointerMove={() => {
//                     onHover(letter.id);
//                 }}
//             >
//                 <button onClick={() => {
//                     onToggleStar(letter.id);
//                 }}>
//                     {letter.isStarred ? 'Unstar' : 'Star'}
//                 </button>
//                 {letter.subject}
//             </li>
//         )
//     }



//     return (
//         <>
//             <h2>Inbox</h2>
//             <ul>
//                 {letters.map(letter => (
//                     <Letter
//                         key={letter.id}
//                         letter={letter}
//                         isHighlighted={
//                             letter.id === highlightedId
//                         }
//                         onHover={handleHover}
//                         onToggleStar={handleStar}
//                     />
//                 ))}
//             </ul>
//         </>
//     );
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const initialLetters = [{
//     id: 0,
//     subject: 'Ready for adventure?',
//     isStarred: true,
//   }, {
//     id: 1,
//     subject: 'Time to check in!',
//     isStarred: false,
//   }, {
//     id: 2,
//     subject: 'Festival Begins in Just SEVEN Days!',
//     isStarred: false,
//   }];
//   const [mails, starMail] = useState(initialLetters)
//   const [highlighted, setHighlighted] = useState(false)
//   function handleStar(id) {
//     starMail(mails.map(mail => {
//       if (mail.id === id) {
//         return { ...mail, isStarred: !mail.isStarred }
//       } else {
//         return mail
//       }
//     }))
//   }
//   function highlight() {
//     setHighlighted(!highlighted)
//   }
//   return (
//     <>
//       <ul>
//         {mails.map(mail =>
//           <li key={mail.id} onPointerMove={() => { highlight() }} className={highlighted ? "highlight" : ""} >
//             <button onClick={() => { handleStar(mail.id) }}>{mail.isStarred ? "Star" : "UnStar"}</button>
//             {mail.subject}</li>
//         )}
//       </ul>
//     </>
//   )
// }

// export default App
//////////////////////////////////////////////////////////////////////////////

import { useState } from 'react'
import "./styles.css"
const App = () => {
    const initialLetters = [{
        id: 0,
        subject: 'Ready for adventure?',
        isStarred: true,
    }, {
        id: 1,
        subject: 'Time to check in!',
        isStarred: false,
    }, {
        id: 2,
        subject: 'Festival Begins in Just SEVEN Days!',
        isStarred: false,
    }];
    const [mails, starMail] = useState(initialLetters)
    const [highlightedId, setHighlightedId] = useState(null)
    function handleStar(id) {
        starMail(mails.map(mail => {
            if (mail.id === id) {
                return { ...mail, isStarred: !mail.isStarred }
            } else {
                return mail
            }
        }))
    }
    return (
        <>
            <ul>
                {mails.map(mail =>
                    <li key={mail.id}
                        onMouseEnter={() => { setHighlightedId(mail.id) }}
                        onMouseLeave={() => { setHighlightedId(null) }}
                        className={highlightedId === mail.id ? "highlighted" : ""} >
                        <button onClick={() => { handleStar(mail.id) }}>{mail.isStarred ? "Star" : "UnStar"}</button>
                        {mail.subject}</li>
                )}
            </ul>
        </>
    )
}

export default App
