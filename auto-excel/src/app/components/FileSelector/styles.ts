import styled from "styled-components";

type DropAreaProps = {
  $dragging: boolean;
};

export const DropArea = styled.div<DropAreaProps>`
  background-color: #888;
  height: 60px;
  border: 2px dashed ${(props) => props.$dragging ? "blue" : "gray"};
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
