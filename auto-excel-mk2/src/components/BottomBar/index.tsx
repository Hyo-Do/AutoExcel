import { BtmBtnBox, CancleBtm, SubmitBtn } from "./styles";

const BottomBar = () => {
  return (
    <BtmBtnBox>
      <CancleBtm>취소</CancleBtm>
      <SubmitBtn $active={true}>실행</SubmitBtn>
    </BtmBtnBox>
  );
};

export default BottomBar;
