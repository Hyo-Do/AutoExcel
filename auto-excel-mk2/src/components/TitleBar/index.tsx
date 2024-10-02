import { SubTitle, Title, TitleBox } from "./styles";

const TitleBar = () => {
  return (
    <TitleBox>
      <Title>
        Auto Excel <span style={{ color: "#666" }}>mk.2</span>
      </Title>
      <SubTitle>엑셀 자동화 ver. 24.10.03</SubTitle>
    </TitleBox>
  );
};

export default TitleBar;
