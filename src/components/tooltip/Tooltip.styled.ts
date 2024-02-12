import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../global.styled";

type TitleColorVariant = "colored" | "transparent" | "default" | "danger";

export const Rank = styled.div`
  color: ${theme.colors.transparent};
`;
export const Title = styled.div`
  font-size: 14px;
`;
export const SubTitle = styled.div<{ $colorVariant: TitleColorVariant }>`
  font-size: 14px;
  ${(props) => {
    switch (props.$colorVariant) {
      case "colored":
        return css`
          color: ${theme.colors.allowed};
        `;
      case "transparent":
        return css`
          color: ${theme.colors.transparent};
        `;
      case "default":
        return css`
          color: ${theme.colors.default};
        `;
      case "danger":
        return css`
          color: ${theme.colors.danger};
          margin-block: 0 5px;
        `;
      default:
        break;
    }
  }}
`;
export const Description = styled.p`
  color: ${theme.colors.full};
  margin-inline: 0 10px;
`;
export const ToolTipAddDesc = styled.div`
  display: grid;
  margin-block: 0 10px;
  grid-template-columns: repeat(2, 1fr);
  div:nth-of-type(even) {
    text-align: right;
  }
`;
export const ReqDesc = styled.p``;
export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
  align-items: center;
  font-weight: 700;
`;
export const Inner = styled.div<{
  $top: number;
  $left: number;
  $x: number;
  $y: number;
}>`
  position: absolute;
  border: 1px solid;
  min-height: 100px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 70%);
  z-index: 2;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
  border-radius: 5px;
  width: 300px;
  line-height: 1.2;

  transform: translate(${(props) => props.$x}%, ${(props) => props.$y}%);
`;
