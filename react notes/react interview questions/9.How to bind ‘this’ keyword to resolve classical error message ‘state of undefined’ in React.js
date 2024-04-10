// How to bind ‘this’ keyword to resolve classical error message ‘state of undefined’ in React?

// The ‘this’ keyword in JavaScript is always being 
// somewhat tough to understand for learners. Basically 
// this keyword inside a function is determined by looking
//  at how the method is actually invoked. Usually in JavaScript, 
// we invoked the method using syntax obj.method(). In this case, 
// the value of ‘this’ keyword inside the method function is 
// the object ‘obj’. How we invoked the method is all root of 
// the unpredictable value of ‘this’ often.

// In React when we use event handlers we basically give 
// a reference of a function to that event handler and when 
// that event occurs that function gets invoked, here’s a catch, 
// it’s invoked at some point of time not immediately, and when 
// its invoked, it’s invoked as its own, there is now any components 
// instance object using which it gets invoked and that’s why 
// the value of ‘this’ keyword inside the method is undefined. 
// To resolve this issue we usually bind the value of ‘this’ 
// keyword using the JavaScript bind method.

// Error Message:
// Example 1: 

// index.js :

 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
 
ReactDOM.render(<App />, document.querySelector('#root'))
// App.js :
import React, { Component } from 'react'

class App extends Component {
  static defaultProps = {
    courseContent : [
      'JSX', 'React Props', 'React State', 
      'React Lifecycle Methods',
      'React Event Handlers', 'React Router', 
      'React Hooks', 'Readux',
      'React Context'
    ]
  }   
  constructor(props){
    super(props)  
    // Set initial state
    this.state = {msg : 'React Course', content:''}
    // Binding this keyword of method handleClick
    this.handleClick = this.handleClick.bind(this)
  }
  renderContent(){
    return (
      <ul>
        {this.props.courseContent.map(content => (
          <li>{content}</li>
        ))}
      </ul>
    ) 
  } 
  handleClick(){ 
    // Changing state
    this.setState({
      msg : 'Course Content',
      content : this.renderContent()
    })
  }
  render(){
    // Reference of handleClick, called at some 
    // point of time on its own gets called like 
    // handleClick(), thats why this inside 
    // handleClick is undefined
    const button = !this.state.content && 
    <button onClick={this.handleClick}>
       Click here to know contents!
    </button>
    return (
      <div>
        <h2>Message :</h2>
<p>{this.state.msg}</p>
<p>{this.state.content}</p>
        {button}
      </div>
    )
  }
}
export default App
// Output :


// Example 2:
// index.js :
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
 
ReactDOM.render(<App />, document.querySelector('#root'))
// App.js :
 
import React from 'react'
import TodoList from './TodoList' 
const App = () => {
  return <TodoList />
}
export default App
// TodoList.js :
 
import React, { Component } from 'react'
import TodoForm from './TodoForm'
 
class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = { todos : [] }
    // Binding this keyword of method createTodo
    this.createTodo = this.createTodo.bind(this)
    // Binding this keyword of method renderTodo
    this.renderTodos = this.renderTodos.bind(this)
  }
  createTodo(todo){
    this.setState({
      todos : [...this.state.todos, todo]
    })
  }
  renderTodos(){
    const todos = this.state.todos.map(todo => (
      <li key={todo}>
        {todo.task}
      </li>
    ))
    return <ul>{todos}</ul>
  }
  render(){
    return(
      <div>
        <h1>Todo List</h1>
        {this.renderTodos()}
        <TodoForm create={this.createTodo}/>
      </div>
    )
  }
}
export default TodoList
// TodoForm.js :
 
import React, { Component } from 'react'
 
class TodoForm extends Component{
  constructor(props){
    super(props)
    this.state = { task:'' }
    // Binding this keyword of method handleChange
    this.handleChange = this.handleChange.bind(this)
    // Binding this keyword of method handleSubmit
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    this.props.create(this.state)
    this.setState({ task : '' })
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='task'>New Todo</label>
          <input 
            name='task'
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add New Todo</button>
        </div>
      </form>
    )
  }
}
export default TodoForm
// Output :


// “This course was packed with amazing and well-organized content! The project-based approach of this course made it even better to understand concepts faster. Also the instructor in the live classes is really good and knowledgeable.”- Tejas | Deutsche Bank

// With our revamped Full Stack Development Program: master Node.js and React that enables you to create dynamic web applications.

// So get ready for salary hike only with our Full Stack Development Course.


// Maximize your earnings for your published articles in Dev Scripter 2024! Showcase expertise, gain recognition & get extra compensation while elevating your tech profile.