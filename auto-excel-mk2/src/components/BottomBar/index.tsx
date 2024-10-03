import { useContext, useEffect } from "react";
import { BtmBtnBox, CancleBtm, SubmitBtn } from "./styles";
import { FileContext } from "../../contexts/FileContext";

const BottomBar = () => {
  const { filePath, dataList } = useContext(FileContext);

  const onSubmit = () => {
    if (filePath !== "") {
      window.ipc.send("edit-excel", { path: filePath, data: dataList });
    }
  };

  const onEditExcelEnd = (data: any) => {
    alert(`엑셀 작업이 정상적으로 완료되었습니다.\n수정한 셀 개수: ${data?.cnt ?? 0} 개`);
  };

  useEffect(() => {
    window.ipc.on("edit-excel-end", onEditExcelEnd);

    return () => window.ipc.offAll("edit-excel-end");
  }, []);

  return (
    <BtmBtnBox>
      <CancleBtm>취소</CancleBtm>
      <SubmitBtn $active={filePath !== ""} onClick={onSubmit}>
        실행
      </SubmitBtn>
    </BtmBtnBox>
  );
};

export default BottomBar;
