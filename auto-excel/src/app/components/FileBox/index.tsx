import { BoxWrapper, ExcelLogo } from "./styles";

const FileBox = ({filePath} : {filePath: string}) => {
  return (
    <BoxWrapper>
      <ExcelLogo>
        <img src="/excel_logo.svg" alt="excel-logo" />
        <div>{filePath}</div>
      </ExcelLogo>
    </BoxWrapper>
  );
};

export default FileBox;
