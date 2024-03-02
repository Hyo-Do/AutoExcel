import styled from "styled-components";

type DropAreaProps = {
  $dragging: boolean;
};

export const DropArea = styled.div<DropAreaProps>`
  height: 60px;
  border-radius: 8px;
  background-color: ${(props) => props.$dragging ? "#f2f7ff" : "#c3cddb15"};
  border: 1.8px dashed ${(props) => props.$dragging ? "#328ee0" : "#c3cddb"};
`;

export const Btn = styled.div`
  background-color: #333;
  color: white;
  padding: 11px 0;
  text-align: center;
  border-radius: 14px;
  width: 80px;
  user-select: none;

  &:hover {
    background-color: #444;
    cursor: pointer;
  }
`;
