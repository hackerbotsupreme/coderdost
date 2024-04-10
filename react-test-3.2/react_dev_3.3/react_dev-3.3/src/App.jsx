import { useState } from 'react'
import './App.css'
import SyncedInputs from './Problem1_Synced_inputs'
// import FilterableList from './Problem2_FilterableList'
import Accordion from './Problem3_Accordion'
import Accordion2 from './Problem4_Accordion2'
import FilterableList from './Problem2_FilterableList'
import "./styles.css"



function App() {
  return (
    <>
      <b style={{ textAlign: "center" }}><h1>Sharing State Between Components</h1></b>
      <hr />
      <h2>3.3-Problem 1:Synced inputs</h2>
      <p>Challenge 1 of 2: Synced inputs <br />
        These two inputs are independent. <br />
        Make them stay in sync: editing one <br />
        input should update the other input <br />
        with the same text, and vice versa.</p><br />
      <SyncedInputs />
      <p>Solution<br />
        Move the text state variable into the parent component <br />
        along with the handleChange handler. Then pass them down <br />
        as props to both of the Input components. This will <br />
        keep them in sync.</p>
      <hr />
      <h1>3.3-Problem 2:Filtering a list</h1>
      <article>Challenge 2 of 2: Filtering a list <br />
        In this example, the SearchBar has its own <br />
        query state that controls the text input.<br />
        Its parent FilterableList component displays <br />
        a List of items, but it doesn’t take <br />
        the search query into account.<br /><br /><br />

        Use the filterItems(foods, query) function <br />
        to filter the list according to the search query. <br />
        To test your changes, verify that typing “s” into <br />
        the input filters down the list to “Sushi”,<br />
        “Shish kebab”, and “Dim sum”.<br /><br />

        Note that filterItems is already implemented <br />
        and imported so you don’t need to write it yourself!</article>
      <FilterableList />
      <p>Solution
        Lift the query state up into the FilterableList <br />
        component. Call filterItems(foods, query) to get <br />
        the filtered list and pass it down to the List. <br />
        Now changing the query input is reflected in the list</p>

      <hr />
      <h1>3.3-Problem 3:Accordion</h1>
      <p>Add state to the common parent </p>
      <Accordion />
      <p>Controlled and uncontrolled components<br />
        It is common to call a component with some <br />
        local state “uncontrolled”. For example,<br />
        the original Panel component with an isActive <br />
        state variable is uncontrolled because its <br />
        parent cannot influence whether the panel <br />
        is active or not.<br /><br /><br />

        In contrast, you might say a component is “controlled” <br />
        when the important information in it is driven by <br />
        props rather than its own local state. This lets <br />
        the parent component fully specify its behavior. <br />
        The final Panel component with the isActive prop <br />
        is controlled by the Accordion component.<br /><br /><br />

        Uncontrolled components are easier to use within <br />
        their parents because they require less configuration. <br />
        But they’re less flexible when you want to coordinate <br />
        them together. Controlled components are maximally <br />
        flexible, but they require the parent components <br />
        to fully configure them with props.<br /><br />

        In practice, “controlled” and “uncontrolled” aren’t <br />
        strict technical terms—each component usually has <br />
        some mix of both local state and props. However, <br />
        this is a useful way to talk about how components <br />
        are designed and what capabilities they offer.<br /><br /><br />

        When writing a component, consider which information <br />
        in it should be controlled (via props), and which <br />
        information should be uncontrolled (via state). <br />
        But you can always change your mind and refactor later.<br /><br />
      </p>
      <hr />
      <h1>3.3-Problem 4:Lifting state up</h1>
      <Accordion2 />
      <br />
      <h1>A single source of truth for each state </h1>
      <p>In a React application, many components will have their own state. <br />
        Some state may “live” close to the leaf components (components at <br />
        the bottom of the tree) like inputs. Other state may “live” closer <br />
        to the top of the app. For example, even client-side routing libraries <br />
        are usually implemented by storing the current route in the React state, <br />
        and passing it down by props!<br /><br /><br />

        For each unique piece of state, you will choose the component that “owns” it.<br />
        This principle is also known as having a “single source of truth”. It doesn’t <br />
        mean that all state lives in one place—but that for each piece of state, <br />
        there is a specific component that holds that piece of information. Instead <br />
        of duplicating shared state between components, lift it up to their common <br />
        shared parent, and pass it down to the children that need it.<br /><br />

        Your app will change as you work on it. It is common that you will move <br />
        state down or back up while you’re still figuring out where each piece of <br />
        the state “lives”. This is all part of the process!<br /><br />

        To see what this feels like in practice with a few more components, read Thinking in React.<br /><br />

        <h1>Recap</h1>  <br />
        When you want to coordinate two components, move their state to their common parent.<br />
        Then pass the information down through props from their common parent.<br />
        Finally, pass the event handlers down so that the children can change the parent’s state.<br />
        It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).<br /><br />

        Controlled and uncontrolled components <br />
        It is common to call a component with some local state “uncontrolled”. <br />
        For example, the original Panel component with an isActive state variable <br />
        is uncontrolled because its parent cannot influence whether the panel is active or not.<br /><br />

        In contrast, you might say a component is “controlled” when the important <br />
        information in it is driven by props rather than its own local state. <br />
        This lets the parent component fully specify its behavior. <br />
        The final Panel component with the isActive prop is controlled by the Accordion component.<br /><br /><br />

        Uncontrolled components are easier to use within their parents because <br />
        they require less configuration. But they’re less flexible when you want <br />
        to coordinate them together. Controlled components are maximally flexible, <br />
        but they require the parent components to fully configure them with props.<br /><br /><br />

        In practice, “controlled” and “uncontrolled” aren’t strict technical terms—each <br />
        component usually has some mix of both local state and props. However, this is <br />
        a useful way to talk about how components are designed and what capabilities they offer.<br /><br />

        When writing a component, consider which information in it should be controlled <br />
        (via props), and which information should be uncontrolled (via state). But you<br />
        can always change your mind and refactor later.<br /><br /><br />




      </p>
    </>
  )
}

export default App
