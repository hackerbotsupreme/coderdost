
// import './App.css'
import Form from './Problem1'
import CatFriends from './Problem2'
import Form2 from './Problem3'
import Counter from './Problem4'
import VideoPlayer from './Problem5'
import Page from './Problem6'
import CatFriends2 from './Problem7'
import Page2 from './Problem8'

function App() {
  return (
    <>
      <b style={{textAlign:"center"}}><h1>Manipulating the DOM with Refs</h1></b>
      <hr />
      <h1>Getting a ref to the node </h1>
      <Form/>
      <hr />
      <h1></h1>
      <h1>Example: Scrolling to an element </h1>
      <CatFriends/>
      <hr />
      <h1>How to manage a list of refs using a ref callback </h1>
      <hr />
      <h1>Accessing another component’s DOM nodes </h1>
      <Form2/>
      <hr />
      <h1>Exposing a subset of the API with an imperative handle </h1>
      <hr />
      <h1>When React attaches the refs </h1>
      <hr />
      <h1>Flushing state updates synchronously with flushSync </h1>
      <hr />
      <h1>Best practices for DOM manipulation with refs</h1>
      <Counter/>
      <hr />
      <h1>Challenge 1 of 4: Play and pause the video </h1>
      <VideoPlayer/>
      <hr />
      <h1>Challenge 2 of 4: Focus the search field </h1>
      <Page/>
      <hr />
      <h1>Challenge 3 of 4: Scrolling an image carousel </h1>
      <CatFriends2/>
      <hr />
      <h1>Challenge 4 of 4: Focus the search field with separate components </h1>
      <Page2/>
      <br />
      <hr />
    </>
  )
}

export default App
