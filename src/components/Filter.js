import styled from "styled-components";

const Filter = (props) => {
  return (
    <Filtrbox>
      <Label>Filter by tag</Label>
      <Select onChange={(event) => props.setActiveTag(event.target.value)}>
        <option value='All'>All</option>
        <option value='Home'>Home</option>
        <option value='Work'>Work</option>
        <option value='Fun'>Fun</option>
        <option value='Other'>Other</option>
      </Select>
    </Filtrbox>
  );
};

export default Filter;

// STYLING SECTION:

const Filtrbox = styled.div`
  text-align: center;
  background-color: #250738;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  padding: 1rem;
  margin: 1rem;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
`;

const Select = styled.select`
  padding: 0.25rem;
  margin: 0rem 1rem 0rem 1rem;
`;

const Label = styled.label`
  padding: 0.25rem;
`;
