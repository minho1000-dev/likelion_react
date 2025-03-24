import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoListItems from "./components/TodoListItems";
import TodoProgress from "./components/TodoProgress";

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreate = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoListContainer">
      <Header />
      <TodoInput onCreate={handleCreate} />
      <TodoListItems
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
      <TodoProgress todos={todos} />
    </div>
  );
}

export default App;
