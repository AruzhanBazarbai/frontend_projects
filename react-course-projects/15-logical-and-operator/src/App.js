import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
// меняем состояние  в родительском компоненте, то есть свойство через дочерний компонент
function App() {
  const [count,setCount]= useState(0)

  const incrementCount=()=>{
    setCount(count+1)
  }
  const resetCount=()=>{
    setCount(0)
  }
  const buttonStyle={backgroundColor:'lightgreen'}

  return (
    <div className="App" >
      <Counter cnt={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {!!count && (<div>
        <button style={buttonStyle} onClick={resetCount} >Reset</button>
      </div>)}
      
    </div>
  )
}

export default App;
