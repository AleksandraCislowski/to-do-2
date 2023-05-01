import React from "react";
import Form from "./Form";
import TodoDate from "./TodoDate";

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
        <div key={todo.id}>
          {`${todo.name} ${todo.tag}`}
          <TodoDate date={todo.date} />
        </div>
      ))}
    </div>
  );
};

export default NewTodo;
