import styled from "@emotion/styled";

export const BuyBtn = styled.button`
  position: absolute;
  top: 43px;
  right: 31px;
  width: 47px;
  height: 47px;
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border: none;
  transition-duration: 500ms;
  transition-property: background-color;
  &:hover,
  &:focus {
    background-color: #f9fafc;
    cursor: pointer;
  }
`;
