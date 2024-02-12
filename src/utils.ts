import { Talent } from "./types";
export function chunkArray<T>(array: T[], chunkAmount: number) {
  const rows = [];

  for (let i = 0; i < array.length; i += chunkAmount) {
    const chunk = array.slice(i, i + chunkAmount);
    rows.push(chunk);
  }
  return rows;
}
export function isAllowedToDecrementRightClick(
  array: Talent[],
  talentName: string
) {
  const rows = chunkArray(array, 4);

  const rowsModified = rows.map((row, index) => ({
    id: index,
    names: row.map((subRow) => subRow.name),
    pointsRequired: row.find((row) => !row.isEmpty)?.pointsRequired,
    pointsSpent: row.reduce((accum, row) => (accum += row.pointsSpent), 0),
  }));

  const currentRow = rowsModified.find((row) => row.names.includes(talentName));
  const activeRows = rowsModified.filter((row) => row.pointsSpent > 0);

  const currentTalent = array.find((talent) => talent.name === talentName);
  const activeChildTalentWith = array
    .filter((talent) => talent.childTalentWith && talent.pointsSpent > 0)
    .map((item) => item.name);
  const isParentTo =
    !!currentTalent?.parentTalentTo &&
    activeChildTalentWith.includes(currentTalent.parentTalentTo.name);

  const result =
    ((currentRow?.pointsSpent || 0) > 5 && !isParentTo) ||
    (currentRow?.id === activeRows.length - 1 && !isParentTo);

  return result;
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

export function splitCamelCaseString(str: string) {
  const result = [...str]
    .map((item) => {
      const isUpperCased = item.toUpperCase() === item;
      if (isUpperCased) {
        return " " + item;
      }
      return item;
    })
    .join("");
  return result.charAt(0).toUpperCase() + result.slice(1);
}
