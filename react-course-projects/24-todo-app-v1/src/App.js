import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {

  const [todos,setTodos]=useState([])

  const addTodoHandler=(todo)=>{
    setTodos([...todos,todo])
    console.log(JSON.stringify(todos))
  }

  const deleteTodoHandler=(index)=>{
    setTodos(todos.filter((_,i)=>i!==index))
  }

  return (<div className="App">
    <h1>Todo App</h1>
    <TodoForm addTodo={addTodoHandler} />
    <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
  </div>)
}

export default App;
