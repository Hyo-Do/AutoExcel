import { useContext } from "react";
import { LabelBox, LabelSubTitle, LabelTitle, MinusBtn, NumberFormBox, NumberInput, PlusBtn } from "./styles";
import { FileContext } from "../../contexts/FileContext";

interface NumberFormProps {
  type1: "A" | "V";
  type2: "max" | "min";
}

const NumberForm = ({ type1, type2 }: NumberFormProps) => {
  const { dataList, updateDataList } = useContext(FileContext);

  const titles1 = { A: "전압", V: "볼트" };
  const titles2 = { max: "최대", min: "최소" };
  const units = { A: "A", V: "V" };
  const intervals = { A: 0.1, V: 1 };
  const idx = { A: { max: 1, min: 0 }, V: { max: 3, min: 2 } }[type1][type2];

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    updateDataList(idx, newValue);
  };

  const onMinus = () => updateDataList(idx, Math.round((parseFloat(dataList[idx]) - intervals[type1]) * 10) / 10);
  const onPlus = () => updateDataList(idx, Math.round((parseFloat(dataList[idx]) + intervals[type1]) * 10) / 10);

  return (
    <NumberFormBox>
      <MinusBtn onClick={onMinus}>－</MinusBtn>
      <LabelBox>
        <LabelTitle>
          {titles2[type2]} {titles1[type1]}
        </LabelTitle>
        <LabelSubTitle>
          단위: {units[type1]}, {intervals[type1]}씩 증감
        </LabelSubTitle>
      </LabelBox>
      <NumberInput onChange={onChangeInput} value={dataList[idx]} />
      <PlusBtn onClick={onPlus}>＋</PlusBtn>
    </NumberFormBox>
  );
};

export default NumberForm;
