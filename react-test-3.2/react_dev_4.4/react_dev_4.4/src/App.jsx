import TodoList2 from "./Problem2"
import TodoList from "./Problem2"
import EditContact from "./Problem3"
import Form from "./Problem4"


function App() {
  return (
    <>
      <b style={{ textAlign: "center" }}><h1>You Might Not Need an Effect</h1></b>
      <hr />
      <h1>4.4- Problem1 : How to remove unnecessary Effects </h1>
      <br />
      <h1>4.4- Problem2 : Updating state based on props or state  </h1>
      <hr />
      <h1>4.4- Problem3 : Caching expensive calculations   </h1>
      <hr />
      <h1>4.4- Problem4 : How to tell if a calculation is expensive? </h1>
      <hr />
      <h1>4.4- Problem5 : Resetting all state when a prop changes  </h1>
      <hr />
      <h1>4.4- Problem6 : Adjusting some state when a prop changes   </h1>
      <hr />
      <h1>4.4- Problem7 : Sharing logic between event handlers   </h1>
      <hr />
      <h1>4.4- Problem8 :  Sharing logic between event handlers   </h1>
      <hr />
      <h1>4.4- Problem9 : Chains of computations   </h1>
      <hr />
      <h1>4.5- Problem10 : Initializing the application    </h1>
      <hr />
      <h1>4.5- Problem11 : Notifying parent components about state changes     </h1>
      <hr />
      <h1>4.5- Problem12 : Passing data to the parent </h1>
      <hr />
      <h1>4.5- Problem13 :Fetching data </h1>
      <hr />
      <h1>4.5- Problem14 :Challenge 1 of 4: Transform data without Effects </h1>
      <TodoList />
      <hr />
      <h1>4.5- Problem14 :Challenge 2 of 4: Cache a calculation without Effects </h1>
      <TodoList2 />
      <hr />
      <h1>4.5- Problem14 :Challenge 3 of 4: Reset state without Effects </h1>
      <EditContact />
      <hr />
      <h1>4.5- Problem14 :Challenge 4 of 4: Submit a form without Effects </h1>
      <Form />
      <hr />
    </>
  )
}

export default App
