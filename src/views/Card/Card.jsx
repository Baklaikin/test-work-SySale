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
  CardBar,
  CardThumb,
  Image,
  CheckboxContainer,
  OrderBtnContainer,
  OrderContainer,
} from "./Card.styled";
import { ReactComponent as BuyIcon } from "../../images/buy.svg";

function ProdCard({ value }) {
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
            <Image src={value} alt="Concept" />
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
            <p>200грн</p>
          </ColorOptionWrapper>

          {/* Checkboxes */}

          <div>
            <CheckboxContainer role="group" aria-labelledby="newsletter-head">
              <RadioLabel>
                <Radio type="radio" defaultChecked name="volume" value="100" />
                100 мл
              </RadioLabel>
              <label>
                <input type="radio" name="volume" value="200" />
                200 мл
              </label>
              <label>
                <input type="radio" name="volume" value="300" />
                300 мл
              </label>
            </CheckboxContainer>
          </div>
          {/* Quantity and buy btn */}
          <OrderContainer>
            <OrderBtnContainer>
              <DecreaseBtn>-</DecreaseBtn>
              <Quantity>1</Quantity>
              <IncreaseBtn>+</IncreaseBtn>
            </OrderBtnContainer>
            <OrderBtn>Купить</OrderBtn>
          </OrderContainer>
        </div>
      </div>
    </ProductCard>
  );
}

export default ProdCard;
