import { useReducer } from './MyReact.jsx';
import Chat from './Chat333.jsx';
import ContactList from './ContactList333.jsx';
import { initialState, messengerReducer } from './messengerReducer333';

export default function Messenger333() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.messages[state.selectedId];
    const contact = contacts.find((c) => c.id === state.selectedId);
    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
];


// import {useReducer} from "react"

// export default function Messenger333() {
//   const [state, dispatch] = useReducer(messengerReducer, initialState);
//   const message = state.messages[state.selectedId];
//   const contact = contacts.find((c) => c.id === state.selectedId);
//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedId={state.selectedId}
//         dispatch={dispatch}
//       />
//       <Chat
//         key={contact.id}
//         message={message}
//         contact={contact}
//         dispatch={dispatch}
//       />
//     </div>
//   );
// }

// const contacts = [
//   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
//   { id: 1, name: 'Alice', email: 'alice@mail.com' },
//   { id: 2, name: 'Bob', email: 'bob@mail.com' },
// ];
// function Chat({ contact, message, dispatch }) {
//   return (
//     <section className="chat">
//       <textarea
//         value={message}
//         placeholder={'Chat to ' + contact.name}
//         onChange={(e) => {
//           dispatch({
//             type: 'edited_message',
//             message: e.target.value,
//           });
//         }}
//       />
//       <br />
//       <button
//         onClick={() => {
//           alert(`Sending "${message}" to ${contact.email}`);
//           dispatch({
//             type: 'sent_message',
//           });
//         }}>
//         Send to {contact.email}
//       </button>
//     </section>
//   );
// }
// function ContactList({ contacts, selectedId, dispatch }) {
//   return (
//     <section className="contact-list">
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>
//             <button
//               onClick={() => {
//                 dispatch({
//                   type: 'changed_selection',
//                   contactId: contact.id,
//                 });
//               }}>
//               {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
// const initialState = {
//   selectedId: 0,
//   messages: {
//     0: 'Hello, Taylor',
//     1: 'Hello, Alice',
//     2: 'Hello, Bob',
//   },
// };

// export function messengerReducer(state, action) {
//   switch (action.type) {
//     case 'changed_selection': {
//       return {
//         ...state,
//         selectedId: action.contactId,
//       };
//     }
//     case 'edited_message': {
//       return {
//         ...state,
//         messages: {
//           ...state.messages,
//           [state.selectedId]: action.message,
//         },
//       };
//     }
//     case 'sent_message': {
//       return {
//         ...state,
//         messages: {
//           ...state.messages,
//           [state.selectedId]: '',
//         },
//       };
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }



// when i click on the button of contact list en error occurs says - Uncaught TypeError: Cannot read properties of undefined (reading 'name')

// The error occurs because the `contact` prop passed to the `Chat` component is `undefined` when the component first renders. This is because the `contact` is derived from the `contacts` array using `contacts.find(c => c.id === state.selectedId)`, but `contacts` is not defined in the scope of the `App` component.

// To fix this issue, you need to include the `contacts` array in the component's state or pass it as a prop from outside the component. Here's the updated code with the `contacts` array included in the component's state:

// ```jsx
      // import React, { useReducer } from 'react';

      // const App = () => {
      //   const initialState = {
      //     selectedId: 0,
      //     message: {
      //       0: "Hello, Taylor",
      //       1: "Hello, Alice",
      //       2: "Hello, Bob"
      //     },
      //     contacts: [
      //       { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
      //       { id: 1, name: 'Alice', email: 'alice@mail.com' },
      //       { id: 2, name: 'Bob', email: 'bob@mail.com' },
      //     ]
      //   };

      //   const [state, dispatch] = useReducer(messengerReducer, initialState);
      //   const message = state.message[state.selectedId];
      //   const selectedId = state.selectedId;
      //   const contact = state.contacts.find(c => c.id === state.selectedId);

      //   function messengerReducer(state, action) {
      //     switch (action.type) {
      //       case "edited_message":
      //         return {
      //           ...state,
      //           message: {
      //             ...state.message,
      //             [state.selectedId]: action.message
      //           }
      //         };
      //       case "sent_message":
      //         return {
      //           ...state,
      //           message: {
      //             ...state.message,
      //             [state.selectedId]: ""
      //           }
      //         };
      //       case "changed_selection":
      //         return {
      //           ...state,
      //           selectedId: action.id
      //         };
      //       default:
      //         throw new Error("Unknown action:", action.type);
      //     }
      //   }

      //   return (
      //     <>
      //       <ContactList
      //         contacts={state.contacts}
      //         selectedId={selectedId}
      //         dispatch={dispatch}
      //       />
      //       <Chat
      //         contact={contact}
      //         dispatch={dispatch}
      //         message={message}
      //       />
      //     </>
      //   );
      // };

      // function Chat({ contact, message, dispatch }) {
      //   return (
      //     <section className="chat">
      //       <textarea
      //         value={message}
      //         placeholder={`Chat to ${contact?.name || ''}`}
      //         onChange={(e) => {
      //           dispatch({
      //             type: 'edited_message',
      //             message: e.target.value,
      //           });
      //         }}
      //       />
      //       <br />
      //       <button
      //         onClick={() => {
      //           alert(`Sending "${message}" to ${contact.email}`);
      //           dispatch({
      //             type: 'sent_message',
      //           });
      //         }}>
      //         Send to {contact.email}
      //       </button>
      //     </section>
      //   );
      // }

      // function ContactList({ contacts, selectedId, dispatch }) {
      //   return (
      //     <section className="contact-list">
      //       <ul>
      //         {contacts.map((contact) => (
      //           <li key={contact.id}>
      //             <button
      //               onClick={() => {
      //                 dispatch({
      //                   type: 'changed_selection',
      //                   id: contact.id,
      //                 });
      //               }}>
      //               {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
      //             </button>
      //           </li>
      //         ))}
      //       </ul>
      //     </section>
      //   );
      // }

      // export default App;
// ```

// Here are the changes made:

// 1. The `contacts` array is now included in the initial state of the `App` component.
// 2. The `contact` prop passed to the `Chat` component is derived from `state.contacts` using the `find` method based on `state.selectedId`.
// 3. In the `Chat` component, the `placeholder` attribute of the `textarea` now uses the optional chaining operator `?.` to handle the case where `contact` or `contact.name` is `undefined`.
// 4. In the `ContactList` component, the `changed_selection` action now uses the correct `id` property instead of `contactId`.

// With these changes, the error should be resolved, and the application should work as expected.