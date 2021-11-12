import styled from "@emotion/styled";
import { ReactComponent as Scrollbar } from "images/rectangle.svg";
import { ReactComponent as ArrowUpwards } from "images/arrowup.svg";
import { ReactComponent as DownArrowIcon } from "../../images/down-arrow.svg";

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

  &:hover + div > div {
    display: block;
  }
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

export const Quantity = styled.p``;

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
`;

export const DownArrow = styled(DownArrowIcon)``;

export const MoreProductsThumb = styled.div`
  width: 256px;
  height: 261px;
  margin-top: 30px;
  border-radius: 25px;
  overflow: hidden;
  margin-left: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover > img {
    transform: scale(1.5);
  }
`;

export const MoreProductsImg = styled.img`
  transition: 0.2s linear;
  object-fit: cover;
`;
