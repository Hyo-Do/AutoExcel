import { InputData } from "../../interfaces/inputData";
import { BoxWrapper, OptionBtn, RunBtn } from "./styles";

interface BottomBoxProps {
  filePath: string;
  inputData: InputData;
}

const BottomBox = ({ filePath, inputData }: BottomBoxProps) => {
  return (
    <BoxWrapper>
      <OptionBtn>초기화</OptionBtn>
      <RunBtn
        onClick={() => {
          if (filePath !== "") window.ipc.send("edit-excel", { path: filePath, data: inputData });
        }}
      >
        실행
      </RunBtn>
    </BoxWrapper>
  );
};

export default BottomBox;
