import styled from "styled-components";

export const TitleBox = styled.div`
  margin: 17px 25px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -1.5px;
`;

export const SubTitle = styled.div`
  margin: -3px 0 19px 0;

  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0.8px;
  color: #555;
`;

export const InputBox = styled.div`
  margin: 0 22px;
  padding: 10px 4px;

  border: 0;
  border-top: 1px solid #ccc;
`;

export const Label = styled.div`
  font-size: 16px;
  letter-spacing: -0.5px;
  font-weight: 400;
  color: #777;
`;

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
