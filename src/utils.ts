import { Talent } from "./types";
export function chunkArray<T>(array: T[]) {
  const rows = [];

  for (let i = 0; i < array.length; i += 3) {
    const chunk = array.slice(i, i + 3);
    rows.push(chunk);
  }
  return rows;
}
export function isAllowedToDecrementRightClick(
  array: Talent[],
  // pointsSpentInThisBranch: number,
  talentName: string
) {
  const rows = chunkArray(array);

  const rowsModified = rows.map((row, index) => ({
    id: index,
    names: row.map((subRow) => subRow.name),
    pointsRequired: row[1].pointsRequired,
    pointsSpent: row.reduce((accum, row) => (accum += row.pointsSpent), 0),
    isAllowedToDecrement: index === 0,
  }));
  let result: boolean | null = false;
  const currentRow = rowsModified.find((row) => row.names.includes(talentName));
  const activeRows = rowsModified.filter((row) => row.pointsSpent > 0);
  const isFirstRow = currentRow?.id === 0;

  if ((currentRow?.pointsSpent || 0) > 5 || currentRow?.isAllowedToDecrement) {
    return true;
  }
  console.log(rowsModified);
  return false;
}

export function isAssociated(currentTalent: Talent, talentTree: Talent[]) {
  if (!currentTalent.childTalentWith) {
    return;
  }
  const associatedToItems = [...talentTree]
    .filter((item) => item.parentTalentTo)
    .find((item) => currentTalent.name === item.parentTalentTo?.name);

  const isEnoughPoints =
    associatedToItems?.pointsSpent ===
    currentTalent.childTalentWith.pointsRequired;
  return isEnoughPoints;
}
