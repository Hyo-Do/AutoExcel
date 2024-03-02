import styled from "styled-components";

type DropAreaProps = {
  $dragging: boolean;
};

export const DropArea = styled.div<DropAreaProps>`
  height: 80px;
  padding: 7px 12px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  
  border-radius: 8px;
  background-color: ${(props) => (props.$dragging ? "#f2f7ff" : "#c3cddb15")};
  border: 1.8px dashed ${(props) => (props.$dragging ? "#328ee0" : "#c3cddb")};
`;

export const DropZone = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
`;

export const Btn = styled.div<DropAreaProps>`
  display: inline-block;
  margin: 5px 0;
  padding: 8px 14px;
  border-radius: 10px;
  user-select: none;
  z-index: ${(props) => (props.$dragging ? "1" : "3")};

  color: ${(props) => (props.$dragging ? "#9ca3af" : "white")};
  background-color: ${(props) => (props.$dragging ? "#e5e7eb" : "#333")};
  text-align: center;
  letter-spacing: -0.2px;
  font-size: 13.5px;

  &:hover {
    background-color: #444;
    cursor: pointer;
  }
`;

export const DropAreaHint = styled.div`
  color: #11111160;
  font-size: 14px;
  letter-spacing: -0.2px;
`;
