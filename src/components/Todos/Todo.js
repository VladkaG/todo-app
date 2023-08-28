import { MdDeleteOutline } from 'react-icons/md';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo, currentFilter }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <input
        className={styles.todoChekbox}
        checked={todo.isCompleted}
        onChange={() => !todo.isCompleted}
        onClick={() => toggleTodo(todo.id)}
        type="checkbox"
      ></input>
      <span>{todo.text}</span>
      {currentFilter === 'Completed' ? (
        <MdDeleteOutline
          className={styles.todoDelete}
          onClick={() => deleteTodo(todo.id)}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default Todo;
