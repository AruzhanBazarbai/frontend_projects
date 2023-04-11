import './App.css';
import Wrapper from './components/Wrapper';
// Внутри компонента Wrapper можем писать другие JSX коды и React это передает компоненту Wrapper как свойство children
// значение которого можем отобразить через Wrapper в любом месте
function App() {
  return (<div className="App">
    <Wrapper color="pink">
      <h1>Text inside the Wrapper</h1>
      <button>Click me</button>
    </Wrapper>
    <Wrapper color="blue">
      <h1>Catch me if you can mister Holms</h1>
      
    </Wrapper>
    <Wrapper color="green">
      <h1>-Все еще хочешь покончить жизнь самоубийством???</h1>
      <h1>-Да</h1>
      <h1>-Пф, даже не хочешь скрыть это</h1>
      <h1>-Но на этот раз ищу молодую особу кто готова со мной покончить жизнь самоубийством</h1>
      <h1>-Ладно, в следующий раз приведу с собой девушку готовую убить себя</h1>
      <h1>-ЧУЯЯ Я НЕ ЗНАЛ ЧТО ТЫ ТАКОЙ ХоРоШиЙ</h1>
    </Wrapper>
  </div>)
}

export default App;
