import {
  Dropdown,
  DropButton,
  DropContent,
  ArrowUp,
  DownArrow,
  ScrollBar,
  ColorOptionWrapper,
  Paragraph,
  Title,
  Text,
  TextContainer,
  Link,
  BtnText,
  ProductCard,
  CardThumb,
  Image,
  MoreProductsThumb,
  MoreProductsImg,
} from "./Card.styled";
import BuyButton from "views/BuyBtn/BuyButton";
import BuyBtnInOrder from "views/BuyBtn/BuyBtnInOrder";
import Checkboxes from "views/Checkboxes/Checkboxes";
import OrderBtns from "views/OrderBtns/OrderBtns";
import { useState } from "react";

function ProdCard({ value, name, prod1, prod2 }) {
  const [count, setCount] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [inOrder, setInOrder] = useState(false);
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

  const mouseOverHandler = (e) => setIsHovering(!isHovering);

  const mouseLeaveHandler = (e) => setIsHovering(!isHovering);

  const buyClickHandler = () => {
    if (inOrder) {
      alert("Item is already in shopping bag");
    }
    setInOrder(!inOrder);
  };

  return (
    <>
      <ProductCard>
        <div>
          <div>
            <Text>New</Text>
            {!inOrder ? <BuyButton /> : <BuyBtnInOrder />}
            <CardThumb>
              {!isHovering ? (
                <Image
                  src={value.initial}
                  alt={name}
                  onMouseOver={mouseOverHandler}
                  onMouseLeave={mouseLeaveHandler}
                />
              ) : (
                <Image
                  src={value.rotate}
                  alt={name}
                  onMouseOver={mouseOverHandler}
                  onMouseLeave={mouseLeaveHandler}
                />
              )}
            </CardThumb>
            <TextContainer>
              <Title>Шампунь</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                provident sed delectus cupiditate a porro nobis quisquam
                excepturi pariatur saepe, laudantium quod, praesentium
                recusandae, tempora et maxime non veritatis magni.
              </Paragraph>
            </TextContainer>
            <ColorOptionWrapper>
              <Dropdown>
                <DropButton
                  onMouseOver={mouseOverHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  <BtnText>Цвет</BtnText>
                  {isHovering ? <ArrowUp /> : <DownArrow />}
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
            <Checkboxes name={name} />
            <OrderBtns
              onBtnClick={onBtnClick}
              buyClickHandler={buyClickHandler}
              inOrder={inOrder}
              count={count}
            />
          </div>
        </div>
      </ProductCard>
      <MoreProductsThumb>
        <MoreProductsImg src={prod1} alt="shampoo" />
      </MoreProductsThumb>
      <MoreProductsThumb>
        <MoreProductsImg src={prod2} alt="shampoo" />
      </MoreProductsThumb>
    </>
  );
}

export default ProdCard;
