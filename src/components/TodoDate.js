import styled from "styled-components";

const TodoDate = ({ date }) => {
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  const nth = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <Box>
      <div>{`${day}${nth(day)} ${month} ${year}`}</div>
    </Box>
  );
};

export default TodoDate;

// STYLING SECTION:

const Box = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  background-color: #4e4d4aff;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
`;
