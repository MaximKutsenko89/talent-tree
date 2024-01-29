import styled from "@emotion/styled";
import arrowDisabled from "./img/down.png";
import arrowActive from "./img/down2.png";
import hoverImg from "./img/hover.png";
import { css } from "@emotion/react";

export type Position = "default" | "end";

type TalentItemPops = {
  $img: string;
  $disabled?: boolean;
  $position: Position;
  $isEmpty?: boolean;
  $full?: boolean;
};
export const TalentPoints = styled.div`
  position: absolute;
  bottom: -10px;
  right: -10px;
  background: #000;
  color: #40bf40cc;
  border-radius: 5px;
  padding: 2px;
  font-size: 10px;
  user-select: none;
`;
export const TalentItem = styled.div<TalentItemPops>`
  background: ${(props) =>
    props.$isEmpty
      ? "transparent"
      : `url(${props.$img}) no-repeat center/cover`};
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 10px;
  border: ${(props) => (props.$isEmpty ? "none" : "3px solid ")};
  border-color: ${(props) => (props.$full ? "#ffd100cc" : "#3b8538")};
  pointer-events: ${(props) => (props.$isEmpty ? "none" : "all")};
  cursor: pointer;
  filter: grayscale(${(props) => (props.$disabled ? "1" : "0")});
  margin: ${(props) => (props.$position === "default" ? "0" : "0 0 0 70px")};
  z-index: 2;
  ${(props) =>
    props.$full &&
    css`
      ${TalentPoints} {
        color: #ffd100cc;
      }
    `}
  &::before {
    content: "";
    display: none;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: url(${hoverImg}) no-repeat center/cover;
  }
  &:hover:before {
    display: block;
  }
`;
export const TalentArrow = styled.div<{ $styles: string; $active: boolean }>`
  position: absolute;
  content: "";
  background: url(${(props) => (props.$active ? arrowActive : arrowDisabled)})
    no-repeat bottom center;
  width: 100%;
  z-index: 1;
  ${(props) => props.$styles && props.$styles}
`;

export const TalentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  gap: 20px;
`;
