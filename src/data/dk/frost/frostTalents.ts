import { Talent } from "../../../types";
import * as frostImg from "./frostImages";
const frostTalents: Talent[] = [
  {
    name: "improvedIcyTouch",
    title: "Improved Icy Touch",
    img: frostImg.iceTouchImg,
    pointsTotal: 3,
    pointsSpent: 0,
    disabled: false,
    pointsRequired: 0,
    branchName: "frost",
    additionalDescription: ["20 yd range"],
    parentTalentTo: {
      name: "icyTalons",
    },
    description: [
      "Your Icy Touch does an additional 5% damage and your Frost Fever reduces melee and ranged attack speed by an additional 2%.(Proc chance: 50%)",
      "Your Icy Touch does an additional 10% damage and your Frost Fever reduces melee and ranged attack speed by an additional 4%.(Proc chance: 50%)",
      "Your Icy Touch does an additional 15% damage and your Frost Fever reduces melee and ranged attack speed by an additional 6%.(Proc chance: 50%)",
    ],
  },
  {
    name: "runicPowerMastery",
    title: "Runic Power Mastery",
    img: frostImg.runicPowerMasteryImg,
    pointsTotal: 2,
    pointsSpent: 0,
    disabled: false,
    pointsRequired: 0,
    branchName: "frost",
    description: [
      "Increases your maximum Runic Power by 15. ",
      "Increases your maximum Runic Power by 30. ",
    ],
  },
  {
    name: "toughness",
    title: "Toughness",
    img: frostImg.toughnessImg,
    pointsTotal: 5,
    pointsSpent: 0,
    disabled: false,
    pointsRequired: 0,
    branchName: "frost",
    description: [
      "Increases your armor value from items by 2% and reduces the duration of all movement slowing effects by 6%.",
      "Increases your armor value from items by 4% and reduces the duration of all movement slowing effects by 12%.",
      "Increases your armor value from items by 6% and reduces the duration of all movement slowing effects by 18%.",
      "Increases your armor value from items by 8% and reduces the duration of all movement slowing effects by 24%.",
      "Increases your armor value from items by 10% and reduces the duration of all movement slowing effects by 30%.",
    ],
  },
  {
    name: "empty1",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "empty2",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "icyReach",
    title: "Icy Reach",
    img: frostImg.icyReachImg,
    pointsTotal: 2,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 5,
    branchName: "frost",
    description: [
      "Increases the range of your Icy Touch,  Chains of Ice and Howling Blast by 5 yards.",
      "Increases the range of your Icy Touch,  Chains of Ice and Howling Blast by 10 yards.",
    ],
  },
  {
    name: "blackIce",
    title: "Black Ice",
    img: frostImg.blackIceImg,
    pointsTotal: 5,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 5,
    branchName: "frost",
    description: [
      "Increases your Frost and Shadow damage by 2%.",
      "Increases your Frost and Shadow damage by 4%.",
      "Increases your Frost and Shadow damage by 6%.",
      "Increases your Frost and Shadow damage by 8%.",
      "Increases your Frost and Shadow damage by 10%.",
    ],
  },
  {
    name: "nervesOfColdSteel",
    title: "Nerves of Cold Steel",
    img: frostImg.nervesOfColdSteelImg,
    pointsTotal: 3,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 5,
    branchName: "frost",
    additionalDescription: ["Requires One-Handed Melee Weapon"],
    description: [
      "Increases your chance to hit with one-handed melee weapons by 1% and increases the damage done by your offhand weapon by 8%.",
      "Increases your chance to hit with one-handed melee weapons by 2% and increases the damage done by your offhand weapon by 16%.",
      "Increases your chance to hit with one-handed melee weapons by 3% and increases the damage done by your offhand weapon by 25%.",
    ],
  },
  {
    name: "icyTalons",
    title: "Icy Talons",
    img: frostImg.icyTalonsImg,
    pointsTotal: 5,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 10,
    branchName: "frost",
    additionalDescription: ["20 yd range"],
    childTalentWith: {
      name: "improvedIcyTouch",
      pointsRequired: 3,
      arrowStyles: "top: -81px; height: 87px;",
    },
    parentTalentTo: {
      name: "improvedIcyTalons",
    },
    requiredDescription: (value: number) =>
      `Requires ${value} point in Improved Icy Touch`,
    description: [
      "You leech heat from victims of your Frost Fever, so that when their melee attack speed is reduced, yours increases by 4% for the next 20 sec.",
      "You leech heat from victims of your Frost Fever, so that when their melee attack speed is reduced, yours increases by 8% for the next 20 sec.",
      "You leech heat from victims of your Frost Fever, so that when their melee attack speed is reduced, yours increases by 12% for the next 20 sec.",
      "You leech heat from victims of your Frost Fever, so that when their melee attack speed is reduced, yours increases by 16% for the next 20 sec.",
      "You leech heat from victims of your Frost Fever, so that when their melee attack speed is reduced, yours increases by 20% for the next 20 sec.",
    ],
  },
  {
    name: "lichBorne",
    title: "Lichborne",
    img: frostImg.lichBorneImg,
    pointsTotal: 1,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 10,
    branchName: "frost",
    additionalDescription: ["Instant", "2 min cooldown"],
    description: [
      "Draw upon unholy energy to become undead for 10 sec.  While undead, you are immune to Charm, Fear and Sleep effects.",
    ],
  },
  {
    name: "annihilation",
    title: "Annihilation",
    img: frostImg.annihilationImg,
    pointsTotal: 3,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 10,
    branchName: "frost",
    description: [
      "Increases the critical strike chance of your melee special abilities by 1%.  In addition, there is a 33% chance that your Obliterate will do its damage without consuming diseases.",
      "Increases the critical strike chance of your melee special abilities by 2%.  In addition, there is a 66% chance that your Obliterate will do its damage without consuming diseases.",
      "Increases the critical strike chance of your melee special abilities by 3%.  In addition, there is a 100% chance that your Obliterate will do its damage without consuming diseases.",
    ],
  },
  {
    name: "empty3",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "empty4",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "killingMachine",
    title: "Killing Machine",
    img: frostImg.killingMachineImg,
    pointsTotal: 5,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 15,
    branchName: "frost",
    description: [
      "Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.",
      "Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.Effect occurs more often than Killing Machine (Rank 1).",
      "Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.Effect occurs more often than Killing Machine (Rank 2).",
      "Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.Effect occurs more often than Killing Machine (Rank 3).",
      "Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.Effect occurs more often than Killing Machine (Rank 4).",
    ],
  },
  {
    name: "chillOfTheGrave",
    title: "Chill of the Grave",
    img: frostImg.chillOfTheGraveImg,
    pointsTotal: 2,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 15,
    branchName: "frost",
    description: [
      "Your Chains of Ice, Howling Blast, Icy Touch and Obliterate generate 2.5 additional runic power.",
      "Your Chains of Ice, Howling Blast, Icy Touch and Obliterate generate 5 additional runic power.",
    ],
  },
  {
    name: "endlessWinter",
    title: "Endless Winter",
    img: frostImg.endlessWinterImg,
    pointsTotal: 2,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 15,
    branchName: "frost",
    description: [
      "Your strength is increased by 2% and the cost of your Mind Freeze is reduced to 10 runic power.",
      "Your strength is increased by 4% and your Mind Freeze no longer costs runic power.",
    ],
  },
  {
    name: "empty5",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "frigidDreadPlate",
    title: "Frigid Dreadplate",
    img: frostImg.frigidDreadPlateImg,
    pointsTotal: 2,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 20,
    branchName: "frost",
    description: [
      "Reduces the chance melee attacks will hit you by 1%.",
      "Reduces the chance melee attacks will hit you by 2%.",
      "Reduces the chance melee attacks will hit you by 3%.",
    ],
  },
  {
    name: "Glacier Rot",
    title: "glacierRot",
    img: frostImg.glacierRotImg,
    pointsTotal: 3,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 20,
    branchName: "frost",
    description: [
      "Diseased enemies take 7% more damage from your Icy Touch, Howling Blast and Frost Strike.",
      "Diseased enemies take 7% more damage from your Icy Touch, Howling Blast and Frost Strike.",
      "Diseased enemies take 7% more damage from your Icy Touch, Howling Blast and Frost Strike.",
    ],
  },
  {
    name: "deathchill",
    title: "DeathChill",
    img: frostImg.deathChillImg,
    pointsTotal: 1,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 20,
    branchName: "frost",
    additionalDescription: ["Instant", "2 min cooldown"],
    description: [
      "When activated, makes your next Icy Touch, Howling Blast, Frost Strike or Obliterate a critical hit if used within 30 sec.",
    ],
  },
  {
    name: "improvedIcyTalons",
    title: "Improved Icy Talons",
    img: frostImg.improvedIcyTalonsImg,
    pointsTotal: 1,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 25,
    branchName: "frost",
    childTalentWith: {
      name: "icyTalons",
      pointsRequired: 5,
      arrowStyles: "top: -142px; height: 148px;",
    },
    requiredDescription: (value: number) =>
      `Requires ${value} point in  Icy Talons`,
    description: [
      "Increases the melee haste of all party and raid members within 100 yds by 20% and your haste by an additional 5%.",
    ],
  },
  {
    name: "mercilessCombat",
    title: "Merciless Combat",
    img: frostImg.mercilessCombatImg,
    pointsTotal: 2,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 25,
    branchName: "frost",
    description: [
      "Your Icy Touch, Howling Blast, Obliterate and Frost Strike do an additional 6% damage when striking targets with less than 35% health.",
      "Your Icy Touch, Howling Blast, Obliterate and Frost Strike do an additional 12% damage when striking targets with less than 35% health.",
    ],
  },
  {
    name: "rime",
    title: "Rime",
    img: frostImg.rimeImg,
    pointsTotal: 3,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 25,
    branchName: "frost",
    description: [
      "Increases the critical strike chance of your Icy Touch and Obliterate by 5% and casting Obliterate has a 5% chance to reset the cooldown on Howling Blast and cause your next Howling Blast to consume no runes.",
      "Increases the critical strike chance of your Icy Touch and Obliterate by 10% and casting Obliterate has a 10% chance to reset the cooldown on Howling Blast and cause your next Howling Blast to consume no runes.",
      "Increases the critical strike chance of your Icy Touch and Obliterate by 15% and casting Obliterate has a 15% chance to reset the cooldown on Howling Blast and cause your next Howling Blast to consume no runes.",
    ],
  },
  {
    name: "empty6",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "chilblains",
    title: "Chilblains",
    img: frostImg.chilblainsImg,
    pointsTotal: 3,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 30,
    branchName: "frost",
    description: [
      "Victims of your Frost Fever disease are Chilled, reducing movement speed by 15% for 10 sec.",
      "Victims of your Frost Fever disease are Chilled, reducing movement speed by 30% for 10 sec.",
      "Victims of your Frost Fever disease are Chilled, reducing movement speed by 50% for 10 sec.",
    ],
  },
  {
    name: "hungeringCold",
    title: "Hungering Cold",
    img: frostImg.hungeringColdImg,
    pointsTotal: 1,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 30,
    branchName: "frost",
    additionalDescription: [
      "40 Runic Power",
      "",
      "Instant cast",
      "1 min cooldown",
    ],
    description: [
      "Purges the earth around the Death Knight of all heat.  Enemies within 10 yards are trapped in ice, preventing them from performing any action for 10 sec and infecting them with Frost Fever.  Enemies are considered Frozen, but any damage other than diseases will break the ice.",
    ],
  },
  {
    name: "improvedFrostPresence",
    title: "Improved Frost Presence",
    img: frostImg.improvedFrostPresenceImg,
    pointsTotal: 2,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 30,
    branchName: "frost",
    description: [
      "While in Blood Presence or Unholy Presence, you retain 4% stamina from Frost Presence, and damage done to you is decreased by an additional 1% in Frost Presence.",
      "While in Blood Presence or Unholy Presence, you retain 8% stamina from Frost Presence, and damage done to you is decreased by an additional 2% in Frost Presence.",
    ],
  },
  {
    name: "empty7",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "threatOfThassarian",
    title: "Threat of Thassarian",
    img: frostImg.threatOfThassarianImg,
    pointsTotal: 3,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 35,
    additionalDescription: ["Requires One-Handed Melee Weapon"],
    branchName: "frost",
    description: [
      "When dual-wielding, your Death Strikes, Obliterates, Plague Strikes, Rune Strikes, Blood Strikes and Frost Strikes have a 30% chance to also deal damage with your offhand weapon.",
      "When dual-wielding, your Death Strikes, Obliterates, Plague Strikes, Rune Strikes, Blood Strikes and Frost Strikes have a 60% chance to also deal damage with your offhand weapon.",
      "When dual-wielding, your Death Strikes, Obliterates, Plague Strikes, Rune Strikes, Blood Strikes and Frost Strikes have a 100% chance to also deal damage with your offhand weapon.",
    ],
  },
  {
    name: "bloodOfTheNorth",
    title: "Blood of the North",
    img: frostImg.bloodOfTheNorthImg,
    pointsTotal: 3,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 35,
    branchName: "frost",
    description: [
      "Increases Blood Strike and Frost Strike damage by 3%.  In addition, whenever you hit with Blood Strike or Pestilence there is a 30% chance that the Blood Rune will become a Death Rune when it activates.  Death Runes count as a Blood, Frost or Unholy Rune.(Proc chance: 30%, 100ms cooldown)",
      "Increases Blood Strike and Frost Strike damage by 6%.  In addition, whenever you hit with Blood Strike or Pestilence there is a 60% chance that the Blood Rune will become a Death Rune when it activates.  Death Runes count as a Blood, Frost or Unholy Rune.(Proc chance: 30%, 100ms cooldown)",
      "Increases Blood Strike and Frost Strike damage by 10%.  In addition, whenever you hit with Blood Strike or Pestilence there is a 100% chance that the Blood Rune will become a Death Rune when it activates.  Death Runes count as a Blood, Frost or Unholy Rune.(Proc chance: 30%, 100ms cooldown)",
    ],
  },
  {
    name: "unbreakableArmor",
    title: "Unbreakable Armor",
    img: frostImg.unbreakableArmorImg,
    pointsTotal: 1,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 35,
    branchName: "frost",
    additionalDescription: [
      "1 Frost Rune / -10 Runic Power",
      "",
      "Instant cast",
      "1 min cooldown",
    ],
    description: [
      "Reinforces your armor with a thick coat of ice, increasing your armor by 25% and increasing your Strength by 20% for 20 sec.",
    ],
  },
  {
    name: "empty8",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "acclimation",
    title: "Acclimation",
    img: frostImg.acclimationImg,
    pointsTotal: 3,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 40,
    branchName: "frost",
    description: [
      "When you are hit by a spell, you have a 10% chance to boost your resistance to that type of magic for 18 sec.  Stacks up to 3 times.(Proc chance: 10%)",
      "When you are hit by a spell, you have a 20% chance to boost your resistance to that type of magic for 18 sec.  Stacks up to 3 times.(Proc chance: 20%)",
      "When you are hit by a spell, you have a 30% chance to boost your resistance to that type of magic for 18 sec.  Stacks up to 3 times.(Proc chance: 30%)",
    ],
  },
  {
    name: "frostStrike",
    title: "Frost Strike",
    img: frostImg.frostStrikeImg,
    pointsTotal: 1,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 40,
    branchName: "frost",
    additionalDescription: ["40 Runic Power", "Melee Range"],
    description: [
      "Instantly strike the enemy, causing 55% weapon damage plus 48 as Frost damage.",
    ],
  },
  {
    name: "guileOfGorefiend",
    title: "Guile of Gorefiend",
    img: frostImg.guileOfGorefiendImg,
    pointsTotal: 3,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 40,
    branchName: "frost",
    description: [
      "Increases the critical strike damage bonus of your Blood Strike, Frost Strike, Howling Blast and Obliterate abilities by 15%, and increases the duration of your Icebound Fortitude by 2 secs.",
      "Increases the critical strike damage bonus of your Blood Strike, Frost Strike, Howling Blast and Obliterate abilities by 30%, and increases the duration of your Icebound Fortitude by 4 secs.",
      "Increases the critical strike damage bonus of your Blood Strike, Frost Strike, Howling Blast and Obliterate abilities by 45%, and increases the duration of your Icebound Fortitude by 6 secs.",
    ],
  },
  {
    name: "empty9",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "empty10",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "tundraStalker",
    title: "Tundra Stalker",
    img: frostImg.tundraStalkerImg,
    pointsTotal: 5,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 45,
    branchName: "frost",
    description: [
      "Your spells and abilities deal 3% more damage to targets infected with Frost Fever.  Also increases your expertise by 1.",
      "Your spells and abilities deal 6% more damage to targets infected with Frost Fever.  Also increases your expertise by 2.",
      "Your spells and abilities deal 9% more damage to targets infected with Frost Fever.  Also increases your expertise by 3.",
      "Your spells and abilities deal 12% more damage to targets infected with Frost Fever.  Also increases your expertise by 4.",
      "Your spells and abilities deal 15% more damage to targets infected with Frost Fever.  Also increases your expertise by 5.",
    ],
  },
  {
    name: "empty10",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "empty11",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "empty12",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 0,
    branchName: "frost",
    isEmpty: true,
  },
  {
    name: "howlingBlast",
    title: "Howling Blast",
    img: frostImg.howlingBlastImg,
    pointsTotal: 1,
    pointsSpent: 0,
    disabled: true,
    pointsRequired: 50,
    branchName: "frost",
    additionalDescription: [
      "1 Frost Rune / 1 Unholy Rune /",
      "20 yd",
      "-15 Runic Power",
      "8 sec cooldown",
    ],
    description: [
      "Blast the target with a frigid wind dealing 198 to 214 Frost damage to all enemies within 10 yards.",
    ],
  },
];
export default frostTalents;
