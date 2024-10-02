import NumberForm from "./components/NumberForm";
import { BtmBtnBox, CancleBtm, InputBox, Label, SubmitBtn, SubTitle, Title, TitleBox } from "./styles";

function App() {
  return (
    <>
      <TitleBox>
        <Title>Auto Excel mk.2</Title>
        <SubTitle>엑셀 자동화 ver. 24.10.03</SubTitle>
      </TitleBox>
      <InputBox>
        <Label>선택한 파일</Label>
      </InputBox>
      <NumberForm />
      <NumberForm />
      <BtmBtnBox>
        <CancleBtm>취소</CancleBtm>
        <SubmitBtn $active={true}>실행</SubmitBtn>
      </BtmBtnBox>
    </>
  );
}

export default App;
