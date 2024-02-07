import React, { useEffect, useState } from "react";
import * as S from "./App.styled";
import { constants, talentTree } from "./data/dk/dk";
import { DKBranchName, DKTalentTreeType } from "./types";
import { isAllowedToDecrementRightClick, isAssociated } from "./utils";
import Tooltip from "./components/tooltip/Tooltip";

const storageTalentTreeString = localStorage.getItem("storageTalentTree");
const storageTalentTree = storageTalentTreeString
  ? JSON.parse(storageTalentTreeString)
  : talentTree;

const storageTotalPoints = Number(
  localStorage.getItem("storageTotalPoints") || ""
);
function App() {
  const [data, setData] = useState<DKTalentTreeType>(
    storageTalentTree || talentTree
  );
  const [totalPoints, setTotalPoints] = useState(
    storageTotalPoints || constants.totalPoints
  );
  const [activeBranch, setActiveBranch] = useState<DKBranchName>("frost");
  const [hoveredTalent, setHoveredTalent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  function resetBranchHandler(branch: keyof DKTalentTreeType) {
    if (confirm("REST TALENT TREE ????")) {
      setData((prevData) => ({
        ...prevData,
        [branch]: talentTree[branch],
      }));
      const pointsSpent = data[branch].pointsSpentInThisBranch;
      setTotalPoints((prev) => pointsSpent + prev);
    }
  }
  function leftClickHandler(
    talentName: string,
    branchName: keyof DKTalentTreeType
  ) {
    setActiveBranch(branchName);

    setData({
      ...data,
      [branchName]: {
        ...data[branchName],
        pointsSpentInThisBranch: data[branchName].pointsSpentInThisBranch + 1,
        talents: data[branchName].talents.map((talent) => {
          if (talent.name === talentName && !talent.disabled) {
            if (talent.pointsSpent < talent.pointsTotal) {
              setTotalPoints((prev) => (prev <= 0 ? prev : prev - 1));
            }
            return {
              ...talent,
              pointsSpent:
                talent.pointsSpent >= talent.pointsTotal
                  ? talent.pointsSpent
                  : talent.pointsSpent + 1,
            };
          }
          return { ...talent };
        }),
      },
    });
  }

  function rightClickHandler(
    talentName: string,
    branchName: keyof DKTalentTreeType,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.preventDefault();
    const isAllowedToDecrement = isAllowedToDecrementRightClick(
      data[branchName].talents,
      talentName
    );
    if (!isAllowedToDecrement) {
      return;
    }
    setData({
      ...data,
      [branchName]: {
        ...data[branchName],
        pointsSpentInThisBranch:
          data[branchName].pointsSpentInThisBranch <= 0
            ? data[branchName].pointsSpentInThisBranch
            : data[branchName].pointsSpentInThisBranch - 1,
        talents: data[branchName].talents.map((talent) => {
          if (talent.name === talentName && !talent.disabled) {
            setTotalPoints((prev) => prev + 1);
            return {
              ...talent,
              pointsSpent:
                talent.pointsSpent <= 0
                  ? talent.pointsSpent
                  : talent.pointsSpent - 1,
            };
          }
          return { ...talent };
        }),
      },
    });
  }
  useEffect(() => {
    setData({
      ...data,
      [activeBranch]: {
        ...data[activeBranch],
        talents: data[activeBranch].talents.map((talent) => {
          return {
            ...talent,
            disabled:
              data[activeBranch].pointsSpentInThisBranch <
              talent.pointsRequired,
          };
        }),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPoints, activeBranch]);

  function handleMouseEnter(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    talentName: string
  ) {
    setHoveredTalent(talentName);
    const talentRect = (event.target as HTMLDivElement).getBoundingClientRect();
    const { scrollX, scrollY } = window;
    const computedTop = talentRect.top + scrollY;
    const computedLeft = talentRect.right + scrollX;

    setTooltipPosition({ top: computedTop, left: computedLeft });
  }

  function handleMouseLeave() {
    setHoveredTalent("");
  }
  const pointsSpentInAllBranchesTotal = Object.values(data).reduce(
    (total, current) => (total += current.pointsSpentInThisBranch),
    0
  );
  localStorage.setItem("storageTalentTree", JSON.stringify(data));
  localStorage.setItem("storageTotalPoints", totalPoints.toString());
  return (
    <>
      <S.MainTitle>{constants.title}</S.MainTitle>
      <S.InfoWrap>
        <div>
          <S.InfoIcon $url={constants.icon} />
          <S.InfoTitle $color={constants.color}>{constants.name}</S.InfoTitle>
          <S.InfoPointsWrap>
            {Object.values(data).map((item, index) => {
              return (
                <>
                  <S.InfoPoint
                    $colored={item.pointsSpentInThisBranch > 0}
                    key={item.title}
                  >
                    {item.pointsSpentInThisBranch}
                  </S.InfoPoint>
                  {index !== Object.entries(data).length - 1 && <span>/</span>}
                </>
              );
            })}
          </S.InfoPointsWrap>
        </div>
        <div>
          <S.InfoPointsLeft>
            Points left: <span>{totalPoints}</span>
          </S.InfoPointsLeft>
        </div>
      </S.InfoWrap>
      <S.BranchWrap>
        {Object.entries(data).map(([key, branch]) => {
          return (
            <S.BranchInner $url={branch.backGroundImage}>
              <S.BranchInfoWrap>
                <S.BranchInfoIcon $url={branch.icon} />
                <S.BranchInfoTitle>{branch.title}</S.BranchInfoTitle>
                <S.BranchInfoPoints>
                  {branch.pointsSpentInThisBranch} / {constants.totalPoints}
                </S.BranchInfoPoints>
              </S.BranchInfoWrap>
              <S.TalentWrap
                $columns={branch.columns}
                key={key}
                $url={branch.backGroundImage}
              >
                {branch.talents.map((talent) => {
                  const isAssociatedValue = isAssociated(
                    talent,
                    branch.talents
                  );
                  const isAllowedToDecrement = isAllowedToDecrementRightClick(
                    branch.talents,
                    talent.name
                  );
                  const isFull = talent.pointsSpent === talent.pointsTotal;
                  const findParentTalentPoints = branch.talents.find((item) => {
                    if (talent.childTalentWith) {
                      if (talent.childTalentWith.name === item.name) {
                        return item;
                      }
                    }
                  });
                  const pointsRequiredInChildTalent =
                    (findParentTalentPoints?.pointsTotal || 0) -
                    (findParentTalentPoints?.pointsSpent || 0);
                  const isAllowedToLeftClick =
                    talent.disabled ||
                    talent.pointsTotal === talent.pointsSpent ||
                    (talent.childTalentWith && !isAssociatedValue) ||
                    (pointsSpentInAllBranchesTotal === constants.totalPoints &&
                      !isFull);
                  return (
                    <>
                      <S.TalentItem
                        key={talent.name}
                        $img={talent.img}
                        $disabled={
                          talent.childTalentWith
                            ? !isAssociatedValue || talent.disabled
                            : talent.disabled ||
                              (pointsSpentInAllBranchesTotal ===
                                constants.totalPoints &&
                                !isFull)
                        }
                        $isEmpty={talent.isEmpty}
                        $full={isFull}
                        onClick={() =>
                          isAllowedToLeftClick
                            ? null
                            : leftClickHandler(talent.name, talent.branchName)
                        }
                        onContextMenu={(event) =>
                          talent.disabled || talent.pointsSpent === 0
                            ? event.preventDefault()
                            : rightClickHandler(
                                talent.name,
                                talent.branchName,
                                event
                              )
                        }
                        onMouseEnter={(event) =>
                          handleMouseEnter(event, talent.name)
                        }
                        onMouseLeave={handleMouseLeave}
                        // onClick={(event) => handleMouseEnter(event, talent.name)}
                      >
                        {talent.childTalentWith && (
                          <S.TalentArrow
                            $styles={talent.childTalentWith?.arrowStyles}
                            $active={!talent.disabled}
                          />
                        )}
                        {!talent.isEmpty && (
                          <S.TalentPoints>
                            {talent.pointsSpent}/{talent.pointsTotal}
                          </S.TalentPoints>
                        )}
                      </S.TalentItem>
                      {hoveredTalent === talent.name && (
                        <Tooltip
                          {...talent}
                          pointsRequiredInChildTalent={
                            pointsRequiredInChildTalent
                          }
                          branchName={branch.title as DKBranchName}
                          left={tooltipPosition.left}
                          top={tooltipPosition.top}
                          isAssociated={isAssociatedValue as boolean}
                          isAllowedToDecrement={!isAllowedToDecrement}
                          isAllowedToLeftClick={isAllowedToLeftClick}
                        />
                      )}
                    </>
                  );
                })}
              </S.TalentWrap>
              <S.Button
                onClick={() =>
                  resetBranchHandler(key as keyof DKTalentTreeType)
                }
              >
                <span> &times; </span> Reset
              </S.Button>
            </S.BranchInner>
          );
        })}
      </S.BranchWrap>
    </>
  );
}

export default App;
