import { useState } from "react";
import FileSelector from "./components/FileSelector";
import { Body, Header, HeaderSubTitle, HeaderTitle } from "./styles";
import FileBox from "./components/FileBox";
import InputBox from "./components/InputBox";
import BottomBox from "./components/BottomBox";

const App = () => {
  const [filePath, setFilePath] = useState<string>("");

  return (
    <Body>
      <Header>
        <HeaderTitle>엑셀 자동화</HeaderTitle>
        <HeaderSubTitle>v24.03.02</HeaderSubTitle>
      </Header>
      {filePath === "" ? <FileSelector setFilePath={setFilePath} /> : <FileBox filePath={filePath} setFilePath={setFilePath} />}
      <InputBox />
      <BottomBox filePath={filePath} />
    </Body>
  );
};

export default App;
