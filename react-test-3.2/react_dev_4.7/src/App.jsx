import ChatRoom1 from "./Problem1"
import ChatRoom2 from "./Problem2"
import Timer from "./Problem3"
import ChatRoom3 from "./Problem4"
import ChatRoom4 from "./Problem5"
import Timer2 from "./Problem6"
import Welcome2 from "./Problem7"
import ChatRoom5 from "./Problem8"
import ChatRoomX from "./Problem9"


function App() {
  return (
    <>
      <b style={{ textAlign: "center" }}><h1>Removing Effect Dependencies</h1></b>
      <hr />
      <h1>4.7-Problem1:Dependencies should match the code </h1>
      <ChatRoom1 />
      <hr />
      <h1>4.7-Problem2:To remove a dependency, prove that it’s not a dependency </h1>
      <p>Now that roomId is not a reactive value (and can’t change on a re-render), it doesn’t need to be a dependency:</p>
      <ChatRoom2 />
      <hr />
      <h1>4.7-Problem3:Why is suppressing the dependency linter so dangerous? </h1>
      <p>Suppressing the linter leads to very unintuitive bugs that are hard to find and fix. Here’s one example:</p>
      <Timer />
      <h2></h2>
      <h1>4.7-Problem4:Removing unnecessary dependencies </h1>
      <h1>4.7-Problem5:Should this code move to an event handler? </h1>
      <h1>4.7-Problem6:Is your Effect doing several unrelated things? </h1>
      <h1>4.7-Problem7:Are you reading some state to calculate the next state? </h1>
      <h1>4.7-Problem8:Do you want to read a value without “reacting” to its changes? </h1>
      <h1>4.7-Problem9:Separating reactive and non-reactive code  </h1>
      <h1>4.7-Problem10:Does some reactive value change unintentionally?  </h1>
      <hr />
      <ChatRoom3 />
      <br />
      <h1>4.7-Problem11:Move static objects and functions outside your component </h1>
      <hr />
      <h1>4.7-Problem12:Move dynamic objects and functions inside your Effect  </h1>
      <ChatRoom4 />
      <hr />
      <h1>4.7-Problem14:Read primitive values from objects   </h1>
      <h1>4.7-Problem15:Calculate primitive values from functions    </h1>
      <hr />
      <h1>4.7-Problem16:Challenge 1 of 4: Fix a resetting interval </h1>
      <Timer2 />
      <hr />
      <h1>4.7-Problem17:Challenge 2 of 4: Fix a retriggering animation </h1>
      <Welcome2 />
      <hr />
      <h1>4.7-Problem18:Challenge 3 of 4: Fix a reconnecting chat </h1>
      <ChatRoom5 />
      <hr />
      <h1>4.7-Problem19:Challenge 4 of 4: Fix a reconnecting chat, again </h1>
      <ChatRoomX />
      <hr />
    </>
  )
}

export default App
