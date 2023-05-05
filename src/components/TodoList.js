import React from "react";
import Form from "./Form";
import TodoDate from "./TodoDate";
import styled from "styled-components";

const NewTodo = (props) => {
  const saveTodoDataHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
      isDone: false,
    };
    props.onAddTodo(todoData);
  };

  return (
    <div>
      <Form onSaveTodoData={saveTodoDataHandler}></Form>
      {props.todos.filter((todo) => !todo.isDone).length > 0 && (
        <H3>Things to do:</H3>
      )}
      {props.todos.filter((todo) => !todo.isDone).length === 0 && (
        <H3>No active tasks to do... Maybe create a new one?</H3>
      )}
      {props.todos
        .filter((todo) => todo.isDone === false)
        .map((todo) => (
          <Container1 tag={todo.tag} key={todo.id}>
            <p>{todo.tag}</p>
            <h4>{todo.name}</h4>
            <TodoDate date={todo.date} tag={todo.tag} />
            <Buttonbox>
              <Button1 onClick={() => props.setDone(todo.id)}>Done!</Button1>
              <Button2 onClick={() => props.cancel(todo.id)}>Delete</Button2>
            </Buttonbox>
          </Container1>
        ))}
      <div>
        {props.todos.filter((todo) => todo.isDone).length > 0 && (
          <H3>Finished!</H3>
        )}
        {props.todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <Container1 tag={todo.tag} key={todo.id} isDone={todo.isDone}>
              <p>{todo.tag}</p>
              <h4>{todo.name}</h4>
              <TodoDate date={todo.date} tag={todo.tag} isDone={todo.isDone} />
              <Buttonbox>
                <Button1 onClick={() => props.setUndone(todo.id)}>
                  Retake this task!
                </Button1>
                <Button2 onClick={() => props.cancel(todo.id)}>Delete</Button2>
              </Buttonbox>
            </Container1>
          ))}
      </div>
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
  opacity: ${(props) => (!props.isDone ? "1" : "0.5")};
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

const H3 = styled.h3`
  text-align: center;
  background-color: #250738;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  padding: 1rem;
  margin: 1rem;
  color: white;
`;
