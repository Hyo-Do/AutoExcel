import { InputData } from "../../interfaces/inputData";
import { BoxWrapper, OptionBtn, RunBtn } from "./styles";

interface BottomBoxProps {
  mode: number;
  filePath: string;
  inputData: InputData;
}

const BottomBox = ({ mode, filePath, inputData }: BottomBoxProps) => {
  return (
    <BoxWrapper>
      <OptionBtn>초기화</OptionBtn>
      <RunBtn
        onClick={() => {
          if (filePath !== "") window.ipc.send("edit-excel", { path: filePath, data: inputData, mode: mode });
        }}
      >
        실행
      </RunBtn>
    </BoxWrapper>
  );
};

export default BottomBox;
