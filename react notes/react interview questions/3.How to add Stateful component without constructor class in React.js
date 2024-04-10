// How to add Stateful component without constructor class in React?
// Generally, we set the initial state of the component inside 
// the constructor class and change the state using the setState 
// method. In React basically, we write HTML-looking code called JSX. 
// JSX is not a valid JavaScript code but to make the developer’s 
// life easier BABEL takes all the responsibility to convert JSX 
// into valid JavaScript code and allow the developers to write 
// code in HTML-looking syntax. Similarly, the state can’t be 
// initialized without constructor class, when we initialize state 
// outside constructor class again Babel read the syntax and 
// understands there is a need to create constructor inside 
// the class and do all the required hard works behind the scene. 
// This is called a class property proposal.

// Syntax: Initialize state outside the constructor class using syntax.

state = {
  stateName1: stateValue1,
  stateName2: stateName2,
  .......
    stateNamek: stateValuek
}
// Example 1: This example illustrates how to class property 
// proposal to initialize state without constructor 

// index.js:


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.querySelector('#root'))

Filename – App.js


import React, { Component } from 'react'

class App extends Component {

  // The class property proposal
  // The state initialization without
  // constructor class
  state = { msg: 'Hi, There!' }

  handleClick() {
    // Changing state
    this.setState({ msg: 'Welcome to the React world!' })
  }

  render() {
    return (
      <div>
        <h2>Message :</h2>
        <p>{this.state.msg}</p>
        {/* Set click handler */}
        <button onClick={() => this.handleClick()}>
          Click here!
        </button>
      </div>
    )
  }
}

export default App

// Output:



// Example 2: This example illustrates how to class 
// property proposal to initialize state without constructor

// index.js:


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.querySelector('#root'))
App.js:


import React, { Component } from 'react'

class App extends Component {
  static defaultProps = {
    courseContent: [
      'JSX', 'React Props', 'React State',
      'React Lifecycle Methods', 'React Event Handlers',
      'React Router', 'React Hooks', 'Readux',
      'React Context'
    ]
  }
  // The class property proposal
  // The state initialization without 
  // constructor class
  state = { msg: 'React Course', content: '' }

  renderContent() {
    return (
      <ul>
        {this.props.courseContent.map(content => (
          <li>{content}</li>
        ))}
      </ul>
    )
  }
  handleClick() {
    //changing state
    this.setState({
      msg: 'Course Content',
      content: this.renderContent()
    })
  }
  render() {
    return (
      <div>
        <h2>Message :</h2>
        <p>{this.state.msg}</p>

        <p>{this.state.content}</p>
        {/* set click handler */}
        <button onClick={() => this.handleClick()}>
          Click here to know contents!
        </button>
      </div>
    )
  }
}

export default App
// Output: 




// “This course was packed with amazing and well - organized content! The project - based approach of this course made it even better to understand concepts faster.Also the instructor in the live classes is really good and knowledgeable.”- Tejas | Deutsche Bank