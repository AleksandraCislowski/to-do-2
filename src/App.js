import React, { useState } from "react";
import TodoList from "./components/TodoList";
import styled from "styled-components";
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
  const setDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  const setUndone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: false };
        } else {
          return todo;
        }
      })
    );
  };

  const cancel = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container1>
      <TodoList
        todos={todos}
        onAddTodo={addTodoHandler}
        setDone={setDone}
        setUndone={setUndone}
        cancel={cancel}
      />
    </Container1>
  );
}

export default App;

// STYLING SECTION:

const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
