import styles from './Todo.module.css';

function Todo({ todo, handleCheck, isChecked }) {
  return (
    <div className={styles.todo}>
      <input className={styles.customChekbox} value={todo} type="checkbox" onChange={handleCheck}></input>
      <span className={isChecked(todo)}>{todo}</span>
    </div>
  );
}

export default Todo;
