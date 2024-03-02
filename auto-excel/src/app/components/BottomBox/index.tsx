import { BoxWrapper, OptionBtn, RunBtn } from "./styles";

interface BottomBoxProps {
  filePath: string;
}

const BottomBox = ({ filePath }: BottomBoxProps) => {
  return (
    <BoxWrapper>
      <OptionBtn>초기화</OptionBtn>
      <RunBtn
        onClick={() => {
          if (filePath !== "") window.ipc.send("edit-excel", filePath);
        //   if (filePath !== "") editExcel(filePath);
        }}
      >
        실행
      </RunBtn>
    </BoxWrapper>
  );
};

export default BottomBox;
