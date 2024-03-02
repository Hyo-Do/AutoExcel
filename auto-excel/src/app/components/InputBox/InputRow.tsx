import React, { useRef } from "react";
import { InputData } from "../../interfaces/inputData";
import { InputForm, InputLabel, InputSymbol, NumBtn, RowWrapper } from "./styles";

interface InputRowProps {
  id: "maxV" | "minV" | "deltaV" | "maxA" | "minA" | "deltaA";
  symbol: string;
  label: string;
  inputData: InputData;
  setInputData: React.Dispatch<React.SetStateAction<InputData>>;
}

const InputRow = ({ id, symbol, label, inputData, setInputData }: InputRowProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value !== "" ? parseFloat(event.target.value) : 0;
    event.target.value = `${newValue}`;
    setInputData((data) => ({ ...data, [id]: newValue }));
  };

  const incrementValue = (value: number) => {
    if (inputRef.current) {
      const targetValue = inputRef.current.value !== "" ? parseFloat(inputRef.current.value) : 0;
      const newValue = parseFloat((targetValue + value).toFixed(1));
      inputRef.current.value = `${newValue}`;
      setInputData((data) => ({ ...data, [id]: newValue }));
    }
  };

  return (
    <RowWrapper>
      <InputSymbol>{symbol}</InputSymbol>
      <InputLabel>{label}</InputLabel>
      <InputForm ref={inputRef} defaultValue={inputData[id]} onChange={handerInputChange} />
      <NumBtn onClick={() => incrementValue(id.endsWith("V") ? 1 : 0.1)}>+ {id.endsWith("V") ? "1" : "0.1"}</NumBtn>
      <NumBtn onClick={() => incrementValue(id.endsWith("V") ? 5 : 0.5)}>+ {id.endsWith("V") ? "5" : "0.5"}</NumBtn>
      <NumBtn onClick={() => incrementValue(id.endsWith("V") ? -1 : -0.1)}>- {id.endsWith("V") ? "1" : "0.1"}</NumBtn>
      <NumBtn onClick={() => incrementValue(id.endsWith("V") ? -5 : -0.5)}>- {id.endsWith("V") ? "5" : "0.5"}</NumBtn>
    </RowWrapper>
  );
};

export default InputRow;
