import React, { useState } from "react";
import Form from "./Form";

const NewTodo = (props) => {
  const saveTodoDataHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
    };
    props.onAddTodo(todoData);
  };

  return (
    <div>
      <Form onSaveTodoData={saveTodoDataHandler}></Form>
      {props.todos.map((todo) => (
        <p key={todo.id}>{`${todo.name} ${todo.tag} ${todo.date}`}</p>
      ))}
    </div>
  );
};

export default NewTodo;
