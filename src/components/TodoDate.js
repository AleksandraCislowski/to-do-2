import styled from "styled-components";

const TodoDate = ({ date, tag, isDone }) => {
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
    <Box tag={tag} isDone={isDone}>
      <div>{`${day}${nth(day)} ${month} ${year}`}</div>
    </Box>
  );
};

export default TodoDate;

// STYLING SECTION:

const Box = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 0.5rem;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  background-color: ${(props) =>
    props.isDone
      ? `#4d474e`
      : props.tag === "Home"
      ? `#aa53ad`
      : props.tag === "Work"
      ? `#2a4798`
      : props.tag === "Fun"
      ? `#3da335`
      : `#ad8d35`};
`;
