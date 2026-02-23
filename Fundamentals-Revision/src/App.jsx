import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="app">
      <Header
        title="Smart Todo App"
        subtitle="Manage your tasks efficiently"
      />
      <MainContent />
      <Footer text="Built during React Training" />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header({ title, subtitle }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </header>
  );
}

/* ---------------- Main Content ---------------- */

function MainContent() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React Basics', completed: true },
    { id: 2, task: 'Understand Props', completed: false },
    { id: 3, task: 'Master State', completed: false },
  ]);

  const [inputValue, setInputValue] = useState('');

  function addTask() {
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      task: inputValue.trim(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTask]);
    setInputValue('');
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = total - completed;

  return (
    <main className="main">
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <TaskCounter
        total={total}
        completed={completed}
        active={active}
      />

      {total === 0 ? (
        <h3 className="empty">No tasks available.</h3>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

/* ---------------- Todo Item ---------------- */

function TodoItem({ todo, onToggle }) {
  const { id, task, completed } = todo;

  return (
    <li
      className={`todo-item ${completed ? 'completed' : ''}`}
      onClick={() => onToggle(id)}
    >
      <span className="status">
        {completed ? '✔️' : '❌'}
      </span>
      <span className="task">{task}</span>
    </li>
  );
}

/* ---------------- Task Counter ---------------- */

function TaskCounter({ total, completed, active }) {
  return (
    <div className="counter">
      <span>Total: {total}</span>
      <span>Completed: {completed}</span>
      <span>Active: {active}</span>
    </div>
  );
}

/* ---------------- Footer ---------------- */

function Footer({ text }) {
  return (
    <footer className="footer">
      <p>{text}</p>
    </footer>
  );
}

export default App;