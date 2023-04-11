import { useState } from 'react';
import './App.css';
import ChangeUser from './components/ChangeUser';
import User from './components/User';
import UserContext from './context/UserContext';

function App() {
  const [user,setUser]=useState('Aruzhan')
  return (
  <UserContext.Provider value={{user,setUser}}>
    <div className="App">
      <User />
      <ChangeUser />
    </div>
  </UserContext.Provider>
  )
}

export default App;
