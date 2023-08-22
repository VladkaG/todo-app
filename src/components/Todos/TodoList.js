import { useState } from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos }) {
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }

    setChecked(updatedList);

    console.log(updatedList);
  };

  const isChecked = (todo) =>
    checked.includes(todo)
      ? styles['checked-item']
      : styles['not-checked-item'];

  return (
    <div className={styles.todoList}>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          handleCheck={handleCheck}
          isChecked={isChecked}
        />
      ))}
    </div>
  );
}

export default TodoList;
