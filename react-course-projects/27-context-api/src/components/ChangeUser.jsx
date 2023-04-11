import { useContext } from "react"
import UserContext from "../context/UserContext"

const ChangeUser = () => {
  const {user, setUser}=useContext(UserContext)
  return <button onClick={()=>setUser((user==='Bogdan')?'Alice':'Bogdan')}>Change user</button>


}

export default ChangeUser