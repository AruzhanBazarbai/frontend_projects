import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri'
import styles from './TodosAction.module.css'
import Button from '../UI/Button'

function TodosAction( {clearCompletedTodos,resetTodos, completedTodosExist}){
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={resetTodos} text="reset"><RiRefreshLine /></Button>
            <Button title="Clear Completed Todos" onClick={clearCompletedTodos} text="clear" disabled={!completedTodosExist}><RiDeleteBin2Line /></Button>
        </div>
    )
}
export default TodosAction