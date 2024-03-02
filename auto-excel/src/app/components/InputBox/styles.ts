import styled from "styled-components";

export const BoxWrapper = styled.div`
  padding: 8px 1% 10px 2%;
  position: relative;
  margin-top: 10px;

  border-radius: 8px;
  border: 1.5px solid #11111115;
`;

export const InputRow = styled.div`
  padding: 2.5px 8px;
  height: 35px;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const InputSymbol = styled.div`
  width: 5.5%;
  margin-bottom: 4px;
  color: #646a6e;
  font-size: 16px;
  font-weight: 900;
  text-align: right;
  padding-right: 1%;
`;

export const InputLabel = styled.div`
  width: 19%;
  margin-bottom: 4px;
  color: #646a6f;
  font-size: 15.5px;
  font-weight: 400;
  letter-spacing: -0.3px;
`;

export const InputForm = styled.input.attrs({ type: "text" })`
  height: 100%;
  width: 25%;
  margin-right: 2px;
  border: 0;
  border-radius: 12px;
  background-color: #f3f5f7;
`;

export const NumBtn = styled.div`
  height: 30px;
  width: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 8px;
  border: 1px solid #646a6e33;
  color: #646a6e;
  font-size: 13.5px;
  letter-spacing: -1px;

  &:hover {
    background-color: #646a6e12;
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  margin: 10px 2% 8px 6px;
  height: 1.5px;
  background-color: #646a6e20;
`;
