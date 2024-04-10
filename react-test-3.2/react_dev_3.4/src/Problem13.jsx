// my try

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [reverse, viceVersa] = useState(false)
//   return (
//     <>
//       {reverse ?
//         <>
//           Last Name
//           <input
//             type='text'
//             placeholder="Last Name"
//           ></input>
//         </>
//         :
//         <>
//           First Name
//           <input
//             type='text'
//             placeholder="First Name"
//           ></input>
//         </>
//       } <br />
//       {reverse ?
//         <>
//           First Name
//           <input
//             type='text'
//             placeholder="First Name"
//           ></input>
//         </>
//         :
//         <>
//           Last Name
//           <input
//             type='text'
//             placeholder="Last Name"
//           ></input>
//         </>
//       } <br />
//       <label>
//         <input type="checkbox" onClick={() => { viceVersa(!reverse) }} /> reverse order
//       </label>
//     </>
//   )
// }

// Your code is correct and it does achieve the desired functionality of swapping the fields based on the checkbox. However, there’s a bit of repetition in your code that can be avoided. Here’s a more concise way to write your component:

// import React, { useState } from 'react'

// const App = () => {
//   const [reverse, setReverse] = useState(false)
//   const fields = reverse ? ["Last Name", "First Name"] : ["First Name", "Last Name"]

//   return (
//     <>
//       {fields.map(field => (
//         <>
//           {field}
//           <input type='text' placeholder={field}></input>
//           <br />
//         </>
//       ))}
//       <label>
//         <input type="checkbox" onClick={() => setReverse(!reverse)} /> reverse order
//       </label>
//     </>
//   )
// }

// export default App

// but if you say the code such follws  well-structured and follows React best practices
// then its here 

// import { useState } from 'react';

// export default function Swap_two_form_fields() {
//     const [reverse, setReverse] = useState(false);
//     let checkbox = (
//         <label>
//             <input
//                 type="checkbox"
//                 checked={reverse}
//                 onChange={e => setReverse(e.target.checked)}
//             />
//             Reverse order
//         </label>
//     );
//     if (reverse) {
//         return (
//             <>
//                 <Field label="Last name" />
//                 <Field label="First name" />
//                 {checkbox}
//             </>
//         );
//     } else {
//         return (
//             <>
//                 <Field label="First name" />
//                 <Field label="Last name" />
//                 {checkbox}
//             </>
//         );
//     }
// }

// function Field({ label }) {
//     const [text, setText] = useState('');
//     return (
//         <label>
//             {label}:{' '}
//             <input
//                 type="text"
//                 value={text}
//                 placeholder={label}
//                 onChange={e => setText(e.target.value)}
//             />
//         </label>
//     );
// }

// here is a clarification that why this code is more effective . 
// Functional Components: You’re using functional components with hooks, which is the recommended way to write components in modern React.
// State Management: You’re using the useState hook for state management, which is correct.
// Props: You’re passing props correctly to child components.
// Conditional Rendering: You’re using conditional rendering based on the state to swap the form fields, which is a good use of React’s declarative nature.
// Event Handling: You’re handling the checkbox change event correctly to update the state.
// However, there’s always room for improvement. Here are a couple of suggestions:
// Unique Key Prop: When you’re rendering lists in React, each child in a list should have a unique “key” prop. In your case, you’re rendering a list of Field components. Although it might not cause issues in this specific scenario, it’s a good practice to include keys in lists.
// Component Naming: It’s a common convention in React to start component names with a capital letter. Your App and Field components follow this convention, but Swap_two_form_fields does not. Consider renaming it to SwapTwoFormFields for consistency.


// but this can be upgraded even furthur 

import { useState } from 'react';

export default function SwapTwoFormFields() {
    const [reverse, setReverse] = useState(false);
    let checkbox = (
        <label>
            <input
                type="checkbox"
                checked={reverse}
                onChange={e => setReverse(e.target.checked)}
            />
            Reverse order
        </label>
    );
    const fields = reverse ? ["Last name", "First name"] : ["First name", "Last name"];
    return (
        <>
            {fields.map((field, index) => <Field key={index} label={field} />)}
            {checkbox}
        </>
    );
}

function Field({ label }) {
    const [text, setText] = useState('');
    return (
        <label>
            {label}:{' '}
            <input
                type="text"
                value={text}
                placeholder={label}
                onChange={e => setText(e.target.value)}
            />
        </label>
    );
}
