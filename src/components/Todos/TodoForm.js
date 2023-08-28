import { useState } from 'react';
import Button from '../UI/Button';
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
        <Button className={styles.addButton} type="submit" title="Add">
          Add
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
