// How to handle multiple input field in react form with a single function?

// There are two types of form, one is uncontrolled form
//  and another one is controlled form. In uncontrolled 
// form values of the input field stored in DOM and 
// whenever we want to use the values we have to reach 
// the DOM and pull out the values of each input field. 
// Now in control, we do not allow to store the value in 
// DOM but values are store as a state of react component 
// and updated dynamically with user interaction. For this,
//  we use the event handler onChange and executes a callback 
// that updates the state values.  Now for a single input field, 
// we use one handleChange callback but if the input fields
//  are multiple then we have to create multiple handleChange 
// callbacks to update the state of each input field. Fortunately, 
// this is not the case. JavaScript provides us with ES2015 modern 
// syntax to execute this kind of complicated work in a simple manner.

// ES2015 introduced the ability to create objects with 
// dynamic keys based on JavaScript expression called as
//  computed property names. We use computed property names
//  to update the state of all the input fields based on 
// the name attribute of inputs. 

// Syntax : 

const obj = {
   : value
}
// Example 1: This example shows how to handle 
// multiple form input fields with a single 
// handleChange function.

// index.js:


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.querySelector('#root'))
// App.js : App component  renders 
// single Form component only
import React from 'react'
import Form from './Form'

//Functional component 
const App = () => {
  //render single App component 
  return (
    <Form />
  )
}

export default App
// Form.js: Form component renders a form and 
// contains all the logic to make it controlled 
// form and submitting the form.

import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', name: '', age: null, address: '', phoneNo: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // Form submitting logic, prevent default page refresh  
  handleSubmit(event) {
    const { email, name, age, address, phoneNo } = this.state
    event.preventDefault()
    alert(` 
      ____Your Details____\n 
      Email : ${email} 
      Name : ${name} 
      Age : ${age} 
      Address : ${address} 
      Phone No : ${phoneNo} 
    `)
  }

  // Method causes to store all the values of the  
  // input field in react state single method handle  
  // input changes of all the input field using ES6  
  // javascript feature computed property names 
  handleChange(event) {
    this.setState({
      // Computed property names 
      // keys of the objects are computed dynamically 
      [event.target.name]: event.target.value
    })
  }

  // Return a controlled form i.e. values of the  
  // input field not stored in DOM values are exist  
  // in react component itself as state 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            name='name'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input
            name='age'
            placeholder='Age'
            value={this.state.age}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <input
            name='address'
            placeholder='Address'
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='phoneNo'>Phone Number</label>
          <input
            name='phoneNo'
            placeholder='Phone No'
            value={this.state.phoneNo}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Create Account</button>
        </div>
      </form>
    )
  }
}

export default Form
// Output :


// Example 2 : 
// index.js:
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.querySelector('#root'))
// App.js: App component renders a single BoxList component only
import React from 'react';
import BoxList from './BoxList'

const App = () => {
  //App renders single BoxList component 
  return (
    <BoxList />
  )
}

export default App
// BoxList.js: It contains all the behind the logic. 
// It is a stateful component. There is a single state 
// that contains an array of boxes. We map over each 
// box of state ‘boxes’ and for eachbox we render a
//  ‘Box’ component. BoxList component also contains methods 
// create that is responsible to create box based on given 
// properties. BoxComponent also renders ‘NewBoxForm’  that 
// shows a form to the user to enter the height, width, and 
// background color of the box they want to create. BoxList 
// component passes the create a method to NewBoxForm component 
// as a prop to each ‘Box’ component as a prop. These components 
// are then invoked the given methods at right time according 
// to the user interactions with the app.


import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import NewBoxForm from './NewBoxForm'
import Box from './Box'

class BoxList extends Component {
  constructor(props) {
    super(props)
    // Single state boxes initialized with empty array 
    // it contains all the created boxes and their properties 
    this.state = { boxes: [] }
    this.createBox = this.createBox.bind(this)
  }
  // create new box and added it to boxes state 
  createBox(attrs) {
    const newBox = { ...attrs, id: uuid() }
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }
  // Map over each box in boxes state and render a  
  // Box component for each passing its property as 
  // props and method is also passed as props which gets  
  // called by the handler callback of Box component 
  renderBoxes() {
    return this.state.boxes.map(box => (
      <Box key={box.id} attrs={box} />
    ))
  }
  render() {
    return (
      <div>
        <h1>Make New Color Boxes!</h1>
        {/* component to create form   
            and passes create method as */}
        <NewBoxForm create={this.createBox} />
        {this.renderBoxes()}
      </div>
    )
  }
}

export default BoxList
// NewBoxForm.js: This component is responsible to show 
// the form to users to enter the properties of the box 
// they wanted to create. The form is a controlled form 
// i.e. it stores the values of the input field in states 
// and updates it in real-time according to user interaction 
// with input fields of the form. It invoked handle submit 
// callback after submitting the form which in return invoke 
// the create method of BoxList component passing the form 
// values to create the box.

import React, { Component } from 'react'

class NewBoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = { height: 0, width: 0, bc: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // Form submitting logic, prevent default page  
  // refresh and call create method of BoxList 
  // component to create new box 
  handleSubmit(event) {
    event.preventDefault()
    this.props.create(this.state)
    this.setState({ height: 0, width: 0, bc: '' })
  }
  // Method causes to store all the values of the  
  // input field in react state using single method  
  // handleChanges of all the input field 
  // using ES6 javascript feature computed property names 
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  // return a form using which we add box properties  
  // to create Boxes. It is controlled form i.e. values  
  // of the input field not stored in DOM values are exist 
  // in react component itself as state 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='height'>Height</label>
          <input
            name='height'
            placeholder='Height'
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='width'>Width</label>
          <input
            name='width'
            placeholder='Width'
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='bc'>Background Color</label>
          <input
            name='bc'
            placeholder='Background Color'
            value={this.state.bc}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Add a new Box!</button>
        </div>
      </form>
    )
  }
}

export default NewBoxForm
// Box.js: It is responsible to show each box
//  with its proper height, width, color set in the background. 
import React, { Component } from 'react'

class Box extends Component {
  render() {
    const { height, width, bc } = this.props.attrs
    const style = { width: `${width}em`, height: `${height}em`, backgroundColor: bc }
    return (
      <div style={style} />
    )
  }
}
export default Box
// Output :


// “This course was packed with amazing and well-organized content! The project-based approach of this course made it even better to understand concepts faster. Also the instructor in the live classes is really good and knowledgeable.”- Tejas | Deutsche Bank

// With our revamped Full Stack Development Program: master Node.js and React that enables you to create dynamic web applications.

// So get ready for salary hike only with our Full Stack Development Course.