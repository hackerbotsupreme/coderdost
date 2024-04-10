import ChatRum from "./Problem1"
import Timer from "./Problem4"
// import Timer2 from "./Problem5"
// import Timer3 from "./Problem6"
// import ChatRoom5 from "./Problem7"
// import ChatRoom3 from "./Problem2"
// import ChatRoom4 from "./Problem3"

function App() {

  return (
    <>
    <b style={{textAlign:"center"}}> <h1>Separating Events from Effects</h1> </b>
    <hr />
    <h1>4.6-Problem 1:Choosing between event handlers and Effects </h1>
    <hr />
    <h1>4.6-Problem 2:Event handlers run in response to specific interactions  </h1>
    <hr />
    <h1>4.6-Problem 3:Effects run whenever synchronization is needed   </h1>
    <ChatRum/>
    <hr />
    <h1>4.6-Problem 4:Reactive values and reactive logic </h1>
    <hr />
    <h1>4.6-Problem 5:Logic inside Effects is reactive  </h1>
    <hr />
    <h1>4.6-Problem 6:Extracting non-reactive logic out of Effects  </h1>
    {/* <ChatRoom3/> */}
    <hr />
    <h1>4.6-Problem 7:Declaring an Effect Event   </h1>
    {/* <ChatRoom4/> */}
    <hr />
    <h1>4.6-Problem 8:Reading latest props and state with Effect Events  </h1>
    <hr />
    <h1>4.6-Problem 9:Is it okay to suppress the dependency linter instead? </h1>
    <Timer/>
    <hr />
    <h1>4.6-Problem 10:Challenge 1 of 4: Fix a variable that doesn’t update </h1>
    <h1>4.6-Problem 10:Challenge 2 of 4: Fix a freezing counter </h1>
    {/* <Timer2/> */}
    <hr />
    <h1>4.6-Problem 11:Challenge 3 of 4: Fix a non-adjustable delay </h1>
    {/* <Timer3/> */}
    <hr />
    <h1>4.6-Problem 12: Challenge 4 of 4: Fix a delayed notification </h1>
    {/* <ChatRoom5/> */}
    <hr />
    </>
  )
}

export default App
