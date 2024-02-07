import * as bloodImg from "./blood/bloodImages";
import * as frostImg from "./frost/frostImages";
import * as unholyImg from "./unholy/unholyImages";
import bloodTalents from "./blood/bloodTalents";
import frostTalents from "./frost/frostTalents";
import unholyTalents from "./unholy/unholyTalents";
import { DKTalentTreeType } from "../../types";

export const constants = {
  title: "Death Knight WotLK Classic Talent Calculator",
  color: "#c41e3a",
  name: "Death Knight",
  icon: bloodImg.dk,
  totalPoints: 71,
};
export const talentTree: DKTalentTreeType = {
  blood: {
    pointsSpentInThisBranch: 0,
    title: "Blood",
    backGroundImage: bloodImg.bloodBg,
    icon: bloodImg.bloodIcon,
    columns: 4,
    talents: bloodTalents,
  },
  frost: {
    pointsSpentInThisBranch: 0,
    title: "Frost",
    backGroundImage: frostImg.frostBg,
    icon: frostImg.frostIconImg,
    columns: 4,
    talents: frostTalents,
  },
  unHoly: {
    pointsSpentInThisBranch: 0,
    talents: unholyTalents,
    title: "Unoly",

    backGroundImage: unholyImg.unholyBg,
    icon: unholyImg.unholyIcon,
    columns: 4,
  },
};
