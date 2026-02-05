import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task:" sample task", id: uuidv4() , isDone :false }]);
    let [newTodo, setNewTodo] = useState ("");

    let addNewTask =() =>{
        setTodos((prevTodos) =>{
            return [...prevTodos, { task : newTodo , id:uuidv4() , isDone :false }];
        }); // uuidv4 use to  give unique key  to  the list item
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value );
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos)=> todos.filter((prevTodos) => prevTodos.id != id)); // to delete task foem 
    };


    // let upperCaseAll = () => {
        let markAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                ...todo,
                // task: todo.task.toUpperCase(),
                isDone:true,
            };

            })
        );
    };


    let markAsDone =(id) => {
         setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id ){
                     return {
                    ...todo,
                    // task: todo.task.toUpperCase(),
                    isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );

    };


    return (
    <div className="todo-container">
        
        <div className="todo-controls">
            <input className="todo-input" placeholder="Add a task" 
            value={newTodo}
             onChange={updateTodoValue} />
            <button className="btn btn-add" onClick ={addNewTask}>Add</button>
        </div>

        <h4>Todo List</h4>
        <ul>
            {todos.map((todo) =>(
                <li key ={todo.id} className="todo-item">
                    <span className={"todo-task" + (todo.isDone ? " done" : "")}>
                        {todo.task}
                        </span>
                    <div className="todo-buttons">
                        <button className="btn btn-delete" onClick= {() => deleteTodo(todo.id)}>Delete</button>  
                         <button className="btn btn-mark" onClick= {() => markAsDone(todo.id)}>Done </button>  

                        {/* here arrow fun create copy of method with some arrgiment , not execute method  */}
                    </div>
                    </li>
            ))}
        </ul>

        <button className="btn btn-mark-all" onClick ={ markAllDone}>Mark All Done</button>
       
        </div>
        );
}