import { useEffect, useState } from "react"
import Post from "./Post"

function Posts(){
    const [posts,setPosts]=useState([]) //массив постов
    const [error,setError]=useState('') //будет хранить состояние ошибки
    const [isLoading,setIsLoading]=useState(true) //будем контролировать через эту переменную наш запрос в ожидании или завершился 
    
    //переписали с помощью async await 
    // написали функции IIFE так как async функция возвращает всегда промис, а в useEffect нужно возвращать либо андефайнед либо другую функцию которая очищает все в конце
    // поэтому async функцию вывели в другую функцию и вызываем немедленно(IIFE-immediatly invoked function expression)
    useEffect( ()=>{ 
        ;(async function (){
            try{
                const res= await fetch('https://jsonplaceholder.typicode.com/posts')
                const posts= await res.json()
                setPosts(posts)
            }catch(error){
                setError(error.message)
            }
            setIsLoading(false)
        })()
    }, [])

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => setPosts(json)) //если без ощшибок, то посты сохраняем и завершаем
    //         .catch((err)=>setError(err.message)) //если ошибка то значени ошибки сохраняем
    //         .finally(()=>setIsLoading(false)) //при завершении запроса (даже если успех или ошибка, когда пред.блоки выполнились) здесь меняем значение isLoading на false указывая что все завершено
    // },[])
    
    if(error){
        return <h1>Error: {error}</h1> //если ошибка то вернем ошибку и функция заканчивает свою работу
    }
    
    return (
    <>
        <h1>Posts</h1>
        <hr />
        {isLoading? (
        <h1>Loading...</h1> //пока грузится с сайта так будет, и если пришел ответ с сервера(как успех или ошибка) то компонент ререндерится и будет либо массив отображаться либо ошибка
        ) : (
            posts.map((post)=>{return <Post {...post} key={post.id} /> //передаем на компонент Пост свойства
        }))}
    </>
    )
}
export default Posts