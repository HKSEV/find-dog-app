import { css } from "styled-components";

export const MainWhite = "#F1F3F5";
export const White = "#FFF";

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FlexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FlexAround = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const FlexStart = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const FlexEnd = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const BoxShadow = css`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;
export const TransitionAll = css`
  transition: all 0.2s ease-in-out;
`;
export const Ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const WebkitBox = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const MainMaxWidth = css`
  max-width: 480px;
`;
