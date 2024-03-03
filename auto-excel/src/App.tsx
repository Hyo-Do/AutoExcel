import { useState } from "react";
import FileSelector from "./components/FileSelector";
import { Body, Header, HeaderSubTitle, HeaderTitle } from "./styles";
import FileBox from "./components/FileBox";
import InputBox from "./components/InputBox";
import BottomBox from "./components/BottomBox";
import { InputData } from "./interfaces/inputData";
import TabBox from "./components/TabBox";

const App = () => {
  const [mode, setMode] = useState<number>(0);
  const [filePath, setFilePath] = useState<string>("");
  const [inputData, setInputData] = useState<InputData>({
    minV: 615.0,
    maxV: 620.0,
    deltaV: 1.0,
    minA: 1.6,
    maxA: 2.1,
    deltaA: 0.1,
  });

  return (
    <Body>
      <Header>
        <HeaderTitle>엑셀 자동화</HeaderTitle>
        <HeaderSubTitle>v24.03.03</HeaderSubTitle>
      </Header>
      {filePath === "" ? <FileSelector setFilePath={setFilePath} /> : <FileBox filePath={filePath} setFilePath={setFilePath} />}
      <TabBox mode={mode} setMode={setMode} />
      <InputBox mode={mode} inputData={inputData} setInputData={setInputData} />
      <BottomBox mode={mode} filePath={filePath} inputData={inputData} />
    </Body>
  );
};

export default App;