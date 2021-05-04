import styled from "styled-components";

export const BottonStyled = styled.button`
  text-transform: capitalize;
  margin-right: 10px;
  margin-top: 5px;
  width: ${(props) => (props.clear ? "200px" : "auto")};
  padding: 10px;
  outline: none;
  border: 1px solid #4e54c8;
  border-color: ${(props) => (props.cart ? "#FA7A00" : "#4E54C8")};
  border-radius: 7px;
  color: ${(props) => (props.cart ? "#FA7A00" : "#4E54C8")};
  font-size: 20px;
  background-color: transparent;
  transition: all 0.4s ease;
  &: hover {
    color: #fff;
    background-color: ${(props) => (props.cart ? "#FA7A00" : "#4E54C8")};
  }
`;
