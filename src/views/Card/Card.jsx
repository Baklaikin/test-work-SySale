import {
  Dropdown,
  DropButton,
  DropContent,
  Radio,
  OrderBtn,
  IncreaseBtn,
  DecreaseBtn,
  Quantity,
  RadioLabel,
  ArrowUp,
  DownArrow,
  ScrollBar,
  ColorOptionWrapper,
  Paragraph,
  Title,
  Text,
  TextContainer,
  BuyBtn,
  Link,
  BtnText,
  ProductCard,
  CardThumb,
  Image,
  CheckboxContainer,
  OrderBtnContainer,
  OrderContainer,
} from "./Card.styled";
import { ReactComponent as BuyIcon } from "../../images/buy.svg";
import { useState } from "react";
import MoroccanImg from "images/moroccanoil-rotated.jpg";

function ProdCard({ value, name, id }) {
  const [count, setCount] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  let price = count * 200;

  const onBtnClick = (e) => {
    switch (e.currentTarget.name) {
      case "increase":
        return setCount(count + 1);
      case "decrease":
        if (count > 1) {
          return setCount(count - 1);
        } else {
          return;
        }
      default:
        return;
    }
  };

  const mouseOverHandler = (e) => {
    setIsHovering(!isHovering);
  };
  const mouseLeaveHandler = (e) => {
    setIsHovering(!isHovering);
  };

  return (
    <ProductCard>
      <div>
        <div>
          {/* <CardBar> */}

          <Text>New</Text>
          <BuyBtn>
            <BuyIcon />
          </BuyBtn>

          {/* </CardBar> */}
          <CardThumb>
            {!isHovering ? (
              <Image
                src={value}
                alt={id}
                onMouseOver={mouseOverHandler}
                onMouseLeave={mouseLeaveHandler}
              />
            ) : (
              <Image
                src={MoroccanImg}
                alt={id}
                onMouseOver={mouseOverHandler}
                onMouseLeave={mouseLeaveHandler}
              />
            )}
          </CardThumb>
          <TextContainer>
            <Title>Шампунь</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              provident sed delectus cupiditate a porro nobis quisquam excepturi
              pariatur saepe, laudantium quod, praesentium recusandae, tempora
              et maxime non veritatis magni.
            </Paragraph>
          </TextContainer>
          <ColorOptionWrapper>
            <Dropdown>
              <DropButton>
                <BtnText>Цвет</BtnText>
                <DownArrow />
                <ArrowUp />
              </DropButton>
              <DropContent>
                <ScrollBar />
                <Link>
                  <BtnText> Желтый </BtnText>
                </Link>
                <Link>
                  <BtnText> Красный </BtnText>
                </Link>
                <Link>
                  <BtnText>Зеленый</BtnText>
                </Link>
              </DropContent>
            </Dropdown>
            <p>{price}грн</p>
          </ColorOptionWrapper>

          {/* Checkboxes */}

          <CheckboxContainer role="group" aria-labelledby="Quantity-choice">
            <RadioLabel>
              <Radio type="radio" defaultChecked name={name} value="100" />
              100 мл
            </RadioLabel>
            <RadioLabel>
              <Radio type="radio" name={name} value="200" />
              200 мл
            </RadioLabel>
            <RadioLabel>
              <Radio type="radio" name={name} value="300" />
              300 мл
            </RadioLabel>
          </CheckboxContainer>

          {/* Quantity and buy btn */}

          <OrderContainer>
            <OrderBtnContainer>
              <DecreaseBtn type="button" name="decrease" onClick={onBtnClick}>
                -
              </DecreaseBtn>
              <Quantity>{count}</Quantity>
              <IncreaseBtn type="button" name="increase" onClick={onBtnClick}>
                +
              </IncreaseBtn>
            </OrderBtnContainer>
            <OrderBtn>Купить</OrderBtn>
          </OrderContainer>
        </div>
      </div>
    </ProductCard>
  );
}

export default ProdCard;
