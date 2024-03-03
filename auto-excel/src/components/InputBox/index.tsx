import { InputData } from "../../interfaces/inputData";
import { BoxWrapper, Divider, NullSection } from "./styles";
import inputFormData from "../../constants/inputFormData";
import InputRow from "./InputRow";

interface InputBoxProps {
  mode: number;
  inputData: InputData;
  setInputData: React.Dispatch<React.SetStateAction<InputData>>;
}

const InputBox = ({ mode, inputData, setInputData }: InputBoxProps) => {
  return (
    <BoxWrapper>
      {mode === 0 ? (
        inputFormData
          .slice(0, 3)
          .map((e, i) => <InputRow key={i} id={e.id} symbol={e.symbol} label={e.label} inputData={inputData} setInputData={setInputData} />)
      ) : (
        <NullSection>
          현재 모드에서는 지원하지 않는 입력란입니다.
        </NullSection>
      )}
      <Divider />
      {inputFormData.slice(3, 6).map((e, i) => (
        <InputRow key={i} id={e.id} symbol={e.symbol} label={e.label} inputData={inputData} setInputData={setInputData} />
      ))}
    </BoxWrapper>
  );
};

export default InputBox;
