import { useRef, useState, useLayoutEffect } from "react";
import { Talent } from "../../types";
import * as T from "./Tooltip.styled";
import { splitCamelCaseString } from "../../utils";

type Props = {
  top: number;
  left: number;
  branchName: string;
  isAssociated: boolean;
  isAllowedToDecrement: boolean;
  pointsRequiredInChildTalent: number;
  isAllowedToLeftClick: boolean;
} & Talent;

const Tooltip = (props: Props) => {
  const {
    name,
    left,
    top,
    title,
    description,
    additionalDescription,
    pointsSpent,
    pointsTotal,
    disabled,
    pointsRequired,
    branchName,
    isAssociated,
    childTalentWith,
    isAllowedToDecrement,
    pointsRequiredInChildTalent,
    isAllowedToLeftClick,
  } = props;
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [translateValues, setTranslateValues] = useState({ x: 1, y: -100 });
  const isFull = pointsSpent === pointsTotal;

  function requiredDescriptionHandler(value: number) {
    return `Requires ${value} point in ${splitCamelCaseString(
      childTalentWith?.name as string
    )}`;
  }

  function requiredPointsHandler() {
    if (disabled) {
      return (
        <>
          <T.SubTitle $colorVariant="danger">
            {`Requires ${pointsRequired} points in ${branchName} talents`}
          </T.SubTitle>
          {!isAssociated && childTalentWith && (
            <T.SubTitle $colorVariant="danger">
              {requiredDescriptionHandler(pointsRequiredInChildTalent)}
            </T.SubTitle>
          )}
        </>
      );
    }
    if (!isAssociated && childTalentWith) {
      return (
        <T.SubTitle $colorVariant="danger">
          {requiredDescriptionHandler(pointsRequiredInChildTalent)}
        </T.SubTitle>
      );
    }
    return isFull ? (
      <T.SubTitle $colorVariant="colored">
        {isAllowedToDecrement ? "" : "Right-click to unlearn"}
      </T.SubTitle>
    ) : (
      <T.SubTitle $colorVariant="colored">
        {!isAllowedToLeftClick && "Click to learn"}
      </T.SubTitle>
    );
  }

  useLayoutEffect(() => {
    const tooltipRect = tooltipRef.current?.getBoundingClientRect();
    const { innerWidth } = window;

    const beyondTop = (tooltipRect?.y || 0) < 0;
    const beyondX =
      (tooltipRect?.x as number) + (tooltipRect?.width as number) > innerWidth;
    if (beyondTop) {
      setTranslateValues((prev) => ({ ...prev, y: 11 }));
    }
    if (beyondX) {
      setTranslateValues({ y: -100, x: -120 });
    }
    if (beyondTop && beyondX) {
      setTranslateValues({ y: -1, x: -120 });
    }
  }, [pointsSpent]);
  return (
    <T.Inner
      $x={translateValues.x}
      $y={translateValues.y}
      $left={left}
      $top={top}
      key={name}
      ref={tooltipRef}
    >
      <T.TitleWrap>
        <T.Title>{title}</T.Title>
        <T.Rank>Rank {pointsSpent === 0 ? 1 : pointsSpent}</T.Rank>
      </T.TitleWrap>
      <T.SubTitle $colorVariant="transparent">Talent</T.SubTitle>
      {additionalDescription && (
        <T.ToolTipAddDesc>
          {additionalDescription.map((item) => (
            <T.SubTitle $colorVariant="default" key={item}>
              {item}
            </T.SubTitle>
          ))}
        </T.ToolTipAddDesc>
      )}
      <T.SubTitle $colorVariant="default">Requires Death Knight</T.SubTitle>
      {pointsSpent === 0 && <T.Description>{description?.[0]}</T.Description>}
      {pointsSpent > 0 && (
        <>
          <T.Description>{description?.[pointsSpent - 1]}</T.Description>
          {!isFull ||
            (!isAllowedToLeftClick && (
              <T.SubTitle $colorVariant="default">Next rank:</T.SubTitle>
            ))}
          {!isAllowedToLeftClick && (
            <T.Description>{description?.[pointsSpent]}</T.Description>
          )}
        </>
      )}
      {requiredPointsHandler()}
    </T.Inner>
  );
};

export default Tooltip;
