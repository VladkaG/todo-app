import Todo from './Todo';
import styles from './TodoList.module.css';
import './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo, currentFilter }) {
  return (
    <>
      <div className={styles.todoList}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            currentFilter={currentFilter}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
