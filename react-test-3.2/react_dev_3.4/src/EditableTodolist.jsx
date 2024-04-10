import React from 'react'
import { useState } from 'react'

let list = [
    {
        "id": 1,
        "task": "Buy groceries",
        "completed": false
    },
    {
        "id": 2,
        "task": "Walk the dog",
        "completed": true
    },
    {
        "id": 3,
        "task": "Finish project",
        "completed": false
    }
]

const App = () => {
    const [todolist, settodolist] = useState(list)

    function deleteTodo(id) {
        let filteredTodo = todolist.filter(todo => todo.id !== id)
        return settodolist(filteredTodo)
    }
    function editTodo(newTask, id) {
        return settodolist(todolist.map(todo => {
            if (todo.id === id) {
                return { ...todo, "task": newTask };
            } else {
                return todo;
            }
        }))
    }
    return (
        <>
            <h1>an editable todo list</h1>
            {
                todolist.map(
                    todo => <TaskList
                        todo={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            }
        </>
    );
}
function TaskList({ todo, deleteTodo, editTodo }) {
    return (
        <>
            <ul>
                <li key={todo.id} >
                    <Task todo={todo} editTodo={editTodo} />
                    <button onClick={() => { deleteTodo(todo.id) }} >Delete</button>
                </li>
            </ul>
        </>
    )
}
// Uncaught Error: Objects are not valid as 
// a React child (found: object with keys
//  {id, task, completed}). If you meant 
// to render a collection of children, 
// use an array instead.

// I see that you’re working with 
// a React application and you’re encountering 
// an error related to rendering objects as children. 
// This error typically occurs when you try to render 
// an object directly inside a JSX expression. In React, 
// you can only render arrays or strings as children.

// Looking at your App.js file, I noticed that the error 
// is occurring in the Task component where the todo object 
// is being rendered directly. Instead, you should destructure 
// the todo object to access its properties.

function Task({ todo, editTodo }) {
    const [isediting, setisediting] = useState(false)
    const [editvalue, seteditvalue] = useState(todo.task)

    return (
        <>
            {
                isediting ?
                    <>
                        <input type="text"
                            value={editvalue}
                            onChange={(e) => { seteditvalue(e.target.value) }}
                        />
                        <button onClick={(e) => { setisediting(!isediting); editTodo(editvalue, todo.id) }} >Save</button>
                    </>
                    :
                    <>
                        {todo.task}  {/* Here is the change. Instead of rendering the todo object, render the task property of the todo object */}
                        <button onClick={() => { setisediting(!isediting) }}>Edit</button>
                    </>
            }
        </>
    )
}


export default App