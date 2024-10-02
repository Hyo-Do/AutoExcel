import { FileFormBox, FileFormTitle, NullStateBox } from "./styles";

const FileForm = () => {
  return (
    <FileFormBox>
      <FileFormTitle>선택한 파일</FileFormTitle>
      <NullStateBox>
        선택된 파일 없음
      </NullStateBox>
    </FileFormBox>
  );
};

export default FileForm;
