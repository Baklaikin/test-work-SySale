import styled from "@emotion/styled";

export const Dropdown = styled.div`
  position: relative;
  width: 258px;
  height: auto;
  display: inline-block;
  border-radius: 6px;
  background-color: #fff;

  &:hover div {
    display: block;
  }
`;

export const DropButton = styled.button`
  font-family: "SF UI Display", sans-serif;
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 6px;
  color: #2c2c2c;
  padding: 4px;
  font-size: 16px;
  border: none;
`;

export const DropContent = styled.div`
  display: none;
  width: 100%;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Link = styled.button`
  font-family: "SF UI Display", sans-serif;
  color: #2c2c2c;
  background-color: #fff;
  padding: 4px 8px;
  width: 100%;
  border: none;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    background-color: #e0e9f2;
  }
`;

export const BtnText = styled.span`
  margin-left: 10px;
`;

export const ProductCard = styled.article`
  width: 573px;
  border-radius: 10px;
  padding: 30px;
  border: 1px solid tomato;
  margin-top: 30px;
  margin-left: 50px;
  width: 360px;
  height: auto;
  /* margin:0; */
  padding: 4px;
`;

export const CardBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CheckboxContainer = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

export const OrderBtnContainer = styled.div`
  display: flex;
`;

export const OrderContainer = styled.div`
  display: flex;
`;
