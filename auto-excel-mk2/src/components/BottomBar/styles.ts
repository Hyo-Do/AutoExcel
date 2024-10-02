import styled from "styled-components";

export const BtmBtnBox = styled.div`
  position: absolute;
  bottom: 12px;
  width: calc(100% - 30px);
  padding: 0 15px;

  display: flex;
  justify-content: center;
  gap: 8px;
`;

const BtmBtn = styled.div`
  display: inline-block;
  width: 49%;
  padding: 11px 0;
  border-radius: 12px;
  user-select: none;
  text-align: center;
  letter-spacing: -0.2px;
  font-size: 15.5px;
  cursor: pointer;
`;

export const CancleBtm = styled(BtmBtn)`
  background-color: white;
  border: 1px solid #646a6e40;

  &:hover {
    background-color: #eee;
  }
`;

type SubmitBtnProps = {
  $active: boolean;
};

export const SubmitBtn = styled(BtmBtn)<SubmitBtnProps>`
  border: ${(props) => (props.$active ? "0" : "1px solid #646a6e10")};
  background-color: ${(props) => (props.$active ? "#333" : "#eaecee")};
  color: ${(props) => (props.$active ? "#fff" : "#999")};

  &:hover {
    background-color: ${(props) => (props.$active ? "#444" : "#eaecee")};
  }
`;
