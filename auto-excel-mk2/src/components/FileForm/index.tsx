import { useContext, useEffect } from "react";
import { CloseBtn, FileBtn, FileFormBox, FileFormTitle, FileInfoBox, FileInfoTextArea, FilePath, FileTitle, NullStateBox } from "./styles";
import ExcelLogoSvg from "../../assets/ExcelLogoSvg";
import { FileContext } from "../../contexts/FileContext";

const FileForm = () => {
  const { filePath, setFilePath } = useContext(FileContext);

  const onOpenFile = () => window.ipc.send("open-file");
  const onOpenFileEnd = (data: any) => {
    setFilePath(data);
    window.ipc.send("read-excel", data);
  };

  const onReadExcelEnd = (data: any) => {
    console.log(data);
  };

  const getFileTitle = (filePath: string) => filePath.split("\\").pop();

  useEffect(() => {
    window.ipc.on("open-file-end", onOpenFileEnd);
    window.ipc.on("read-excel-end", onReadExcelEnd);

    return () => {
      window.ipc.offAll("open-file-end");
      window.ipc.offAll("read-excel-end");
    };
  }, []);

  return (
    <FileFormBox>
      <FileFormTitle>선택한 파일</FileFormTitle>
      {filePath ? (
        <FileInfoBox>
          <div style={{ padding: "5px 13px 0 12px" }}>
            <ExcelLogoSvg />
          </div>
          <FileInfoTextArea>
            <FileTitle>{getFileTitle(filePath)}</FileTitle>
            <FilePath>{filePath}</FilePath>
          </FileInfoTextArea>
          <CloseBtn onClick={() => setFilePath("")}>✕</CloseBtn>
        </FileInfoBox>
      ) : (
        <NullStateBox>
          <FileBtn onClick={onOpenFile}>파일 선택</FileBtn>
          선택된 파일 없음
        </NullStateBox>
      )}
    </FileFormBox>
  );
};

export default FileForm;
