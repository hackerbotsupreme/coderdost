import VideoPlayer1 from "./Problem1"
import VideoPlayer2 from "./Problem2"
import VideoPlayer3 from "./Problem3"
import ChatRoom from "./Problem4"
import Playground2 from "./Problem5"
import MyInput from "./Problem6"
import Form from "./Problem6.1"
// import MyInput1 from "./MyInput1"
import Counter from "./Problem8"
import Page from "./Problem9"

function App() {
  return (
    <>
      <b style={{textAlign:"center"}}><h1>Synchronizing with Effects</h1></b>
      <hr />
      <h1>4.3-Problem 1:What are Effects and how are they different from events? </h1>
      <hr />
      <h1>4.3 - Problem 2:You might not need an Effect </h1>
      <hr />
      <h1>4.3 - Problem 3:How to write an Effect  </h1>
      <hr />
      <h1>4.3 - Problem 4:Step 1: Declare an Effect  </h1>
      <VideoPlayer1/>
      <hr />
      <h1>4.3 - Problem 4:Step 2: Specify the Effect dependencies  </h1>
      <VideoPlayer2/>
      <hr />
      <VideoPlayer3/>
      <hr />
      <h1>4.3 - Problem 4:Step 2:Why was the ref omitted from the dependency array? </h1>
      <hr />
      <h1>4.3 - Problem 4: Step 3: Add cleanup if needed </h1>
      <ChatRoom/>
      <hr />
      <h1>4.3 - Problem 4:How to handle the Effect firing twice in development?  </h1>
      <hr />
      <h1>4.3 - Problem 4:Controlling non-React widgets   </h1>
      <hr />
      <h1>4.3 - Problem 4:Triggering animations  </h1>
      <hr />
      <h1>4.3 - Problem 4:Fetching data  </h1>
      <hr />
      <h1>4.3 - Problem 4:What are good alternatives to data fetching in Effects? </h1>
      <hr />
      <h1>4.3 - Problem 4:Sending analytics  </h1>
      <hr />
      <h1>4.3 - Problem 4:Not an Effect: Initializing the application  </h1>
      <hr />
      <h1>4.3 - Problem 4:Not an Effect: Buying a product </h1>
      <hr />
      <h1>4.3 - Problem 4:Putting it all together </h1>
      <Playground2/>
      <hr />
      <h1>4.3 - Problem 4:Each render has its own Effects </h1>
      <hr />
      <h1>4.3 - Problem 4:Challenge 1 of 4: Focus a field on mount  </h1>
      <MyInput/>
      <hr />
      <h1>4.3 - Problem 4:Challenge 2 of 4: Focus a field conditionally  </h1>
      <Form/>
      <hr />
      <h1>4.3 - Problem 4:Challenge 3 of 4: Fix an interval that fires twice </h1>
      <Counter/>
      <hr />
      <h1>4.3 - Problem 4:Challenge 4 of 4: Fix fetching inside an Effect  </h1>
      <Page/>
      <hr />

    </>
  )
}

export default App
