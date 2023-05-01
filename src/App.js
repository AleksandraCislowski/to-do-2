import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

// const DUMMY_DATA = [
//   {
//     id: "e1",
//     name: "Make a healthy dinner",
//     tag: "Home",
//     date: new Date(2023, 7, 14),
//   },
// ];

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
