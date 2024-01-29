import * as bloodImg from "./bloodImages";
import { DKTalentTreeType } from "../../types";

const TITLE = "Death Knight WotLK Classic Talent Calculator";
const talentTree: DKTalentTreeType = {
  blood: {
    pointsSpentInThisBranch: 0,
    title: TITLE,
    backGroundImage: "",
    icon: "",
    talents: [
      {
        name: "butchery",
        img: bloodImg.butcheryImg,
        pointsTotal: 2,
        pointsSpent: 0,
        position: "default",
        disabled: false,
        pointsRequired: 0,
        branchName: "blood",
        rowIndex: 0,
      },
      {
        name: "subversion",
        img: bloodImg.subversionImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "default",
        disabled: false,
        pointsRequired: 0,
        branchName: "blood",
        rowIndex: 0,
      },
      {
        name: "blade Barrier",
        img: bloodImg.bladeBarrierImg,
        pointsTotal: 5,
        pointsSpent: 0,
        position: "default",
        disabled: false,
        pointsRequired: 0,
        branchName: "blood",
        rowIndex: 0,
      },
      {
        name: "bladed Armor",
        img: bloodImg.bladedArmorImg,
        pointsTotal: 5,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 5,
        branchName: "blood",
        rowIndex: 1,
      },
      {
        name: "scent Of Blood",
        img: bloodImg.scentOfBloodImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 5,
        branchName: "blood",
        rowIndex: 1,
      },
      {
        name: "twoHandSpec",
        img: bloodImg.twoHandSpecImg,
        pointsTotal: 2,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 5,
        branchName: "blood",
        rowIndex: 1,
      },
      {
        name: "runeTap",
        img: bloodImg.runeTapImg,
        pointsTotal: 1,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 10,
        branchName: "blood",
        parentTalentTo: {
          name: "improvedRuneTap",
        },
        rowIndex: 2,
      },
      {
        name: "darkConviction",
        img: bloodImg.darkConvictionImg,
        pointsTotal: 5,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 10,
        branchName: "blood",
        parentTalentTo: {
          name: "bloodyVengeance",
        },
        rowIndex: 2,
      },
      {
        name: "deathRuneMastery",
        img: bloodImg.deathRuneMasteryImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 10,
        branchName: "blood",
        rowIndex: 2,
      },
      {
        name: "improvedRuneTap",
        img: bloodImg.runeTapImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 15,
        branchName: "blood",
        childTalentWith: {
          index: 6,
          pointsRequired: 1,
          arrowStyles: "top: -23px; height: 26px;",
        },
        rowIndex: 3,
      },
      {
        name: "spellDeflection",
        img: bloodImg.spellDeflectionImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "end",
        disabled: true,
        pointsRequired: 15,
        branchName: "blood",
        rowIndex: 3,
      },
      {
        name: "vendetta",
        img: bloodImg.vendettaImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "end",
        disabled: true,
        pointsRequired: 15,
        branchName: "blood",
        rowIndex: 3,
      },
      {
        name: "bloodyStrikes",
        img: bloodImg.bloodyStrikesImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 20,
        branchName: "blood",
        rowIndex: 4,
      },
      {
        name: "veteranOfThirdWar",
        img: bloodImg.veteranImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "end",
        disabled: true,
        pointsRequired: 20,
        branchName: "blood",
        rowIndex: 4,
      },
      {
        name: "markOfBlood",
        img: bloodImg.markOfBlood,
        pointsTotal: 1,
        pointsSpent: 0,
        position: "end",
        disabled: true,
        pointsRequired: 20,
        branchName: "blood",
        rowIndex: 4,
      },
      {
        name: "empty1",
        img: "",
        pointsTotal: 0,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 25,
        branchName: "blood",
        isEmpty: true,
        rowIndex: 5,
      },
      {
        name: "bloodyVengeance",
        img: bloodImg.bloodyVengeanceImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 25,
        branchName: "blood",
        childTalentWith: {
          index: 7,
          pointsRequired: 5,
          arrowStyles: "top: -163px; height: 168px;",
        },
        rowIndex: 5,
      },
      {
        name: "abominationsMightImg",
        img: bloodImg.abominationsMightImg,
        pointsTotal: 2,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 25,
        branchName: "blood",
        rowIndex: 5,
      },

      {
        name: "bloodWorms",
        img: bloodImg.bloodWormsImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 30,
        branchName: "blood",
        rowIndex: 6,
      },
      {
        name: "unholyFrenzy",
        img: bloodImg.unholyFrenzyImg,
        pointsTotal: 1,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 30,
        branchName: "blood",
        rowIndex: 6,
      },
      {
        name: "improvedBloodPresence",
        img: bloodImg.improvedBloodPresenceImg,
        pointsTotal: 2,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 30,
        branchName: "blood",
        rowIndex: 6,
      },
      {
        name: "improvedDeathStriker",
        img: bloodImg.improvedDeathStrikerImg,
        pointsTotal: 2,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 35,
        branchName: "blood",
        rowIndex: 7,
      },
      {
        name: "suddenDoom",
        img: bloodImg.suddenDoomImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 35,
        branchName: "blood",
        rowIndex: 7,
      },
      {
        name: "vampiricBlood",
        img: bloodImg.vampiricBloodImg,
        pointsTotal: 1,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 35,
        branchName: "blood",
        rowIndex: 7,
      },
      {
        name: "willOfTheNecropolis",
        img: bloodImg.willOfTheNecropolisImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 40,
        branchName: "blood",
        rowIndex: 8,
      },
      {
        name: "heartStrike",
        img: bloodImg.heartStrikeImg,
        pointsTotal: 1,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 40,
        branchName: "blood",
        rowIndex: 8,
      },
      {
        name: "mightOfMograine",
        img: bloodImg.mightOfMograineImg,
        pointsTotal: 3,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 40,
        branchName: "blood",
        rowIndex: 8,
      },
      {
        name: "empty2",
        img: "",
        pointsTotal: 0,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 25,
        branchName: "blood",
        isEmpty: true,
        rowIndex: 9,
      },
      {
        name: "bloodGorgedImg",
        img: bloodImg.bloodGorgedImg,
        pointsTotal: 5,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 45,
        branchName: "blood",
        rowIndex: 9,
      },
      {
        name: "empty3",
        img: "",
        pointsTotal: 0,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 25,
        branchName: "blood",
        isEmpty: true,
        rowIndex: 9,
      },
      {
        name: "empty4",
        img: "",
        pointsTotal: 0,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 25,
        branchName: "blood",
        isEmpty: true,
        rowIndex: 10,
      },
      {
        name: "dancingRuneWeaponImg",
        img: bloodImg.dancingRuneWeaponImg,
        pointsTotal: 1,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 50,
        branchName: "blood",
        rowIndex: 10,
      },
      {
        name: "empty5",
        img: "",
        pointsTotal: 0,
        pointsSpent: 0,
        position: "default",
        disabled: true,
        pointsRequired: 25,
        branchName: "blood",
        isEmpty: true,
        rowIndex: 10,
      },
    ],
  },
  frost: {
    pointsSpentInThisBranch: 0,
    talents: [],
    title: TITLE,
    backGroundImage: "",
    icon: "",
  },
  unHoly: {
    pointsSpentInThisBranch: 0,
    talents: [],
    title: TITLE,
    backGroundImage: "",
    icon: "",
  },
};
export default talentTree;
