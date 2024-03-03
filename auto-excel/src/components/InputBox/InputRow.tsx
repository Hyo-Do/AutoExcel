import React, { useEffect, useRef } from "react";
import { InputForm, InputLabel, InputSymbol, NumBtn, RowWrapper } from "./styles";

interface InputRowProps {
  id: "maxV" | "minV" | "deltaV" | "maxA" | "minA" | "deltaA" | any;
  symbol: string;
  label: string;
  inputData: any;
  setInputData: React.Dispatch<React.SetStateAction<any>>;
}

const InputRow = ({ id, symbol, label, inputData, setInputData }: InputRowProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value !== "" ? parseFloat(event.target.value) : 0;
    setInputData((data: any) => ({ ...data, [id]: newValue }));
    // event.target.value = `${newValue}`;
  };

  const incrementValue = (value: number) => {
    if (inputRef.current) {
      const targetValue = inputRef.current.value !== "" ? parseFloat(inputRef.current.value) : 0;
      setInputData((data: any) => ({ ...data, [id]: newValue }));
      const newValue = parseFloat((targetValue + value).toFixed(1));
      // inputRef.current.value = `${newValue}`;
    }
  };

  useEffect(() => {
    if (!id || !inputRef.current) return;
    inputRef.current.value = inputData[id];
  }, [id, inputData]);

  return (
    <RowWrapper>
      <InputSymbol>{symbol}</InputSymbol>
      <InputLabel>{label}</InputLabel>
      <InputForm ref={inputRef} defaultValue={inputData[id]} onChange={handerInputChange} />
      <NumBtn onClick={() => incrementValue(id.endsWith("A") ? 0.1 : 1)}>+ {id.endsWith("A") ? "0.1" : "1"}</NumBtn>
      <NumBtn onClick={() => incrementValue(id.endsWith("A") ? 0.5 : 5)}>+ {id.endsWith("A") ? "0.5" : "5"}</NumBtn>
      <NumBtn onClick={() => incrementValue(id.endsWith("A") ? -0.1 : -1)}>- {id.endsWith("A") ? "0.1" : "1"}</NumBtn>
      <NumBtn onClick={() => incrementValue(id.endsWith("A") ? -0.5 : -5)}>- {id.endsWith("A") ? "0.5" : "5"}</NumBtn>
    </RowWrapper>
  );
};

export default InputRow;
