import { BoxWrapper, Divider, InputForm, InputLabel, InputRow, InputSymbol, NumBtn } from "./styles";

const InputBox = () => {
  return (
    <BoxWrapper>
      {[
        ["+V", "최대 전압", ""],
        ["-V", "최소 전압", ""],
        ["ΔV", "전압 차이", ""],
      ].map((e) => (
        <InputRow>
          <InputSymbol>{e[0]}</InputSymbol>
          <InputLabel>{e[1]}</InputLabel>
          <InputForm/>
          <NumBtn>+ 1</NumBtn>
          <NumBtn>+ 5</NumBtn>
          <NumBtn>- 1</NumBtn>
          <NumBtn>- 5</NumBtn>
        </InputRow>
      ))}
      <Divider />
      {[
          ["+A","최대 전류", ""],
          ["-A","최소 전류", ""],
          ["ΔA","전압 차이", ""],
        ].map((e) => (
            <InputRow>
            <InputSymbol>{e[0]}</InputSymbol>
          <InputLabel>{e[1]}</InputLabel>
          <InputForm/>
          <NumBtn>+ 0.1</NumBtn>
          <NumBtn>+ 0.5</NumBtn>
          <NumBtn>- 0.1</NumBtn>
          <NumBtn>- 0.5</NumBtn>
        </InputRow>
      ))}
    </BoxWrapper>
  );
};

export default InputBox;
