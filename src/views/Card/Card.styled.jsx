import styled from "@emotion/styled";
import { ReactComponent as Scrollbar } from "images/rectangle.svg";
import { ReactComponent as ArrowUpwards } from "images/arrowup.svg";
import { ReactComponent as DownArrowIcon } from "../../images/down-arrow.svg";
import { ReactComponent as RadioIcon } from "../../images/radio.svg";

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 258px;
  height: auto;
  border-radius: 15px;
  background-color: #fff;

  &:hover div {
    display: block;
  }

  &:hover .ArrowUp {
    display: block;
  }

  /* &:hover .DownArrow{
    display:none;
} */
`;

export const DropButton = styled.button`
  font-family: "SF UI Display", sans-serif;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 30px;
  color: #2c2c2c;
  padding: 8px 20px;
  font-size: 16px;
  border: none;

  &:hover .DownArrow {
  }

  &:hover .ArrowUp {
    display: block;
  }
`;

export const DropContent = styled.div`
  display: none;
  margin: 0;
  padding: 8px 20px;
  width: 100%;
  border-radius: 15px;
  position: absolute;
  background-color: #fff;
  z-index: 1;
`;

export const Link = styled.button`
  font-family: "SF UI Display", sans-serif;
  background-color: transparent;
  padding: 4px 0;
  width: 195px;
  border: none;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    background-color: #f3f8fc;
    border-radius: 0 10px 10px 0;
  }
`;

export const BtnText = styled.span`
  color: #2c2c2c;
  font-family: "SF UI Display", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.1933;
`;

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
  padding: 10px 10px;
  border-radius: 30px 0 0 30px;
  border: none;
  background-color: transparent;
`;

export const IncreaseBtn = styled.button`
  margin-left: 5px;
  padding: 10px 10px;
  border-radius: 0 30px 30px 0;
  background-color: transparent;
  border: none;
`;

export const Quantity = styled.p``;

// export const CardBar = styled.div`
// display:flex;
// justify-content:space-between;
// width:100%;
// /* margin-top:53px; */
// padding-top:20px;

// `;

export const ProductCard = styled.article`
  position: relative;
  width: 573px;
  border-radius: 30px;
  padding: 30px;
  box-shadow: none;
  margin-top: 30px;
  margin-left: 50px;
  height: auto;
  padding: 45px;
  background-color: #f8fafc;
  transition-property: box-shadow;
  transition-duration: 300ms;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 45px #c3d4e4;
  }
`;

export const Image = styled.img`
  width: 256px;
  height: 251px;
  margin-left: auto;
  margin-right: auto;
`;

export const CardThumb = styled.div``;

export const TextContainer = styled.div`
  margin-top: 25px;
`;

export const Text = styled.p`
  position: absolute;
  top: 53px;
  left: 30px;
  width: 71px;
  height: 26px;
  text-align: center;
  padding: 5px 20px;
  background-color: #efbb37;
  color: #fff;
  background: linear-gradient(261.65deg, #efbb37 -3.95%, #cf9e1f 109.44%);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

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
//

export const Title = styled.h3`
  font-size: 24px;
  line-height: 1.1933;
  font-family: "SF UI Display", sans-serif;
  font-weight: 500;
  text-align: center;
  color: #2c2c2c;
`;

export const Paragraph = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;
  font-family: "SF UI Display", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #2c2c2c;
`;

export const ColorOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 25px;
  width: 100%;
`;

export const ScrollBar = styled(Scrollbar)`
  position: absolute;
  top: 0px;
  right: 10px;
`;

export const ArrowUp = styled(ArrowUpwards)`
  position: absolute;
  top: 12px;
  right: 21px;
  display: none;
`;

export const DownArrow = styled(DownArrowIcon)``;

export const CheckboxContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 26px;
  padding: 0 14px;
  display: flex;
  flex-direction: column;
`;

export const Radio = styled.input``;

export const RadioLabel = styled.label``;

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
  transition-duration: 1000ms;
  &:hover,
  &:focus {
    background: linear-gradient(261.65deg, #e9b32c -3.95%, #bf911a 109.44%);
    cursor: pointer;
  }
`;
