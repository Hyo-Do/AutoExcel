import styled from "styled-components";

export const BoxWrapper = styled.div`
  position: absolute;
  bottom: 14px;
  width: 94%;

  margin-top: 12px;
  display: flex;
  justify-content: end;
  gap: 8px;
`;

const Btn = styled.div`
  display: inline-block;
  width: 49%;
  padding: 11px 0;
  border-radius: 12px;
  user-select: none;
  text-align: center;
  letter-spacing: -0.2px;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const RunBtn = styled(Btn)`
  background-color: #333;
  color: white;

  &:hover {
    background-color: #444;
  }
`;

export const OptionBtn = styled(Btn)`
  background-color: white;
  border: 1px solid #646a6e40;

  &:hover {
    background-color: #eee;
  }
`;
