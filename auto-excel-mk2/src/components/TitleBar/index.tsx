import { SubTitle, Title, TitleBox } from "./styles";

const TitleBar = () => {
  return (
    <TitleBox>
      <Title>
        Auto Excel mk.2
      </Title>
      <SubTitle><span style={{fontWeight: "400"}}>솔라파워 엑셀 자동화</span> ver. 24.10.03</SubTitle>
    </TitleBox>
  );
};

export default TitleBar;
