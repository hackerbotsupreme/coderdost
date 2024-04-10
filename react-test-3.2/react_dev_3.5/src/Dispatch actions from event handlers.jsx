import { useReducer } from 'react';
import Chat from './Chat.jsx';
import ContactList from './ContactList.jsx';
import { initialState, messengerReducer } from './messengerReducer';

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
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
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];
// code all together 
// import React, { useReducer } from 'react'
// const initialState = {
//   selectedId: 0,
//   message: 'Hello',
// }
// const App = () => {
//   const [state, dispatch] = useReducer(messengerReducer, initialState)
//   function messengerReducer(state ,action) {
//     switch (action.type) {
//       case "change_contact":
//         return {
//           ...state,
//           selectedId: action.contactId,
//           message: '',
//         };
//       case "edited_contact":
//         return {
//           ...state,
//           message: action.message,
//         };
//       default:
//         throw Error("Unknown Action :", action.type)
//     }
//   }

//   const message = state.message;
//   const contact = Contacts.find((c) => c.id === state.selectedId);
//   return (
//     <div>
//       <ContactList
//         contacts={Contacts}
//         selectedId={state.selectedId}
//         dispatch={dispatch}
//       />
//       <Chat
//         contact={contact}
//         message={message}
//         dispatch={dispatch}
//       />
//     </div>
//   )
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
//                   type: 'change_contact',
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
// function Chat({ contact, message, dispatch }) {
//   return (
//     <section className="chat">
//       <textarea
//         value={message}
//         placeholder={'Chat to ' + contact.name}
//         onChange={(e) => {
//           dispatch({
//             type: 'edited_contact',
//             message: e.target.value,
//           });
//         }}
//       />
//       <br />
//       <button>Send to {contact.email}</button>
//     </section>
//   );
// }
// const Contacts = [
//   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
//   { id: 1, name: 'Alice', email: 'alice@mail.com' },
//   { id: 2, name: 'Bob', email: 'bob@mail.com' }
// ];

// export default App