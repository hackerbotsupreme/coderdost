
import './App.css'
import TaskApp from './Problem1'
import TaskApp2 from './Problem2'
import Messenger from './Problem4'
import Messenger2 from './Problem5'
import Messenger3 from './Problem6'
import Messenger7 from './Problem7'

function App() {
  return (
    <>
    <b style={{textAlign:"center"}}><h1>Extracting State Logic into a Reducer</h1></b>
    <hr />
    <h1>Consolidate state logic with a reducer </h1>
    <TaskApp/>
    <hr />
    <h1>Step 1: Move from setting state to dispatching actions </h1>
    <hr />
    <h1>Step 2: Write a reducer function </h1>
    <hr />
    <h1>Why are reducers called this way? </h1>
    <hr />
    <h1>Step 3: Use the reducer from your component </h1>
    <TaskApp2/>
    <hr />
    <h1>Comparing useState and useReducer </h1>
    <hr />
    <h1>Comparing useState and useReducer </h1>
    <hr />
    <h1>Writing reducers well </h1>
    <hr />
    <h1>Writing concise reducers with Immer </h1>
    <hr />
    <h1>Challenge 1 of 4: Dispatch actions from event handlers </h1>
    <Messenger/>
    <hr />
    <h1>Challenge 2 of 4: Clear the input on sending a message </h1>
    <Messenger2/>
    <hr />
    <h1>Challenge 3 of 4: Restore input values when switching between tabs </h1>
    <Messenger3/>
    <hr />
    <h1>Challenge 4 of 4: Implement useReducer from scratch </h1>
    <Messenger7/>
    <br />
    <hr />
    </>
  )
}

export default App
