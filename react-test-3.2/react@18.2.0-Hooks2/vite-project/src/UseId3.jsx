import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css';

const root1 = createRoot(document.getElementById('root1'), {
    identifierPrefix: 'my-first-app-'
});
root1.render(<App />);

const root2 = createRoot(document.getElementById('root2'), {
    identifierPrefix: 'my-second-app-'
});
root2.render(<App />);

// index.html

// <!DOCTYPE html>
// <html>
//   <head><title>My app</title></head>
//   <body>
//     <div id="root1"></div>
//     <div id="root2"></div>
//   </body>
// </html>

// App.js
// import { useId } from 'react';

// function PasswordField() {
//     const passwordHintId = useId();
//     console.log('Generated identifier:', passwordHintId)
//     return (
//         <>
//             <label>
//                 Password:
//                 <input
//                     type="password"
//                     aria-describedby={passwordHintId}
//                 />
//             </label>
//             <p id={passwordHintId}>
//                 The password should contain at least 18 characters
//             </p>
//         </>
//     );
// }

// export default function App() {
//     return (
//         <>
//             <h2>Choose password</h2>
//             <PasswordField />
//         </>
//     );
// }
