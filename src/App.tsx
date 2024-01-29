import { useEffect, useState } from "react";
import * as S from "./App.styled";
import type { Position } from "./App.styled";
import talentTree from "./data/dk/dk";
import { DKBranchName, DKTalentTreeType } from "./types";
import {
  chunkArray,
  isAllowedToDecrementRightClick,
  isAssociated,
} from "./utils";

const TOTAL_POINTS = 71;
function App() {
  const [data, setData] = useState<DKTalentTreeType>(talentTree);
  const [totalPoints, setTotalPoints] = useState(TOTAL_POINTS);
  const [activeBranch, setActiveBranch] = useState<DKBranchName>("frost");
  const [activeTalent, setActiveTalent] = useState("");
  const [isAllowedToDecrement, setIsAllowedToDecrement] = useState<
    boolean | null
  >(null);
  function resetHandler() {
    if (confirm("REST TALENT TREE ????")) {
      setData(talentTree);
      setTotalPoints(TOTAL_POINTS);
    }
  }
  function leftClickHandler(
    talentName: string,
    branchName: keyof DKTalentTreeType
  ) {
    setActiveBranch(branchName);
    setActiveTalent(talentName);
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
          return {
            ...talent,
          };
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
    setActiveTalent(talentName);
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
          return {
            ...talent,
          };
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

  // const rows = chunkArray(data[activeBranch].talents);

  // const rowsModified = rows.map((row, index) => ({
  //   id: index,
  //   names: row.map((subRow) => subRow.name),
  //   pointsRequired: row[1].pointsRequired,
  //   pointsSpent: row.reduce((accum, row) => (accum += row.pointsSpent), 0),
  // }));
  // const currentRow = rowsModified.find((row) =>
  //   row.names.includes(activeTalent)
  // );
  // useEffect(() => {
  //   if ((currentRow?.pointsSpent || 0) > 5) {
  //     setIsAllowedToDecrement(true);
  //   } else if (currentRow?.pointsSpent > 5 && currentRow?.id === 0) {
  //     setIsAllowedToDecrement(true);
  //   } else {
  //     setIsAllowedToDecrement(false);
  //   }
  // }, [activeTalent, data]);
  useEffect(() => {
    setIsAllowedToDecrement(
      isAllowedToDecrementRightClick(data[activeBranch].talents, activeTalent)
    );
  }, [activeTalent, activeBranch, data]);
  return (
    <>
      <h1>{data[activeBranch].title}</h1>
      <div>Points left: {totalPoints}</div>
      <div>Points spent: {data[activeBranch].pointsSpentInThisBranch}</div>
      <button onClick={resetHandler}>Reset</button>
      <S.TalentWrap>
        {data.blood.talents.map((talent) => {
          const isEnoughPoints = isAssociated(talent, data.blood.talents);
          return (
            <S.TalentItem
              key={talent.name}
              $img={talent.img}
              $position={talent.position as Position}
              $disabled={
                talent.childTalentWith
                  ? !isEnoughPoints || talent.disabled
                  : talent.disabled
              }
              $isEmpty={talent.isEmpty}
              $full={talent.pointsSpent === talent.pointsTotal}
              onClick={() =>
                talent.disabled ||
                talent.pointsTotal === talent.pointsSpent ||
                (talent.childTalentWith && !isEnoughPoints)
                  ? null
                  : leftClickHandler(talent.name, talent.branchName)
              }
              onContextMenu={(event) =>
                talent.disabled || talent.pointsSpent === 0
                  ? event.preventDefault()
                  : rightClickHandler(talent.name, talent.branchName, event)
              }
              title={`${talent.name} \n ${talent.pointsRequired} points required`}
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
          );
        })}
      </S.TalentWrap>
    </>
  );
}

export default App;
