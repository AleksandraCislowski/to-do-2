import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <Container1>
      <Header>New TODO</Header>
      <Container2>
        <Label>Name:</Label>
        <input type='text' value=''></input>
        <Label>Select a tag:</Label>{" "}
        <select>
          <option selected value='home'>
            Home
          </option>
          <option value='work'>Work</option>
          <option value='fun'>Fun</option>
          <option value='other'>Other</option>
        </select>
        <Label>Date:</Label>
        <input type='date' min={new Date().toISOString().split("T")[0]} />
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
  color: rebeccapurple;
  margin: 0.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efe4f6;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  padding: 0.5rem;
  margin: 1rem;
  width: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #deabed;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  padding: 0.5rem;
  margin: 0.25rem;
  width: 50%;
`;

const Button1 = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Button2 = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Label = styled.label`
  padding: 0.25rem 0rem;
`;
