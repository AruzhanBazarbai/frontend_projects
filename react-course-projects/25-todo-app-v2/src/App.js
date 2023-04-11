// https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosAction from './components/Todos/TodosAction';

function App() {

  const [todos,setTodos]=useState([])

  const addTodoHandler=(text)=>{
    const todo={
      id:uuidv4(), //генерирует новый уникальный айди каждый раз
      isCompleted:false,
      text
    }
    setTodos([...todos,todo])
    console.log(JSON.stringify(todos))
  }

  const deleteTodoHandler=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  const toggleTodoHandler=(id)=>{
    setTodos(todos.map(todo=>{
      return todo.id===id
      ? {...todo,isCompleted: !todo.isCompleted}
      : {...todo}
    }))

  }

  const resetTodosHandler=()=>{
    setTodos([])
  }

  const clearCompletedTodosHandler=()=>{
    setTodos(todos.filter((todo)=>!todo.isCompleted))
  }

  const completedTodosCount=todos.filter((todo)=>todo.isCompleted).length

  return (<div className="App">
    <h1>Todo App</h1>
    <TodoForm addTodo={addTodoHandler} />
    {!!todos.length && <TodosAction resetTodos={resetTodosHandler} clearCompletedTodos={clearCompletedTodosHandler} completedTodosExist={completedTodosCount}/>}
    <TodoList todos={todos} deleteTodo={deleteTodoHandler}  toggleTodo={toggleTodoHandler}/>
    {completedTodosCount>0 && <h2>{`You have completed ${completedTodosCount} ${(completedTodosCount>1)?'todos':'todo'}`}</h2>}
  </div>)
}

export default App;
