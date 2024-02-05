import { useRef, useState, useLayoutEffect } from "react";
import { Talent } from "../../types";
import * as S from "./Tooltip.styled";

type Props = {
  top: number;
  left: number;
  activeBranch: string;
  isAssociated: boolean;
  isAllowedToDecrement: boolean;
} & Talent;

const Tooltip = (props: Props) => {
  const {
    name,
    left,
    top,
    title,
    description,
    additionalDescription,
    requiredDescription,
    pointsSpent,
    pointsTotal,
    disabled,
    pointsRequired,
    activeBranch,
    isAssociated,
    childTalentWith,
    isAllowedToDecrement,
  } = props;
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [translateValues, setTranslateValues] = useState({ x: 1, y: -100 });
  const isFull = pointsSpent === pointsTotal;

  function requiredPointsHandler() {
    if (disabled) {
      return (
        <>
          <S.ToolTipSubTitle $colorVariant="danger">
            {`Requires ${pointsRequired} points in ${activeBranch} talents`}
          </S.ToolTipSubTitle>
          {!isAssociated && childTalentWith && (
            <S.ToolTipSubTitle $colorVariant="danger">
              {requiredDescription}
            </S.ToolTipSubTitle>
          )}
        </>
      );
    }
    if (!isAssociated && childTalentWith) {
      return (
        <S.ToolTipSubTitle $colorVariant="danger">
          {requiredDescription}
        </S.ToolTipSubTitle>
      );
    }
    return isFull ? (
      <S.ToolTipSubTitle $colorVariant="colored">
        {isAllowedToDecrement ? "" : "Right-click to unlearn"}
      </S.ToolTipSubTitle>
    ) : (
      <S.ToolTipSubTitle $colorVariant="colored">
        Click to learn
      </S.ToolTipSubTitle>
    );
  }

  useLayoutEffect(() => {
    const tooltipRect = tooltipRef.current?.getBoundingClientRect();
    const { innerWidth } = window;
    const beyondTop = (tooltipRect?.y || 0) < 0;
    const beyondRight =
      (tooltipRect?.x as number) + (tooltipRect?.width as number) > innerWidth;
    if (beyondTop) {
      setTranslateValues((prev) => ({ ...prev, y: 0 }));
    }
    if (beyondRight) {
      setTranslateValues({ y: -100, x: -120 });
    }
    if (beyondTop && beyondRight) {
      setTranslateValues({ y: -1, x: -120 });
    }
  }, [pointsSpent]);
  return (
    <S.TooltipInner
      $x={translateValues.x}
      $y={translateValues.y}
      $left={left}
      $top={top}
      key={name}
      ref={tooltipRef}
    >
      <S.ToolTipTitleWrap>
        <S.ToolTipTitle>{title}</S.ToolTipTitle>
        <S.ToolTipRank>
          Rank {pointsSpent === 0 ? 1 : pointsSpent}
        </S.ToolTipRank>
      </S.ToolTipTitleWrap>
      <S.ToolTipSubTitle $colorVariant="transparent">Talent</S.ToolTipSubTitle>
      {additionalDescription && (
        <S.ToolTipAddDesc>
          {additionalDescription.map((item) => (
            <S.ToolTipSubTitle $colorVariant="default" key={item}>
              {item}
            </S.ToolTipSubTitle>
          ))}
        </S.ToolTipAddDesc>
      )}
      <S.ToolTipSubTitle $colorVariant="default">
        Requires Death Knight
      </S.ToolTipSubTitle>
      {pointsSpent === 0 && <S.ToolTipDesc>{description?.[0]}</S.ToolTipDesc>}
      {pointsSpent > 0 && (
        <>
          <S.ToolTipDesc>{description?.[pointsSpent - 1]}</S.ToolTipDesc>
          {!isFull && (
            <S.ToolTipSubTitle $colorVariant="default">
              Next rank:
            </S.ToolTipSubTitle>
          )}
          <S.ToolTipDesc>{description?.[pointsSpent]}</S.ToolTipDesc>
        </>
      )}
      {requiredPointsHandler()}
    </S.TooltipInner>
  );
};

export default Tooltip;
