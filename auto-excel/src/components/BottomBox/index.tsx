import { useEffect } from "react";
import { BoxWrapper, OptionBtn, RunBtn } from "./styles";

interface BottomBoxProps {
  mode: number;
  filePath: string;
  inputData: any;
}

const BottomBox = ({ mode, filePath, inputData }: BottomBoxProps) => {
  useEffect(() => {
    window.ipc.on("edit-excel-end", (data: any) => {
      alert(`엑셀 작업이 정상적으로 완료되었습니다.\n변환한 행: ${data?.rowCnt}(개), 변환한 셀: ${data?.cellCnt}(개)`);
    });
    return () => window.ipc.offAll("edit-excel-end");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
