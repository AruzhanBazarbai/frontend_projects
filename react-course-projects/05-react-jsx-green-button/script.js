const App=({initialButtonText,initialClassesList})=>{
    const [buttonText, setButtonText]=React.useState(initialButtonText)
    //    "Click me"   function- с помощью которого указываем новое состояние buttonText когда хотим поменять
    const [classesList,setClassesList]=React.useState(initialClassesList)
    const f=()=>{
        setButtonText("Hello from React")
        setClassesList("green-btn")

    }
    return (
        <div className="app">
            <button className={classesList} onClick={f}>{buttonText}</button>
        </div>
    )
}


const container=document.getElementById('app')
const root=ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me please" initialClassesList=""/>)