import styled from "@emotion/styled";

export const OrderBtnClicked = styled.button`
  width: 320px;
  height: 38px;
  border-radius: 30px;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 18;
  line-height: 1.1933;
  background: linear-gradient(261.65deg, #ffd773 -3.95%, #e2b645 109.44%);
  cursor: pointer;
`;

export const OrderBtn = styled.button`
  width: 320px;
  height: 38px;
  border-radius: 30px;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 18;
  line-height: 1.1933;
  background: linear-gradient(261.65deg, #efbb37 -3.95%, #cf9e1f 109.44%);
  transition-property: background;
  transition-duration: 300ms;
  &:hover,
  &:focus {
    background: linear-gradient(261.65deg, #e9b32c -3.95%, #bf911a 109.44%);
    cursor: pointer;
  }
`;

export const Quantity = styled.p``;

export const OrderBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 31px;
  border-radius: 30px;
  background-color: #e2e9f0;
`;

export const OrderContainer = styled.div`
  display: flex;
  padding-left: 16px;
`;

export const DecreaseBtn = styled.button`
  margin-right: 5px;
  padding: 10px 12px;
  border-radius: 30px 0 0 30px;
  border: none;
  background-color: transparent;
`;

export const IncreaseBtn = styled.button`
  margin-left: 5px;
  padding: 10px 12px;
  border-radius: 0 30px 30px 0;
  background-color: transparent;
  border: none;
`;
