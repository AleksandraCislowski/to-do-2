import styled from "styled-components";

function Modal({ closeModal, error }) {
  return (
    <Modalbox>
      <H2>Invalid input</H2>
      <Paragraph>{error}</Paragraph>
      <Button onClick={closeModal}>Okay</Button>
    </Modalbox>
  );
}
export default Modal;

// STYLING SECTION:

const Modalbox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
  width: 30rem;
  height: 12rem;
  z-index: 10;
  position: fixed;
  top: 20vh;
  left: calc(50% - 15rem);
  overflow: hidden;
`;

const H2 = styled.h2`
  background-color: rgb(236, 154, 224);
  padding: 0.5rem;
  color: rgb(137, 22, 120);
  text-align: left;
`;

const Paragraph = styled.p`
  flex: 1;
  padding: 1.5rem 0.5rem;
  text-align: left;
`;

const Button = styled.button`
  background-color: rgb(236, 154, 224);
  color: rgb(137, 22, 120);
  font-weight: bold;
  align-self: flex-end;
  margin: 1rem 0.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  border: 2px solid rgb(137, 22, 120);
`;
