function Login(){
    // обрабатывем  неконтролируемые инпуты
    // неконтролируемые инпуты - потому что у полей для ввода мы не контролируем состояние, т.е. берем значение только после сабмита
    function handleFormSubmit(event){
        event.preventDefault() //чтобы не перенаправляло в другую страницу
        const userData = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        console.log(userData)
        alert(JSON.stringify(userData))
    }
    return (
        <>
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <button type="submit">Login</button>
        </form>
        </>
    )
}
export default Login