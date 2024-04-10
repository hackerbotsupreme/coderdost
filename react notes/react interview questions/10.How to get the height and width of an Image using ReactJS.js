// How to get the height and width of an Image using ReactJS?

// In reacting whatever we write that looks like HTML is 
// not pure HTML actually. All the HTML looking stuff are 
// JSX, Behind the scene, they are converted to vanilla 
// JavaScript using babel. These all work in this way to 
// make the developers’ life easier. Since JSX are not HTML 
// that’s why we do have any direct reference to the HTML 
// elements and that’s why we can’t direct fetch properties
//  of any HTML element. To fetch the elements’ property,
//  React gives something called as ‘ref’. Using ref we 
// can create a direct reference to any HTML elements and 
// get controlled over HTML elements properties. Here we 
// use the ‘ref’ system to fetch image height and width.

// Example 1: This example illustrates how to fetch the
//  current height and width of the image.

// index.js:
 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
  
ReactDOM.render(<App />, document.querySelector('#root'))
// App.js:

 
import React, { Component } from 'react'
class App extends Component{ 
  constructor(props){  
    super(props)  
    // Initialize count state  
    this.state = {show : false} 
    // Bind context of 'this' 
    this.handleClick = this.handleClick.bind(this) 
    // Create reference of DOM object 
    this.imgRef = React.createRef() 
  }  
  renderDetails() { 
    return this.state.show ?  
      // Accessing image details using imgRef 
      <div>      
<p><strong>Height : </strong>  
        {this.imgRef.current.clientHeight}px</p> 
<p><strong>Width : </strong>  
        {this.imgRef.current.clientWidth}px</p> 
      </div> : null
  } 
  handleClick(){ 
    // Update state value 
    this.setState({ 
      show : true
    }) 
  } 
  render(){ 
    return(  
      <div>  
        <h3>GeeksforGeeks</h3> 
        {/* Assign reference to DOM element     */} 
        <img ref={this.imgRef} src= 
'https://media.geeksforgeeks.org/wp-content/uploads/20200617121258/gfg-image2-300x177.png' alt='gfg' /> 
        <div> 
          <button onClick={this.handleClick}>Get image details</button> 
        </div> 
        {this.renderDetails()} 
      </div>     
    )   
  }  
} 
export default App
// Output :


// Example 2: 

// index.js:
 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
  
ReactDOM.render(<App />, document.querySelector('#root'))
// App.js:
 
import React, { Component } from 'react'
class App extends Component{ 
  constructor(props){  
    super(props)  
    // Initialize count state  
    this.state = {height:null, width:null, isIncrease:false} 
    // Bind context of 'this' 
    this.handleClick = this.handleClick.bind(this) 
    // Create reference of DOM object 
    this.imgRef = React.createRef() 
  }  
  
  handleClick(){ 
    // Fetching current height and width 
    const height = this.imgRef.current.clientHeight 
    const width = this.imgRef.current.clientWidth 
    alert(` 
      Height : ${height} 
      Width : ${width} 
    `) 
  } 
  render(){ 
    return(  
      <div>  
        <h3>GeeksforGeeks</h3> 
        {/* Assign reference to DOM element     */} 
        <img ref={this.imgRef} src= 
'https://media.geeksforgeeks.org/wp-content/uploads/20200819170816/colorfulbulmaheroelements-300x154.png' alt='gfg' /> 
        <div> 
          <button onClick={this.handleClick}> 
            Fetch dimension 
          </button> 
        </div> 
      </div>     
    )   
  }  
} 
export default App
// Output :


// “This course was packed with amazing and well-organized content! The project-based approach of this course made it even better to understand concepts faster. Also the instructor in the live classes is really good and knowledgeable.”- Tejas | Deutsche Bank

// With our revamped Full Stack Development Program: master Node.js and React that enables you to create dynamic web applications.

// So get ready for salary hike only with our Full Stack Development Course.


// Get paid for your published articles and stand a chance to win tablet, smartwatch and exclusive GfG goodies! Submit your entries in Dev Scripter 2024 today.