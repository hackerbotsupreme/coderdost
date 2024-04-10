// How to change state continuously after a certain amount of time in React?

// To change a state continuously after a certain 
// amount of time is required in a few cases for 
// the toggling. First, make a function that is 
// responsible for changing the state of the component. 
// Then call the function from the constructor method 
// for the first time.  Use the set interval method 
// inside the function to change the state after 
// a fixed amount of time. setInterval method takes 
// two parameter callback and time. The callback 
// function is called again and again after that 
// given amount of time.  Use the setState method 
// to change the state of the component.

timing(){
  setInterval(() => {
    this.setState({
      stateName : new-state-value
    })
  }, time)
}
// Example 1: This example illustrates how to change 
// the state continuously after a certain amount of time.

// index.js: 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
  
ReactDOM.render(<App />, document.querySelector('#root'))
// App.js:
import React, { Component } from 'react'
  
class App extends Component { 
  constructor(props){ 
    super(props) 
    this.state = {Number : 0} 
    this.makeTimer() 
  } 
  makeTimer(){ 
    setInterval(() => { 
      let rand = Math.floor(Math.random() * 10) + 1 
        this.setState({number: rand}) 
    }, 1000) 
  } 
  render(){ 
    return ( 
      <div> 
        <h1> 
          Random Number :  
          {this.state.number} 
        </h1> 
      </div> 
    ) 
  } 
} 
  
export default App
// Output: 


// “This course was packed with amazing and well-organized content! The project-based approach of this course made it even better to understand concepts faster. Also the instructor in the live classes is really good and knowledgeable.”- Tejas | Deutsche Bank

// With our revamped Full Stack Development Program: master Node.js and React that enables you to create dynamic web applications.

// So get ready for salary hike only with our Full Stack Development Course.


// Get paid for your published articles and stand a chance to win tablet, smartwatch and exclusive GfG goodies! Submit your entries in Dev Scripter 2024 today.