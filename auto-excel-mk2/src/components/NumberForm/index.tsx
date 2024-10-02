import { LabelBox, LabelSubTitle, LabelTitle, MinusBtn, NumberFormBox, NumberInput, PlusBtn } from "./styles";

const NumberForm = () => {
  return (
    <NumberFormBox>
      <MinusBtn>－</MinusBtn>
      <LabelBox>
        <LabelTitle>전압</LabelTitle>
        <LabelSubTitle>단위: V, 1씩 증감</LabelSubTitle>
      </LabelBox>
      <NumberInput />
      <PlusBtn>＋</PlusBtn>
    </NumberFormBox>
  );
};

export default NumberForm;
