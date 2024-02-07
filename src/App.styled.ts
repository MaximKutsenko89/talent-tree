import styled from "@emotion/styled";
import { css } from "@emotion/react";
import arrowDisabled from "./img/down.png";
import arrowActive from "./img/down2.png";
import hoverImg from "./img/hover.png";
import { theme } from "./global.styled";

export type Position = "default" | "end";

export const Button = styled.button`
  background: none;
  border-radius: 4px;
  border: 2px solid #404040;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  width: calc(100% - 20px);
  color: #9d9d9d;
  min-height: 35px;
  ${theme.mixins.flexCenter};
  span {
    color: ${theme.colors.danger};
    margin: 0 10px 0 0;
    font-size: 20px;
  }
`;
export const MainTitle = styled.h1`
  color: #fff;
  font-family: "Open Sans", Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 20px 0;
  text-align: center;
`;
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
export const TalentItem = styled.div<{
  $img: string;
  $disabled?: boolean;
  $isEmpty?: boolean;
  $full?: boolean;
}>`
  background: ${(props) =>
    props.$isEmpty
      ? "transparent"
      : `url(${props.$img}) no-repeat center/cover`};
  width: 40px;
  height: 40px;
  user-select: none;

  border-radius: 5px;
  border: ${(props) => (props.$isEmpty ? "none" : "2px solid ")};
  border-color: ${(props) =>
    props.$full ? theme.colors.full : theme.colors.allowed};
  pointer-events: ${(props) => (props.$isEmpty ? "none" : "all")};
  cursor: pointer;
  filter: grayscale(${(props) => (props.$disabled ? "1" : "0")});

  ${(props) =>
    props.$full &&
    css`
      ${TalentPoints} {
        color: ${theme.colors.full};
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
  pointer-events: none;
  background: url(${(props) => (props.$active ? arrowActive : arrowDisabled)})
    no-repeat bottom center;
  width: 100%;
  z-index: 1;
  ${(props) => props.$styles && props.$styles}
`;

export const TalentWrap = styled.div<{ $columns: number; $url: string }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 50px);
  gap: 20px;
  background: url(${(props) => props.$url}) no-repeat center/100% 100%;
  box-shadow: inset 0 0 30px 10px #000;
  justify-content: center;
  padding: 20px;
`;
export const BranchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const BranchInner = styled.div<{ $url: string }>`
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  background: #000;
`;
export const BranchInfoWrap = styled.div`
  display: flex;
  padding: 5px 10px;
  align-items: center;
  font-weight: 700;
  gap: 10px;
`;
export const BranchInfoIcon = styled.div<{ $url: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: url(${(props) => props.$url}) no-repeat center/cover;
`;
export const BranchInfoTitle = styled.div``;
export const BranchInfoPoints = styled.div`
  flex: 1 1 auto;
  text-align: right;
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 10px auto;
  padding: 4px 10px;
  align-items: center;
  background-color: #101010;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 700;
  div {
    display: flex;
  }
`;
export const InfoIcon = styled.div<{ $url: string }>`
  width: 30px;
  height: 30px;
  background: url(${(props) => props.$url}) no-repeat center/cover;
  border-radius: 50%;
  margin: 0 10px 0 0;
`;
export const InfoTitle = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  margin: 0 10px 0 0;
`;
export const InfoPointsWrap = styled.div`
  span {
    margin: 0 5px 0 0;
  }
`;
export const InfoPointsLeft = styled.div`
  color: #9d9d9d;
  span {
    color: ${theme.colors.default};
  }
`;
export const InfoPoint = styled.span<{ $colored: boolean }>`
  color: ${(props) => (!props.$colored ? "#9d9d9d" : theme.colors.default)};
`;
