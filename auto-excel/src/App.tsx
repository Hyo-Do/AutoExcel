import { useState } from "react";
import FileSelector from "./components/FileSelector";
import { Body, Header, HeaderSubTitle, HeaderTitle } from "./styles";
import FileBox from "./components/FileBox";
import InputBox from "./components/InputBox";
import BottomBox from "./components/BottomBox";
import { InputData } from "./interfaces/inputData";
import StatusBar from "./components/StatusBar";

const App = () => {
  const [filePath, setFilePath] = useState<string>("");
  const [inputData, setInputData] = useState<InputData>({
    minV: 615.0,
    maxV: 625.0,
    deltaV: 1.0,
    minA: 1.5,
    maxA: 2.5,
    deltaA: 0.1,
  });

  return (
    <Body>
      <Header>
        <HeaderTitle>엑셀 자동화</HeaderTitle>
        <HeaderSubTitle>v24.03.02</HeaderSubTitle>
      </Header>
      {filePath === "" ? <FileSelector setFilePath={setFilePath} /> : <FileBox filePath={filePath} setFilePath={setFilePath} />}
      <InputBox inputData={inputData} setInputData={setInputData} />
      <BottomBox filePath={filePath} inputData={inputData} />
      <StatusBar />
    </Body>
  );
};

export default App;
