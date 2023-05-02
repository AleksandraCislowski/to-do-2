import React from "react";
import Form from "./Form";
import TodoDate from "./TodoDate";
import styled from "styled-components";

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
        <Container1 tag={todo.tag} key={todo.id}>
          {`${todo.tag}: ${todo.name}`}
          <TodoDate date={todo.date} />
        </Container1>
      ))}
    </div>
  );
};

export default NewTodo;

// STYLING SECTION:

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  padding: 1rem;
  margin: 1rem;
  width: 60rem;
  background-color: ${(props) =>
    props.tag === "Home"
      ? `#e697e9`
      : props.tag === "Work"
      ? `#6788e4`
      : props.tag === "Fun"
      ? `#55e44b`
      : `#ecc048`};
`;