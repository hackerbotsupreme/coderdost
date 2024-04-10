import './App.css'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'
import App7 from './App7'
import App888 from './App8'

function App() {
  return (
    <>
      <h1>3.6-Passing Data Deeply with Context</h1>
      <hr />
      <h1>3.6-problem1-Context: an alternative to passing props </h1>
      <App2 />
      <hr />
      <h1>3.6- problem2 - Lets say you want multiple headings within the same Section to always have the same size:</h1>
      <App3 />
      <hr />
      <h1>Step 1: Create the context </h1>
      <App4 />
      <hr />
      <h1>Step 2: Use the context </h1>
      <h1>Step 3: Provide the context </h1>
      <br />
      <App5 />
      <hr />
      <App6 />
      <hr />
      <h2>Try out some challenges</h2>
      <h1>Challenge 1 of 1: Replace prop drilling with context </h1>
      <p>In this example, toggling the checkbox changes the imageSize prop passed to each PlaceImage. The checkbox state is held in the top-level App component, but each PlaceImage needs to be aware of it.

        Currently, App passes imageSize to List, which passes it to each Place, which passes it to the PlaceImage. Remove the imageSize prop, and instead pass it from the App component directly to PlaceImage.

        You can declare context in Context.js.</p>
      <b>Solution
        Remove imageSize prop from all the components.

        Create and export ImageSizeContext from Context.js. Then wrap the List into ImageSizeContext.Provider value=imageSize to pass the value down, and useContext ImageSizeContext to read it in the PlaceImage:</b>
        <hr />
        <br />
      <App7/>
      <br />
      <hr />
      <h1>Context passes through intermediate components </h1>
      <p>You can insert as many components as you like between the component that provides context and the one that uses it. This includes both built-in components like div and components you might build yourself.

In this example, the same Post component (with a dashed border) is rendered at two different nesting levels. Notice that the Heading inside of it gets its level automatically from the closest Section:</p>
<App888/>
    </>
  )
}
export default App