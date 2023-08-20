import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  return (
    <div className="App">
      <h1 className="header">Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
