import React, { useState } from "react";

const Form = () => {
  return (
    <form>
      <h2>New TODO</h2>
      <div>
        <label>Name</label>
        <input type='text' value='dinner'></input>
        <label>Choose a tag</label>{" "}
        <select>
          <option selected value='home'>
            Home
          </option>
          <option value='work'>Work</option>
          <option value='fun'>Fun</option>
          <option value='other'>Other</option>
        </select>
        <label>Date</label>
        <input type='date' min={new Date().toISOString().split("T")[0]} />
      </div>
      <div>
        <button type='submit'>Create</button>
        <button type='button'>Cancel</button>
      </div>
    </form>
  );
};

export default Form;
