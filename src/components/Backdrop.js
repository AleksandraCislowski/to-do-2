import styled from "styled-components";

function Backdrop({ closeModal }) {
  return <Backdrop onClick={closeModal} />;
}

export default Backdrop;

// STYLING SECTION:

const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
