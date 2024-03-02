import styled from "styled-components";

export const BoxWrapper = styled.div`
  height: 80px;
  padding: 7px 12px;
  position: relative;

  border-radius: 8px;
  background-color: #f3f5f7;
  border: 1px solid #11111110;
`;

export const ExcelLogo = styled.div`
  height: 25px;
  width: 25px;
  padding: 10px 10px 7px 8px;

  background-color: white;
  border-radius: 12px;
  border: 1px solid #11111118;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FileName = styled.div`
  width: 83%;
  color: #222;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 18px;
`;

export const FilePath = styled.div`
  margin-top: 5px;
  margin-left: 4px;
  color: #777;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;

  &:hover::after {
    color: #555;
    font-weight: 700;
  }
  
  &::after {
    content: "×";
    cursor: pointer;
    color: #222;
  }
`;
