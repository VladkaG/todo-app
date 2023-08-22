import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  return (
    <div className="App">
      <h1>#todo</h1>
      <div className="filter-container">
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
      </div>
      <>
        <TodoForm addTodo={addTodoHandler} />
        {todos.length > 0 ? (
          <TodoList todos={todos} />
        ) : (
          <div>
            <h2>List is empty</h2>
          </div>
        )}
      </>
    </div>
  );
}

export default App;
