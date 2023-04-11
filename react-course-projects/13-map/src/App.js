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
  const texts=["CLick me", "Don't click","111111","Fuck you","Fuck ypu again"]

  return (
    <div className="App" >
      <Counter cnt={count} />
      {texts.map((element,ind) => {
        return <Button onClick={incrementCount} text={element} key={ind} />
      })}
      {/* {
        [
          <Button onClick={incrementCount} text={texts[0]} />,
          <Button onClick={incrementCount} text={texts[1]} />,
          <Button onClick={incrementCount} text={texts[2]} />,
          <Button onClick={incrementCount} text={texts[3]} />,
          <Button onClick={incrementCount} text={texts[4]} />
        ]
      } */}
    </div>
  )
}

export default App;
