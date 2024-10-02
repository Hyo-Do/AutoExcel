import styled from "styled-components";

export const FileFormBox = styled.div`
  margin: 0 22px;
  padding: 9px 4px;

  border: 0;
  border-top: 1px solid #d3d3d3;
`;

export const FileFormTitle = styled.div`
  font-size: 15.5px;
  letter-spacing: -0.5px;
  font-weight: 400;
  color: #666;
  user-select: none;
`;

export const NullStateBox = styled.div`
  height: 55px;
  width: calc(100% + 8px);
  margin: 5px 0 1px -4px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px dashed #ccc;
  border-radius: 8px;

  color: #aaa;
`;
