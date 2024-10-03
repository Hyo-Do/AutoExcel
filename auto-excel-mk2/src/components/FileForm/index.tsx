import { useEffect, useState } from "react";
import { FileBtn, FileFormBox, FileFormTitle, NullStateBox } from "./styles";

const FileForm = () => {
  const [filePath, setFilePath] = useState();

  const onOpenFile = () => window.ipc.send("open-file");
  const onOpenFileEnd = (data: any) => {
    setFilePath(data);
    window.ipc.send("read-excel", data);
  };

  const onReadExcelEnd = (data: any) => {
    console.log(data);
  };

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
      <NullStateBox>
        <FileBtn onClick={onOpenFile}>파일 선택</FileBtn>
        선택된 파일 없음
      </NullStateBox>
    </FileFormBox>
  );
};

export default FileForm;
