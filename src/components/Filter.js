import styled from "styled-components";

const Filter = (props) => {
  return (
    <div>
      <label>Filter by tag</label>
      <select onChange={(event) => props.setActiveTag(event.target.value)}>
        <option value='All'>All</option>
        <option value='Home'>Home</option>
        <option value='Work'>Work</option>
        <option value='Fun'>Fun</option>
        <option value='Other'>Other</option>
      </select>
    </div>
  );
};

export default Filter;

// STYLING SECTION:
