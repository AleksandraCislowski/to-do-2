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
          <p>{todo.tag}</p>
          <h4>{todo.name}</h4>
          <TodoDate date={todo.date} />
          <Buttonbox>
            <Button1>Done!</Button1>
            <Button2>Cancel</Button2>
          </Buttonbox>
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
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  padding: 1rem;
  margin: 1rem;
  height: 6rem;
  width: 40rem;
  background-color: ${(props) =>
    props.tag === "Home"
      ? `#e697e9`
      : props.tag === "Work"
      ? `#6788e4`
      : props.tag === "Fun"
      ? `#55e44b`
      : `#ecc048`};
  & p,
  h4 {
    color: white;
    padding: 0.5rem;
    border-radius: 6px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
    background-color: ${(props) =>
      props.tag === "Home"
        ? `#aa53ad`
        : props.tag === "Work"
        ? `#2a4798`
        : props.tag === "Fun"
        ? `#3da335`
        : `#ad8d35`};
  }
  & h4 {
    flex-grow: 2;
    margin: 1rem;
  }
`;

const Button1 = styled.button`
  background: #e1b6e3;
  border-radius: 6px;
  border: 2px solid black;
  color: black;
  margin: 0.25rem 0rem 0.25rem 1rem;
  padding: 0.25rem 1rem;
  font-weight: bold;
`;

const Button2 = styled.button`
  background: white;
  border-radius: 6px;
  border: 2px solid black;
  color: black;
  margin: 0.25rem 0rem 0.25rem 1rem;
  padding: 0.25rem 1rem;
  font-weight: bolder;
`;

const Buttonbox = styled.div`
  display: flex;
  flex-direction: column;
`;
