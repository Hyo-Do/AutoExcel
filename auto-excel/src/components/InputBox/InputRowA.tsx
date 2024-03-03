import React, { useEffect, useRef } from "react";
import { InputALabel, InputASubLabel, InputASymbol, InputForm, RowWrapper } from "./styles";

interface InputRowAProps {
  idx: number;
  inputData: any;
  setInputData: React.Dispatch<React.SetStateAction<any>>;
}

const InputRowA = ({ idx, inputData, setInputData }: InputRowAProps) => {
  const inputMinRef = useRef<HTMLInputElement | null>(null);
  const inputMaxRef = useRef<HTMLInputElement | null>(null);

  const handerInputChange = (event: React.ChangeEvent<HTMLInputElement>, j: number) => {
    const newValue = event.target.value !== "" ? parseFloat(event.target.value) : 0;
    setInputData((_data: any) => ({ ..._data, values: _data.values.map((e: number[], i: number) => (i === idx ? (j === 0 ? [newValue, e[1]] : [e[0], newValue]) : e)) }));
    event.target.value = `${newValue}`;
  };

  useEffect(() => {
    if (idx === undefined || !inputMinRef.current || !inputMaxRef.current) return;
    inputMinRef.current.value = inputData.values[idx][0];
    inputMaxRef.current.value = inputData.values[idx][1];
  }, [idx, inputData]);

  return (
    <RowWrapper>
      <InputASymbol>{idx + 1}</InputASymbol>
      <InputALabel>{inputData.names[idx]}</InputALabel>
      <InputASubLabel>최소</InputASubLabel>
      <InputForm ref={inputMinRef} defaultValue={inputData.values[idx][0]} onChange={(e) => handerInputChange(e, 0)} />
      <InputASubLabel>최대</InputASubLabel>
      <InputForm ref={inputMaxRef} defaultValue={inputData.values[idx][1]} onChange={(e) => handerInputChange(e, 1)} />
    </RowWrapper>
  );
};

export default InputRowA;
