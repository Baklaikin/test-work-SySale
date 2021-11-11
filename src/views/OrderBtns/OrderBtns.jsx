import {
  OrderBtnClicked,
  OrderBtn,
  Quantity,
  OrderContainer,
  OrderBtnContainer,
  IncreaseBtn,
  DecreaseBtn,
} from "views/OrderBtns/OrderBtns.styled";
export default function OrderBtns({
  count,
  inOrder,
  onBtnClick,
  buyClickHandler,
}) {
  return (
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
      {!inOrder ? (
        <OrderBtn onClick={buyClickHandler}>Купить</OrderBtn>
      ) : (
        <OrderBtnClicked onClick={buyClickHandler}>
          Уже в корзине
        </OrderBtnClicked>
      )}
    </OrderContainer>
  );
}
