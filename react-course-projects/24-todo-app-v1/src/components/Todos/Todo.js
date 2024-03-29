import {RiTodoFill} from 'react-icons/ri'
import styles from './Todo.module.css'
// импортировали иконку с библиотеки react-icons 
function Todo({todo,deleteTodo,index}){
    return(
        <div className={styles.todo} onDoubleClick={()=>deleteTodo(index)}>
            <RiTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{todo}</div>
        </div>
    )

}
export default Todo