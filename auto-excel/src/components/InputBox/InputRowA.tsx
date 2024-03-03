import React, { useEffect, useRef } from "react";
import { InputALabel, InputASubLabel, InputASymbol, InputForm, RowWrapper } from "./styles";

interface InputRowAProps {
  idx: number;
  inputData: any;
  setInputData: React.Dispatch<React.SetStateAction<any>>;
}

const InputRowA = ({ idx, inputData, setInputData }: InputRowAProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value !== "" ? parseFloat(event.target.value) : 0;
    // setInputData((data: any) => ({ ...data, [id]: newValue }));
    // event.target.value = `${newValue}`;
  };

  const incrementValue = (value: number) => {
    if (inputRef.current) {
      const targetValue = inputRef.current.value !== "" ? parseFloat(inputRef.current.value) : 0;
      // setInputData((data: any) => ({ ...data, [id]: newValue }));
      const newValue = parseFloat((targetValue + value).toFixed(1));
      // inputRef.current.value = `${newValue}`;
    }
  };

  useEffect(() => {
    if (!idx || !inputRef.current) return;
    inputRef.current.value = inputData.values[idx];
  }, [idx, inputData]);

  return (
    <RowWrapper>
      <InputASymbol>{idx+1}</InputASymbol>
      <InputALabel>{inputData.names[idx]}</InputALabel>
      <InputASubLabel>최소</InputASubLabel>
      <InputForm ref={inputRef} defaultValue={inputData.values[idx]} onChange={handerInputChange} />
      <InputASubLabel>최대</InputASubLabel>
      <InputForm ref={inputRef} defaultValue={inputData.values[idx]} onChange={handerInputChange} />
    </RowWrapper>
  );
};

export default InputRowA;
