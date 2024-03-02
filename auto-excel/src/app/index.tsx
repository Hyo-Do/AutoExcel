import FileSelector from "./components/FileSelector";
import { Body, Header, HeaderSubTitle, HeaderTitle } from "./styles";

const App = () => {
  return (
    <Body>
        <Header>
            <HeaderTitle>엑셀 자동화</HeaderTitle>
            <HeaderSubTitle>v24.03.02</HeaderSubTitle>
        </Header>
        <FileSelector />
    </Body>
  );
};

export default App;
