import './App.css';

// function App() {
//   let Name = "react app"
//   return (
//     <div className="App">
//       <div className="App-header">
//         App
//         <Demo></Demo>
//         {Name}
//       </div>
//     </div>
//   );
// }

// giving the variables as attribute values 
function App() {
  console.log("App")
  let Name = "react app"
  let className = "App-header"
  return (
    <div className="App">
      <div className={className}>
        <Demo></Demo>
        {Name}
      </div>
    </div>
  );
}

function Demo() {
  console.log("Demo")
  return (
    <div className="App">
      <div className="App-header">
        Demo
      </div>
    </div>
  );
}

export default App;
