import styled from "styled-components";

export const BoxWrapper = styled.div`
  /* margin-top: 10px; */
  padding: 8px 1% 10px 2%;
  position: relative;

  border-radius: 8px;
  border: 1.5px solid #11111115;
`;

export const RowWrapper = styled.div`
  padding: 2.5px 8px;
  height: 35px;
  user-select: none;

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

export const InputForm = styled.input.attrs({ type: "number" })`
  height: 100%;
  width: 17%;
  padding: 0 12px;
  margin-right: 2px;
  border: 0;
  border-radius: 12px;
  background-color: #f3f5f7;

  letter-spacing: -0.5px;
  font-size: 15.5px;
  font-weight: 500;
`;

export const NumBtn = styled.div`
  height: 32px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 8px;
  border: 1px solid #646a6e33;
  color: #444a4e99;
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: -1px;
  
  &:hover {
    background-color: #646a6e15;
    color: #111;
    font-weight: 800;
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  margin: 10px 2% 8px 6px;
  height: 1.5px;
  background-color: #646a6e20;
`;

export const NullSection = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #444a4e66;
  letter-spacing: -0.6px;
  font-size: 14px;
`;

/**
 * InputRowA
 */

export const InputASymbol = styled.div`
  width: 3%;
  margin-bottom: 4px;
  color: #646a6e;
  font-size: 16px;
  font-weight: 900;
  text-align: right;
  padding-right: 1%;
`;

export const InputALabel = styled.div`
  width: 24%;
  margin-bottom: 4px;
  color: #646a6f;
  font-size: 15.5px;
  font-weight: 400;
  letter-spacing: -0.3px;
`;

export const InputASubLabel = styled.div`
  width: 9%;
  margin-bottom: 4px;
  padding-right: 3px;
  color: #a4aaaf;
  text-align: right;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -1px;
`;
