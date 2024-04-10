import Counter from "./Problem1"
import Stopwatch from "./Problem2"
import Stopwatch2 from "./Problem3"
import Counter2 from "./Problem4"
import Counter3 from "./Problem5"
import Chat from "./Problem6"
import Toggle from "./Problem7"
import Dashboard from "./Problem8"
import ChatT from "./Problem9"
// import './App.css'

function App() {
  return (
    <>
      <b style={{textAlign:"center"}}><h1>Referencing Values with Refs</h1></b>
      <hr />
      <h1>Adding a ref to your component </h1>
      <Counter/>
      <hr />
      <h1>Example: building a stopwatch </h1>
      <Stopwatch/>
      <hr />
      <Stopwatch2/>
      <hr />
      <h1>Differences between refs and state </h1>
      <Counter2/>
      <hr />
      <Counter3/>
      <hr />
      <h1>How does useRef work inside? </h1>
      <hr />
      <h1>When to use refs </h1>
      <hr />
      <h1>Best practices for refs </h1>
      <hr />
      <h1>Refs and the DOM </h1>
      <hr />
      <h1>Challenge 1 of 4: Fix a broken chat input </h1>
      <Chat/>
      <br />
      <hr />
      <h1>Challenge 2 of 4: Fix a component failing to re-render</h1>
      <Toggle/>
      <hr />
      <h1>Challenge 3 of 4: Fix debouncing </h1>
      <Dashboard/>
      <hr />
      <h1>Challenge 4 of 4: Read the latest state </h1>
      <ChatT/>
      <br />
      <br />
    </>
  )
}

export default App
