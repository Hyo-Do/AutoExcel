import { BoxWrapper, CloseBtn, ExcelLogo, FileName, FilePath, Header } from "./styles";

interface FileBoxProps {
    filePath: string;
    setFilePath: React.Dispatch<React.SetStateAction<string>>;
  }

const FileBox = ({ filePath, setFilePath }: FileBoxProps) => {
  return (
    <BoxWrapper>
      <Header>
        <ExcelLogo>
          <img src="/excel_logo.svg" alt="excel-logo" />
        </ExcelLogo>
        <FileName>{filePath.split("\\").slice(-1)}</FileName>
        <CloseBtn onClick={() => setFilePath("")}/>
      </Header>
      <FilePath>{filePath}</FilePath>
    </BoxWrapper>
  );
};

export default FileBox;
