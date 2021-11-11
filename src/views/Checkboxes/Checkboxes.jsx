import {
  CheckboxContainer,
  Radio,
  RadioLabel,
  AltRadioBtn,
} from "views/Checkboxes/Checkboxes.styled";
export default function Checkboxes({ name }) {
  return (
    <CheckboxContainer role="group" aria-labelledby="Quantity-choice">
      <RadioLabel>
        <Radio type="radio" defaultChecked name={name} value="100" />
        <AltRadioBtn>
          <span></span>
        </AltRadioBtn>
        100 мл
      </RadioLabel>
      <RadioLabel>
        <Radio type="radio" name={name} value="200" />
        <AltRadioBtn>
          <span></span>
        </AltRadioBtn>
        200 мл
      </RadioLabel>
      <RadioLabel>
        <Radio type="radio" name={name} value="300" />
        <AltRadioBtn>
          <span></span>
        </AltRadioBtn>
        300 мл
      </RadioLabel>
    </CheckboxContainer>
  );
}
