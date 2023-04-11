import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo,setTodo]=useState(null)
  // useEffect- при асинхронных действии
  // если не использовать  useEffect то Реакт при ререндиринге компоненте, когда вызвался setTodo, будет заново обращшаться
  // k fetch.
  // Поэтому используем useEffect, и передаем пустой массив (список зависимостей) чтобы это выполнялось только однократно при начальном рендеринге компонента

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => setTodo(json))
  // },[todo])
  // если в список зависимостей передадим какую то переменную, то при изменении его состоянии callback функция в useEffect будет заново вызываться
  // но при передаче объекта, так как там ссылка каждый раз меняется хоть и контент одинаковый, то колбэк функция в useEfect опять будет вызываться бесконечно раз
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setTodo(json))
  },[])
  // отобразим контент туду только если туду не нулл
  return (<div className="App">
    {todo && <h1>{todo.title}</h1>} 
  </div>)
}

export default App;
