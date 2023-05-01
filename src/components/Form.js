import React, { useState } from "react";
import styled from "styled-components";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredTag, setEnteredTag] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const tagChangeHandler = (event) => {
    setEnteredTag(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      name: enteredName,
      tag: enteredTag,
      date: new Date(enteredDate),
    };
    props.onSaveTodoData(todoData);
    setEnteredName("");
    setEnteredTag("");
    setEnteredDate("");
  };

  return (
    <Container1 onSubmit={submitHandler}>
      <Header>New TODO</Header>
      <Container2>
        <Label>Name:</Label>
        <input
          type='text'
          value={enteredName}
          onChange={nameChangeHandler}
        ></input>
        <Label>Select a tag:</Label>{" "}
        <select value={enteredTag} onChange={tagChangeHandler}>
          <option defaultValue=''></option>
          <option value='home'>Home</option>
          <option value='work'>Work</option>
          <option value='fun'>Fun</option>
          <option value='other'>Other</option>
        </select>
        <Label>Date:</Label>
        <input
          type='date'
          min={new Date().toISOString().split("T")[0]}
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </Container2>
      <div>
        <Button1 type='submit'>Create</Button1>
        <Button2 type='button'>Cancel</Button2>
      </div>
    </Container1>
  );
};

export default Form;

// STYLING SECTION:

const Header = styled.h2`
  font-size: 30px;
  color: #9e1eee;
  margin: 0.5rem;
`;

const Container1 = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #efe4f6;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  padding: 0.5rem;
  margin: 1rem;
  width: 60rem;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #deabed;
  border-radius: 12px;
  padding: 0.5rem 1rem 1rem 1rem;
  margin: 0.25rem;
  width: 50%;
`;

const Button1 = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 1rem 0.25rem;
  padding: 0.25rem 1rem;
  font-weight: bold;
`;

const Button2 = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1rem;
  padding: 0.25rem 1rem;
  font-weight: bolder;
`;

const Label = styled.label`
  padding: 0.25rem 0rem;
`;
