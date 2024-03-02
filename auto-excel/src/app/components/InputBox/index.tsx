import { InputData } from "../../interfaces/inputData";
import { BoxWrapper, Divider } from "./styles";
import inputFormData from "../../constants/inputFormData";
import InputRow from "./InputRow";

interface InputBoxProps {
  inputData: InputData;
  setInputData: React.Dispatch<React.SetStateAction<InputData>>;
}

const InputBox = ({ inputData, setInputData }: InputBoxProps) => {
  return (
    <BoxWrapper>
      {inputFormData.slice(0, 3).map((e, i) => (
        <InputRow key={i} id={e.id} symbol={e.symbol} label={e.label} inputData={inputData} setInputData={setInputData} />
      ))}
      <Divider />
      {inputFormData.slice(3, 6).map((e, i) => (
        <InputRow key={i} id={e.id} symbol={e.symbol} label={e.label} inputData={inputData} setInputData={setInputData} />
      ))}
    </BoxWrapper>
  );
};

export default InputBox;
