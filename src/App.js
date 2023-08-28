import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('All');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const filterTodos = (filter) => {
    setCurrentFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === 'Active') {
      return !todo.isCompleted;
    }
    if (currentFilter === 'Completed') {
      return todo.isCompleted;
    }
    return true;
  });

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCounter = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <div className="container">
        <h1>#todo</h1>
        <div className="filter-container">
          <ul>
            <li>
              <button
                className={currentFilter === 'All' ? 'active' : ''}
                onClick={() => filterTodos('All')}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={currentFilter === 'Active' ? 'active' : ''}
                onClick={() => filterTodos('Active')}
              >
                Active
              </button>
            </li>
            <li>
              <button
                className={currentFilter === 'Completed' ? 'active' : ''}
                onClick={() => filterTodos('Completed')}
              >
                Completed
              </button>
            </li>
          </ul>
        </div>
        <TodoForm addTodo={addTodoHandler} />
        {todos.length > 0 ? (
          <TodoList
            todos={filteredTodos}
            deleteTodo={deleteTodoHandler}
            toggleTodo={toggleTodoHandler}
            currentFilter={currentFilter}
          />
        ) : (
          <div>
            <h2>list is empty</h2>
          </div>
        )}
        {currentFilter === 'Completed' && completedTodosCounter > 0 ? (
          <TodosActions deleteCompletedTodos={deleteCompletedTodoHandler} />
        ) : (
          ''
        )}
      </div>
      <footer>
        created by{' '}
        <a href="https://github.com/VladkaG" target="_blank">
          Vladyslava
        </a>{' '}
        - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
