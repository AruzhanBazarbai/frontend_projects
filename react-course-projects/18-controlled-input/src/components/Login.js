import { useState } from "react"

function Login(){
    // обрабатывем  kонтролируемые инпуты
    // то есть связываем переменные с состояниями инпута, постоянно остлеживая состояние инпута
    // отслежимваем через value и onchange а не нэйм как в неконтролируемом

    // состояния всех инпутов храним в одном объекте
    const [data, setData]=useState({username:'',password:''})

    function handleFormSubmit(event){
        event.preventDefault() //чтобы не перенаправляло в другую страницу
        console.log(data)
        alert(JSON.stringify(data))
    }
    function handleInputChange(event,name){
        // меняем состояние инпутов, вывели в отд функцию
        setData({...data,[name]:event.target.value})

    }
    return (
        <>
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
            <label>
                Username:
                <input type="text" value={data.username} onChange={(event)=>handleInputChange(event,'username')}  />
            </label>
            <label>
                Password:
                <input type="password" value={data.password} onChange={(event)=>handleInputChange(event,'password')} />
            </label>
            <button type="submit">Login</button>
        </form>
        </>
    )
}
export default Login

// value- значение инпута
// onChange - меняет состояние инпута когда юзер меняет там, тем самым постоянное отслеживаем состояние