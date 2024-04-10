// How to handle states of mutable data types?

// Mutable parameters are those whose value can 
// be modified within a function to which they 
// are passed as a parameter. It means that when
//  a parameter is passed to the function using 
// the caller function, then its value is bound 
// to the parameter in the called function, which
//  means any changes done to the value in that 
// function will also be reflected in the parameter
//  of the caller function.

// The state is mutable in react components. 
// To make the React applications interactive 
// we almost use state in every react component. 
// State is initialized with some value and based 
// on user interaction with the application we 
// update the state of the component at some point
//  of time using the setState method. If states of 
// the React component initialized with an array or 
// JavaScript object, It is always good and recommended
//  practice to not change the state by modifying 
// the old array or object itself but use some build-in
//  JavaScript method like a map, filter, or use 
// new JavaScript syntax like spread to return 
// the newly updated state as a whole. 

// Example 1: In this example, we will create a 
// todo app, where the user will interact and 
// store the things he or she wants to do, 
// which is basically a mutable state.

// index.js:

 
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
    this.createTodo = this.createTodo.bind(this) 
    this.renderTodos = this.renderTodos.bind(this) 
  } 
  createTodo(todo){ 
    this.setState({   
      // Changing state with returning new list of todos 
      // as a whole not modyfying the old list of todos 
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
    this.handleChange = this.handleChange.bind(this) 
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
// Output:


// Example 2: In this example, we will remove 
// items from the created listed, to make 
// it blank which is also a mutable state.

// index.js :
 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
  
ReactDOM.render(<App />, document.querySelector('#root'))
// App.js :
 
import React from 'react'
import ItemsList from './ItemsList'
  
const App = (props) => { 
  return <ItemsList items={props.items} /> 
} 
  
App.defaultProps = { 
  items : [ 
    { 
      id : 1, 
      label : 'First Item'
    }, 
    { 
      id : 2, 
      label : 'Second Item'
    }, 
    { 
      id : 3, 
      label : 'Third Item'
    }, 
    { 
      id : 4, 
      label : 'Fourth Item'
    }, 
    { 
      id : 5, 
      label : 'Fifth Item'
    } 
  ] 
} 
  
export default App
// ItemsList.js :
 
import React, { Component } from 'react'
import Item from './Item'
  
class TodoList extends Component{ 
  constructor(props){ 
    super(props) 
    this.state = { items : this.props.items} 
    this.renderItems = this.renderItems.bind(this) 
    this.removeItem = this.removeItem.bind(this) 
  }  
  
  removeItem(target){ 
    this.setState({ 
      // Changing state with returning new list of  
      // todos as a whole not modyfying the old  
      // list of todos 
      items : this.state.items.filter(item => { 
        return item.id !== target.id 
      }) 
    }) 
  } 
  
  renderItems(){ 
    const items = this.state.items.map(item => ( 
      <Item item={item} remove={this.removeItem} /> 
    )) 
    return <ul>{items}</ul> 
  } 
  render(){ 
    return( 
      <div> 
        <h1>Items List</h1> 
        {this.renderItems()} 
      </div> 
    ) 
  } 
} 
  
export default TodoList
// Item.js :
 
import React from 'react'
const Item = ({item, remove}) => { 
  const handleClick = () => { 
    remove(item) 
  } 
  return( 
    <li> 
      {item.label} 
      <button onClick={handleClick}> X </button> 
    </li> 
  ) 
} 
  
export default Item
// Output :


// “This course was packed with amazing and well-organized content! The project-based approach of this course made it even better to understand concepts faster. Also the instructor in the live classes is really good and knowledgeable.”- Tejas | Deutsche Bank

// With our revamped Full Stack Development Program: master Node.js and React that enables you to create dynamic web applications.

// So get ready for salary hike only with our Full Stack Development Course.