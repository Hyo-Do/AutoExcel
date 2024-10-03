import styled from "styled-components";

export const FileFormBox = styled.div`
  margin: 0 22px;
  padding: 9px 4px;

  border: 0;
  border-top: 1px solid #d3d3d3;
`;

export const FileFormTitle = styled.div`
  font-size: 15px;
  letter-spacing: -0.8px;
  font-weight: 400;
  color: #666;
  user-select: none;
`;

const ContentBox = styled.div`
  height: 70px;
  width: calc(100% + 8px);
  margin: 4px 0 1px -4px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

export const NullStateBox = styled(ContentBox)`
  gap: 6px;

  border: 1px dashed #ccc;
  font-size: 15px;
  letter-spacing: -0.2px;
  color: #999;
`;

export const FileBtn = styled.div`
  padding: 4.5px 10px;

  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f3f5f7;

  color: #333;
  font-size: 15px;

  cursor: pointer;
`;

export const FileInfoBox = styled(ContentBox)`
  position: relative;
  justify-content: flex-start;

  border: 1px solid #eee;
  background-color: #f3f5f7;
`;

export const FileInfoTextArea = styled.div`
  max-width: 75%;
`;

export const FileTitle = styled.div`
  font-size: 16.5px;
  font-weight: 500;
  letter-spacing: -0.9px;

  color: #333;
`;

export const FilePath = styled.div`
  margin-top: 1px;

  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: -0.2px;

  color: #888;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;

  font-size: 14px;
  color: #888;

  cursor: pointer;
`;