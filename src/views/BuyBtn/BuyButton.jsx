import { ReactComponent as BuyIcon } from "../../images/buy.svg";
import { BuyBtn } from "./BuyButton.styled";

export default function BuyButton() {
  return (
    <BuyBtn>
      <BuyIcon />
    </BuyBtn>
  );
}
