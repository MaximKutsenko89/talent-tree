export type DKBranchName = "blood" | "frost" | "unHoly";
export type Coords = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};
export type Talent = {
  name: string;
  img: string;
  title: string;
  pointsTotal: number;
  pointsSpent: number;
  disabled: boolean;
  pointsRequired: number;
  branchName: DKBranchName;
  childTalentWith?: {
    name: string;
    index?: number;
    pointsRequired: number;
    arrowStyles: string;
  };
  parentTalentTo?: {
    name: string;
  };

  isEmpty?: boolean;
  description?: string[];
  additionalDescription?: string[];
  isDisabledForRightClick?: boolean;
};
export type BranchType = {
  talents: Talent[];
  pointsSpentInThisBranch: number;
  title: string;
  icon: string;
  backGroundImage: string;
  columns: number;
};
export type DKTalentTreeType = {
  blood: BranchType;
  frost: BranchType;
  unHoly: BranchType;
};
