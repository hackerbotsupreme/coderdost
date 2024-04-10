import Pointer from "./Problem1"
// import ChatRoom1 from "./Problem2"
import Chatroom2 from "./Problem3"
import Chatroom3 from "./Problem4"
import Page from "./Problem5"
// import Chatroom4 from "./Problem6"

function App() {
  return (
    <>
    <h1>4.5-Problem 1 :The lifecycle of an Effect  </h1>
    <h1>4.5-Problem 2 : Why synchronization may need to happen more than once </h1>
    <h1>4.5-Problem 3 : How React re-synchronizes your Effect </h1>
    <h1>4.5-Problem 4 : Thinking from the Effect’s perspective  </h1>
    <h1>4.5-Problem 5 : How React verifies that your Effect can re-synchronize   </h1>
    <h1>4.5-Problem 6 : How React knows that it needs to re-synchronize the Effect </h1>
    <h1>4.5-Problem 7 : Each Effect represents a separate synchronization process  </h1>
    <h1>4.5-Problem 8 : Effects “react” to reactive values  </h1>
    {/* <Chatroom4/> */}
    <h1>4.5-Problem 9 : What an Effect with empty dependencies means  </h1>
    <h1>4.5-Problem 10 :What an Effect with empty dependencies means  </h1>
    <h1>4.5-Problem 12 :All variables declared in the component body are reactive   </h1>
    <h1>4.5-Problem 13 :Can global or mutable values be dependencies? </h1>
    <h1>4.5-Problem 14 :React verifies that you specified every reactive value as a dependency  </h1>
    <h1>4.5-Problem 15 :What to do when you don’t want to re-synchronize </h1>
    <h1>4.5-Problem 16 :What to do when you don’t want to re-synchronize </h1>
    <h1>4.5-Problem  : Challenge 2 of 5: Switch synchronization on and off </h1>
    <Pointer/>
    <hr />
    <h1>4.5-Problem 1 : Challenge 1 of 5: Fix reconnecting on every keystroke </h1>
    {/* <ChatRoom1/> */}
    <br />
    <hr />
    <h1>4.5-Problem 1 : Challenge 3 of 5: Investigate a stale value bug </h1>
    <Chatroom2/>
    <hr />
    <h1>4.5-Problem 1 : Challenge 4 of 5: Fix a connection switch </h1>
    <Chatroom3/>
    <hr />
    <h1>4.5-Problem 1 : Challenge 5 of 5: Populate a chain of select boxes </h1>
    <Page/>
    <hr />
    </>
  )
}

export default App
