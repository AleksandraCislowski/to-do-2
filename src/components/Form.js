import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import styled from "styled-components";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredTag, setEnteredTag] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [selected, setSelected] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

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
    if (enteredName.trim().length === 0) {
      setError("Please enter a valid task name (non-empty value).");
      setModalIsOpen(true);
    } else {
      if (enteredTag.length === 0) {
        setError("Please choose one of the tags.");
        setModalIsOpen(true);
      } else {
        if (enteredDate.length === 0) {
          setError("Please choose a date.");
          setModalIsOpen(true);
        } else {
          const todoData = {
            name: enteredName,
            tag: enteredTag,
            date: new Date(enteredDate),
          };
          props.onSaveTodoData(todoData);
          setEnteredName("");
          setEnteredTag("");
          setEnteredDate("");
        }
      }
    }
  };

  const resetFormHandler = () => {
    setEnteredName("");
    setEnteredTag("");
    setEnteredDate("");
  };

  function closeModal() {
    setModalIsOpen(false);
    setError("");
  }

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
        <Label>Select a tag:</Label>
        <select value={enteredTag} onChange={tagChangeHandler}>
          <option disabled={true} value={selected} onChange={handleChange}>
            Choose an option
          </option>
          <option value='Home'>Home</option>
          <option value='Work'>Work</option>
          <option value='Fun'>Fun</option>
          <option value='Other'>Other</option>
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
        <Button2 onClick={resetFormHandler} type='button'>
          Reset
        </Button2>
        <Button1 type='submit'>Create</Button1>
      </div>
      {modalIsOpen && <Modal closeModal={closeModal} error={error} />}
      {modalIsOpen && <Backdrop closeModal={closeModal} />}
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
  height: 20rem;
  width: 40rem;
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
