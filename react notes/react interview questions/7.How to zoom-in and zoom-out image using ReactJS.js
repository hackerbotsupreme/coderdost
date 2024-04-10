// How to zoom-in and zoom-out image using ReactJS?

// React is a JavaScript library for building user interfaces. 
// React makes it painless to create interactive UIs. Design 
// simple views for each state in your application, and React 
// will efficiently update and render just the right components
//  when your data changes.

// In ReactJS whatever we write that looks like HTML is not 
// pure HTML actually. All the HTML looking stuff are JSX, 
// Behind the scene, they are converted to vanilla JavaScript 
// using babel. These all work in this way to make the developer’s 
// life easier. Since JSX are not HTML that’s why we do have any 
// direct reference to the HTML elements and that’s why we can’t 
// direct fetch properties of any HTML element. To fetch the 
// elements’ property, React gives something called as ‘ref’. 
// Using ref we can create a direct reference to any HTML elements 
// and get controlled over HTML elements properties. Here we use 
// the ‘ref’ system to fetch image height and width. After getting 
// image height and width we set a click handler and increase 
// the dimension of the image which gets faded into the DOM property.

// Example: This example illustrates how to zoom an image using react

// index.js:
 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
 
ReactDOM.render(<App />, document.querySelector('#root'))
App.js:
 
import React, { Component } from 'react'
class App extends Component{
  constructor(props){ 
    super(props) 
     
    // Initializing states
    this.state = {height:null, width:null}
     
    // Bind context of 'this'
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
     
    // Create reference of DOM object
    this.imgRef = React.createRef()
  } 
 
  componentDidMount(){
    // Saving initial dimension of image as class properties
    this.initialHeight = this.imgRef.current.clientHeight
    this.initialWidth = this.imgRef.current.clientWidth
  }
 
  // Event handler callback for zoom in
  handleZoomIn(){
   
    // Fetching current height and width
    const height = this.imgRef.current.clientHeight
    const width = this.imgRef.current.clientWidth
     
    // Increase dimension(Zooming)
    this.setState({
      height : height + 10,
      width : width + 10,
    })  
  }
 
  // Event handler callback zoom out
  handleZoomOut(){
   
    // Assigning original height and width
    this.setState({
      height : this.initialHeight,
      width : this.initialWidth,
    })
  }
 
  render(){
    // Assign current height and width to the image
    const imgStyle = { height : this.state.height, width: this.state.width}
    return( 
      <div>
        <h2>GeeksforGeeks</h2>
        {/* Assign reference to DOM element     */}
        <img style={imgStyle} ref={this.imgRef} src=
'https://media.geeksforgeeks.org/wp-content/uploads/20200923125643/download.png' alt='gfg' />
        <div>
          <button onClick={this.handleZoomIn}>Zoom In</button>
          <button onClick={this.handleZoomOut}>Zoom Out</button>
        </div>
      </div>    
    )  
  } 
}
export default App