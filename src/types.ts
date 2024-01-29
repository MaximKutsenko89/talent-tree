import { Position } from "./App.styled";

export type DKBranchName = "blood" | "frost" | "unHoly";

export type Talent = {
  name: string;
  img: string;
  pointsTotal: number;
  pointsSpent: number;
  position: Position;
  disabled: boolean;
  pointsRequired: number;
  branchName: DKBranchName;
  isEmpty?: boolean;
  rowIndex: number;
  childTalentWith?: {
    index: number;
    pointsRequired: number;
    arrowStyles: string;
  };
  parentTalentTo?: {
    name: string;
  };
};
export type BranchType = {
  talents: Talent[];
  pointsSpentInThisBranch: number;
  title: string;
  icon: string;
  backGroundImage: string;
};
export type DKTalentTreeType = {
  blood: BranchType;
  frost: BranchType;
  unHoly: BranchType;
};
