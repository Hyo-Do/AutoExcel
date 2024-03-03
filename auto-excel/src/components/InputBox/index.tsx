import { BoxWrapper, Divider } from "./styles";
import inputFormData from "../../constants/inputFormData";
import InputRow from "./InputRow";
import { useEffect } from "react";
import InputRowA from "./InputRowA";

interface InputBoxProps {
  mode: number;
  inputData: any;
  setMode: React.Dispatch<React.SetStateAction<number>>;
  setInputData: React.Dispatch<React.SetStateAction<any>>;
}

const InputBox = ({ mode, inputData, setMode, setInputData }: InputBoxProps) => {
  useEffect(() => {
    window.ipc.on("read-excel-end", (data: any) => {
      setMode(data.mode);
      if (data.mode === 0) {
        setInputData((_data: any) => ({
          ..._data,
          minV: parseInt(data.sheetValues[0]) - 1,
          maxV: parseInt(data.sheetValues[0]) + 2,
          minA: parseFloat((parseFloat(data.sheetValues[1]) - 0.1).toFixed(1)),
          maxA: parseFloat((parseFloat(data.sheetValues[1]) + 0.2).toFixed(1)),
        }));
      } else if (data.mode === 1) {
        setInputData((_data: any) => ({
          ..._data,
          values: data.sheetValues.map((val: any) => [
            parseFloat((parseFloat(val) - 0.1).toFixed(1)),
            parseFloat((parseFloat(val) + 0.1).toFixed(1)),
          ]),
          names: data.sheetNames,
        }));
      }
    });
    return () => window.ipc.offAll("read-excel-end");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mode === 0 ? (
    <BoxWrapper>
      {inputFormData.slice(0, 3).map((e, i) => (
        <InputRow key={i} id={e.id} symbol={e.symbol} label={e.label} inputData={inputData} setInputData={setInputData} />
      ))}
      <Divider />
      {inputFormData.slice(3, 6).map((e, i) => (
        <InputRow key={i} id={e.id} symbol={e.symbol} label={e.label} inputData={inputData} setInputData={setInputData} />
      ))}
    </BoxWrapper>
  ) : (
    <BoxWrapper>
      <div style={{overflowY: "auto", maxHeight: "200px"}}>
        {inputData.values.map((e: any, i: number) => (
          <InputRowA key={i} idx={i} inputData={inputData} setInputData={setInputData} />
        ))}
      </div>
      <Divider />
      {inputFormData.slice(5).map((e, i) => (
        <InputRow key={i} id={e.id} symbol={e.symbol} label={e.label} inputData={inputData} setInputData={setInputData} />
      ))}
    </BoxWrapper>
  );
};

export default InputBox;
