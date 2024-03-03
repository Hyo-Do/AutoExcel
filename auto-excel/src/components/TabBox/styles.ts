import styled from "styled-components";

type TabBtnProps = {
  $active: boolean;
};

export const BoxWrapper = styled.div`
  margin-top: 12px;
  margin-left: 6px;
  display: flex;
  gap: 14px;
  user-select: none;
`;

export const TabBtn = styled.div<TabBtnProps>`
  font-size: 16px;
  letter-spacing: -1px;
  color: ${(props) => (props.$active ? "#111" : "#11111155")};
  font-weight: ${(props) => (props.$active ? "800" : "600")};
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.$active ? "#111" : "#11111188")};
  }
`;

export const TabBorder = styled.div<TabBtnProps>`
  height: 3px;
  ${(props) =>
    props.$active &&
    `
      margin: 0 6px;
      margin-top: 4px;
      margin-bottom: -2px;
      border-radius: 4px;
      background-color: #333;
    `}
`;
