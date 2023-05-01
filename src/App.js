import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todos) => {
    setTodos((prevTodos) => {
      return [todos, ...prevTodos];
    });
  };

  return (
    <div>
      <TodoList todos={todos} onAddTodo={addTodoHandler} />
    </div>
  );
}

export default App;
