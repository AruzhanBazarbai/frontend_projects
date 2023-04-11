import Todo from "./Todo"
import styles from './TodoList.module.css'

function TodoList({todos,deleteTodo}){
    return (
        <div className={styles.todoListContainer}>
            {todos.length>0 ?(
                todos.map((todo,ind)=><Todo key={ind} todo={todo} deleteTodo={deleteTodo} index={ind}/>)
                ):(
                <h2>Todo list is empty</h2>
            )}
        </div>
    )
}
export default TodoList