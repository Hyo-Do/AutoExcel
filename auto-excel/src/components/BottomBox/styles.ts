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
  font-size: 15.5px;

  &:hover {
    cursor: pointer;
  }
`;

type RunBtnProps = {
  $active: boolean;
};

export const RunBtn = styled(Btn)<RunBtnProps>`
  border: ${(props) => (props.$active ? "0" : "1px solid #646a6e10")};
  background-color: ${(props) => (props.$active ? "#333" : "#eaecee")};
  color: ${(props) => (props.$active ? "#fff" : "#999")};

  &:hover {
    background-color: ${(props) => (props.$active ? "#444" : "#eaecee")};
  }
`;

export const OptionBtn = styled(Btn)`
  background-color: white;
  border: 1px solid #646a6e40;

  &:hover {
    background-color: #eee;
  }
`;
