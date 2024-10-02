import styled from "styled-components";
import { InputBox } from "../../styles";

export const NumberFormBox = styled(InputBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NumberBtn = styled.div`
  height: 30px;
  width: 31px;
  padding-bottom: 1px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1.5px solid #333;
  border-radius: 999px;

  cursor: pointer;
`;

export const PlusBtn = styled(NumberBtn)`
  font-size: 25px;
`;

export const MinusBtn = styled(NumberBtn)`
  height: 31px;
  padding-bottom: 0px;

  font-size: 20px;
`;

export const LabelBox = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  user-select: none;
`;

export const LabelTitle = styled.div`
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const LabelSubTitle = styled.div`
  margin-left: 3px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.2px;
  color: #666;
`;

export const NumberInput = styled.input`
  width: 50px;
  font-size: 28px;
  text-align: right;

  padding: 8px 16px 7px 16px;
  border: 1px solid #eee;
  border-radius: 20px;
  background-color: #f4f6f7;
`;
