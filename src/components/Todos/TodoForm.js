import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text !== '') {
      addTodo(text);
    }
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="add details"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
