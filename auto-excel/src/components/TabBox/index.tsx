import { BoxWrapper, TabBorder, TabBtn } from "./styles";

interface TabBoxProps {
  mode: number;
  setMode: React.Dispatch<React.SetStateAction<number>>;
}

const TabBox = ({ mode, setMode }: TabBoxProps) => {
  const changeMode = (mode: number) => setMode(mode);

  return (
    <BoxWrapper>
      <TabBtn $active={mode === 0} onClick={() => changeMode(0)} title="전류&전압을 자동으로 입력합니다. (신규버전 방식)">
        전류&전압모드
        <TabBorder $active={mode === 0} />
      </TabBtn>
      <TabBtn $active={mode === 1} onClick={() => changeMode(1)} title="전류를 자동으로 입력합니다. (구버전 방식)">
        전류모드
        <TabBorder $active={mode === 1} />
      </TabBtn>
    </BoxWrapper>
  );
};

export default TabBox;
