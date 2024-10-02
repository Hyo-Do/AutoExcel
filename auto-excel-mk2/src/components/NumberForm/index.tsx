import { LabelBox, LabelSubTitle, LabelTitle, MinusBtn, NumberFormBox, NumberInput, PlusBtn } from "./styles";

interface NumberFormProps {
  type1: "A" | "V";
  type2: "max" | "min";
}

const NumberForm = ({ type1, type2 }: NumberFormProps) => {
  const titles1 = { A: "전압", V: "볼트" };
  const titles2 = { max: "최대", min: "최소" };
  const units = { A: "A", V: "V" };
  const intervals = { A: 0.1, V: 1 };
  const defaultValues = { A: { max: 1.1, min: 0.9 }, V: { max: 708, min: 705 } };

  return (
    <NumberFormBox>
      <MinusBtn>－</MinusBtn>
      <LabelBox>
        <LabelTitle>
          {titles2[type2]} {titles1[type1]}
        </LabelTitle>
        <LabelSubTitle>
          단위: {units[type1]}, {intervals[type1]}씩 증감
        </LabelSubTitle>
      </LabelBox>
      <NumberInput defaultValue={defaultValues[type1][type2]} />
      <PlusBtn>＋</PlusBtn>
    </NumberFormBox>
  );
};

export default NumberForm;
