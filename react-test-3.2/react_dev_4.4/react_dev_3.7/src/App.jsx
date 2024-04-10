import TaskApp from './Problem1'
import './App.css'
import TaskApp2 from './Problem2'
import TaskApp3 from './Problem3'
import TaskApp4 from './Problem4'
import TaskApp5 from './Problem5'
import TaskApp6 from './Problem6'

function App() {
  return (
    <>
    <b style={{textAlign:"center"}}> <h1>Scaling Up with Reducer and Context</h1> </b>
    <hr />
    <h1>Combining a reducer with context </h1>
    <TaskApp/>
    <hr />
    <h1>Step 1: Create the context </h1>
    <TaskApp2/>
    <hr />
    <h1>Step 2: Put state and dispatch into context </h1>
    <TaskApp3/>
    <hr />
    <h1>Step 3: Use context anywhere in the tree </h1>
    <TaskApp4/>
    <hr />
    <h1>Moving all wiring into a single file </h1>
    <TaskApp5/>
    <hr />
    <TaskApp6/>
    </>
  )
}

export default App
