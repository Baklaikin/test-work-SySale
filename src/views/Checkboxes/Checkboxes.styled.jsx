import styled from "@emotion/styled";

export const CheckboxContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 26px;
  padding: 0 14px;
  display: flex;
  flex-direction: column;
`;

export const Radio = styled.input`
  position: absolute;
  appearance: none;

  &:checked + span > span {
    width: 17px;
    height: 17px;
    border-radius: 5px;
    background: linear-gradient(261.65deg, #efbb37 -3.95%, #cf9e1f 109.44%);
  }
`;

export const RadioLabel = styled.label`
  margin-left: 30px;
  margin-bottom: 15px;
`;
export const AltRadioBtn = styled.span`
  margin-left: -30px;
  width: 23px;
  height: 23px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #dedede;
  position: absolute;
`;
