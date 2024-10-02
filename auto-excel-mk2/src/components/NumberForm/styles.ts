import styled from "styled-components";

export const NumberFormBox = styled.div`
  margin: 0 22px;
  padding: 9px 4px;

  border: 0;
  border-top: 1px solid #ccc;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NumberBtn = styled.div`
  height: 30px;
  width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1.5px solid #333;
  border-radius: 999px;

  cursor: pointer;
  user-select: none;
`;

export const PlusBtn = styled(NumberBtn)`
  font-size: 25px;
`;

export const MinusBtn = styled(NumberBtn)`
  font-size: 20px;
`;

export const LabelBox = styled.div`
  min-width: 100px;
  padding-bottom: 1px;
  display: flex;
  flex-direction: column;
  /* gap: 2px; */

  user-select: none;
`;

export const LabelTitle = styled.div`
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const LabelSubTitle = styled.div`
  margin-left: 2px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.2px;
  color: #666;
`;

export const NumberInput = styled.input`
  margin-right: -10px;
  width: 50px;
  font-size: 28px;
  text-align: center;

  padding: 8.5px 16px 7.5px 16px;
  border-radius: 20px;
  border: 0;
  /* border: 1px solid #eee; */
  /* background-color: #f4f6f7; */

  cursor: pointer;
`;
