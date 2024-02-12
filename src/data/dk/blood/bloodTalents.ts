import { Talent } from "../../../types";
import * as bloodImg from "./bloodImages";
const bloodTalents: Talent[] = [
  {
    name: "butchery",
    title: "Butchery",
    img: bloodImg.butcheryImg,
    pointsTotal: 2,
    pointsSpent: 0,

    disabled: false,
    pointsRequired: 0,
    branchName: "blood",
    description: [
      "Whenever you kill an enemy that grants experience or honor, you generate up to 10 runic power.  In addition, you generate 1 runic power per 5 sec while in combat.",
      "Whenever you kill an enemy that grants experience or honor, you generate up to 10 runic power.  In addition, you generate 2 runic power per 5 sec while in combat.",
    ],
  },
  {
    name: "subversion",
    title: "Subversion",
    img: bloodImg.subversionImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: false,
    pointsRequired: 0,
    branchName: "blood",
    description: [
      "Increases the critical strike chance of Blood Strike, Scourge Strike, Heart Strike and Obliterate by 3%, and reduces threat generated while in Blood or Unholy Presence by 8%.",
      "Increases the critical strike chance of Blood Strike, Scourge Strike, Heart Strike and Obliterate by 6%, and reduces threat generated while in Blood or Unholy Presence by 16%.",
      "Increases the critical strike chance of Blood Strike, Scourge Strike, Heart Strike and Obliterate by 9%, and reduces threat generated while in Blood or Unholy Presence by 25%.",
    ],
  },
  {
    name: "bladeBarrier",
    title: "Blade Barrier",
    img: bloodImg.bladeBarrierImg,
    pointsTotal: 5,
    pointsSpent: 0,

    disabled: false,
    pointsRequired: 0,
    branchName: "blood",
    description: [
      "Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 1% for the next 10 sec.",
      "Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 2% for the next 10 sec.",
      "Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 3% for the next 10 sec.",
      "Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 4% for the next 10 sec.",
      "Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 5% for the next 10 sec.",
    ],
  },
  {
    name: "empty1",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "bladedArmor",
    title: "Bladed Armor",
    img: bloodImg.bladedArmorImg,
    pointsTotal: 5,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 5,
    branchName: "blood",
    description: [
      "Increases your attack power by 1 for every 180 armor value you have.",
      "Increases your attack power by 2 for every 180 armor value you have.",
      "Increases your attack power by 3 for every 180 armor value you have.",
      "Increases your attack power by 4 for every 180 armor value you have.",
      "Increases your attack power by 5 for every 180 armor value you have.",
    ],
  },
  {
    title: "Scent Of Blood",
    name: "scentOfBlood",
    img: bloodImg.scentOfBloodImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 5,
    branchName: "blood",
    description: [
      "You have a 15% chance after dodging, parrying or taking  direct damage to gain the Scent of Blood effect, causing your next melee hit to generate 10 runic power.(Proc chance: 15%)",
      "You have a 15% chance after dodging, parrying or taking  direct damage to gain the Scent of Blood effect, causing your next 2 melee hit to generate 10 runic power.(Proc chance: 15%)",
      "You have a 15% chance after dodging, parrying or taking  direct damage to gain the Scent of Blood effect, causing your next 3 melee hit to generate 10 runic power.(Proc chance: 15%)",
    ],
  },
  {
    name: "twoHandSpec",
    title: "Two-Handed Weapon Specialization",
    img: bloodImg.twoHandSpecImg,
    pointsTotal: 2,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 5,
    branchName: "blood",
    description: [
      "Increases the damage you deal with two-handed melee weapons by 2%.",
      "Increases the damage you deal with two-handed melee weapons by 4%.",
    ],
  },
  {
    name: "empty2",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "runeTap",
    title: "Rune Tap",
    img: bloodImg.runeTapImg,
    pointsTotal: 1,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 10,
    branchName: "blood",
    parentTalentTo: {
      name: "improvedRuneTap",
    },
    description: ["Converts 1 Blood Rune into 10% of your maximum health."],
    additionalDescription: ["1 Blood Rune", "Instant cast", "1 min cooldown"],
  },
  {
    name: "darkConviction",
    title: "Dark Conviction",
    img: bloodImg.darkConvictionImg,
    pointsTotal: 5,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 10,
    branchName: "blood",
    parentTalentTo: {
      name: "bloodyVengeance",
    },
    description: [
      "Increases your chance to critically hit with weapons, spells and abilities by 1%.",
      "Increases your chance to critically hit with weapons, spells and abilities by 2%.",
      "Increases your chance to critically hit with weapons, spells and abilities by 3%.",
      "Increases your chance to critically hit with weapons, spells and abilities by 4%.",
      "Increases your chance to critically hit with weapons, spells and abilities by 5%.",
    ],
  },
  {
    name: "deathRuneMastery",
    title: "Death Rune Mastery",
    img: bloodImg.deathRuneMasteryImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 10,
    branchName: "blood",
    description: [
      "Whenever you hit with Death Strike or Obliterate there is a 33% chance that the Frost and Unholy Runes will become Death Runes when they activate.  Death Runes count as a Blood, Frost or Unholy Rune.(Proc chance: 33%)",
      "Whenever you hit with Death Strike or Obliterate there is a 66% chance that the Frost and Unholy Runes will become Death Runes when they activate.  Death Runes count as a Blood, Frost or Unholy Rune.(Proc chance: 66%)",
      "Whenever you hit with Death Strike or Obliterate there is a 100% chance that the Frost and Unholy Runes will become Death Runes when they activate.  Death Runes count as a Blood, Frost or Unholy Rune.(Proc chance: 100%)",
    ],
  },
  {
    name: "empty3",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "improvedRuneTap",
    title: "Improved Rune Tap",
    img: bloodImg.runeTapImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 15,
    branchName: "blood",
    childTalentWith: {
      name: "runeTap",
      pointsRequired: 1,
      arrowStyles: "top: -23px; height: 26px;",
    },
    description: [
      "Increases the health provided by Rune Tap by 33% and lowers its cooldown by 10 sec.",
      "Increases the health provided by Rune Tap by 66% and lowers its cooldown by 10 sec.",
      "Increases the health provided by Rune Tap by 100% and lowers its cooldown by 10 sec.",
    ],
  },
  {
    name: "empty4",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "spellDeflection",
    title: "Spell Deflection",
    img: bloodImg.spellDeflectionImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 15,
    branchName: "blood",
    description: [
      "You have a chance equal to your Parry chance of taking 15% less damage from a direct damage spell.",
      "You have a chance equal to your Parry chance of taking 30% less damage from a direct damage spell.",
      "You have a chance equal to your Parry chance of taking 45% less damage from a direct damage spell.",
    ],
  },
  {
    name: "vendetta",
    title: "Vendetta",
    img: bloodImg.vendettaImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 15,
    branchName: "blood",
    description: [
      "Heals you for up to 2% of your maximum health whenever you kill a target that yields experience or honor.",
      "Heals you for up to 4% of your maximum health whenever you kill a target that yields experience or honor.",
      "Heals you for up to 6% of your maximum health whenever you kill a target that yields experience or honor.",
    ],
  },
  {
    name: "bloodyStrikes",
    title: "Bloody Strikes",
    img: bloodImg.bloodyStrikesImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 20,
    branchName: "blood",
    description: [
      "Increases the damage of Blood Strike by 5% and Heart Strike by 15%, and increases the damage of Blood Boil by 10%.",
      "Increases the damage of Blood Strike by 10% and Heart Strike by 30%, and increases the damage of Blood Boil by 20%.",
      "Increases the damage of Blood Strike by 15% and Heart Strike by 45%, and increases the damage of Blood Boil by 30%.",
    ],
  },
  {
    name: "empty5",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "veteranOfThirdWar",
    title: "Veteran Of Third War",
    img: bloodImg.veteranImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 20,
    branchName: "blood",
    description: [
      "Increases your total Strength by 2%, your Stamina by 1%, and your expertise by 2.",
      "Increases your total Strength by 4%, your Stamina by 2%, and your expertise by 4.",
      "Increases your total Strength by 6%, your Stamina by 3%, and your expertise by 6.",
    ],
  },
  {
    name: "markOfBlood",
    title: "Mark Of Blood",
    img: bloodImg.markOfBlood,
    pointsTotal: 1,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 20,
    branchName: "blood",
    description: [
      " Place a Mark of Blood on an enemy.  Whenever the marked enemy deals damage to a target, that target is healed for 4% of its maximum health.  Lasts for 20 sec or up to 20 hits.",
    ],
    additionalDescription: [
      "1 Blood Rune",
      "30 yd range",
      "Instant cast",
      "3 min cooldown",
    ],
  },
  {
    name: "empty6",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "bloodyVengeance",
    title: "Bloody Vengeance",
    img: bloodImg.bloodyVengeanceImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    childTalentWith: {
      name: "darkConviction",
      pointsRequired: 5,
      arrowStyles: "top: -143px; height: 148px;",
    },
    description: [
      "Gives you a 1% bonus to physical damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.",
      "Gives you a 2% bonus to physical damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.",
      "Gives you a 3% bonus to physical damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.",
    ],
  },
  {
    name: "abominationsMight",
    title: "Abominations Might",
    img: bloodImg.abominationsMightImg,
    pointsTotal: 2,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    description: [
      "Increases the attack power by 5% of party and raid members within 100 yards.  Also increases your total Strength by 1%.",
      "Increases the attack power by 10% of party and raid members within 100 yards.  Also increases your total Strength by 2%.",
    ],
  },
  {
    name: "empty7",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "bloodWorms",
    title: "Blood Worms",
    img: bloodImg.bloodWormsImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 30,
    branchName: "blood",
    description: [
      "Your weapon hits have a 3% chance to cause the target to spawn 2-4 Bloodworms.  Bloodworms attack your enemies, healing you as they do damage for 20 sec or until killed. (Proc chance: 3%, 20s cooldown)",
      "Your weapon hits have a 6% chance to cause the target to spawn 2-4 Bloodworms.  Bloodworms attack your enemies, healing you as they do damage for 20 sec or until killed. (Proc chance: 6%, 20s cooldown)",
      "Your weapon hits have a 9% chance to cause the target to spawn 2-4 Bloodworms.  Bloodworms attack your enemies, healing you as they do damage for 20 sec or until killed. (Proc chance: 9%, 20s cooldown)",
    ],
  },
  {
    name: "unholyFrenzy",
    title: "Unholy Frenzy",
    img: bloodImg.unholyFrenzyImg,
    pointsTotal: 1,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 30,
    branchName: "blood",
    description: [
      " Induces a friendly unit into a killing frenzy for 30 sec.  The target is Enraged, which increases their physical damage by 20%, but causes them to lose health equal to 1% of their maximum health every second.",
    ],
    additionalDescription: ["30 yd range", "Instant", "3 min cooldown"],
  },
  {
    name: "improvedBloodPresence",
    title: "Improved Blood Presence",
    img: bloodImg.improvedBloodPresenceImg,
    pointsTotal: 2,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 30,
    branchName: "blood",
    description: [
      "While in Frost Presence or Unholy Presence, you retain 2% healing from Blood Presence, and healing done to you is increased by 5% in Blood Presence.",
      "While in Frost Presence or Unholy Presence, you retain 4% healing from Blood Presence, and healing done to you is increased by 10% in Blood Presence.",
    ],
  },
  {
    name: "empty8",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "improvedDeathStriker",
    title: "Improved Death Striker",
    img: bloodImg.improvedDeathStrikerImg,
    pointsTotal: 2,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 35,
    branchName: "blood",
    description: [
      "Increases the damage of your Death Strike by 15%, increases its critical strike chance by 3%, and increases the healing granted by 25%.",
      "Increases the damage of your Death Strike by 30%, increases its critical strike chance by 6%, and increases the healing granted by 50%.",
    ],
  },
  {
    name: "suddenDoom",
    title: "Sudden Doom",
    img: bloodImg.suddenDoomImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 35,
    branchName: "blood",
    description: [
      "Your Blood Strikes and Heart Strikes have a 5% chance to launch a free Death Coil at your target.(Proc chance: 5%)",
      "Your Blood Strikes and Heart Strikes have a 10% chance to launch a free Death Coil at your target.(Proc chance: 10%)",
      "Your Blood Strikes and Heart Strikes have a 15% chance to launch a free Death Coil at your target.(Proc chance: 15%)",
    ],
  },
  {
    name: "vampiricBlood",
    title: "Vampiric Blood",
    img: bloodImg.vampiricBloodImg,
    pointsTotal: 1,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 35,
    branchName: "blood",
    description: [
      "Temporarily grants the Death Knight 15% of maximum health and increases the amount of health generated through spells and effects by 35% for 10 sec.  After the effect expires, the health is lost.",
    ],
    additionalDescription: [
      "1 Blood Rune / -10 Runic Power",
      "Instant cast",
      "1 min cooldown",
    ],
  },
  {
    name: "empty9",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "willOfTheNecropolis",
    title: "Will Of The Necropolis",
    img: bloodImg.willOfTheNecropolisImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 40,
    branchName: "blood",
    description: [
      "Damage that would take you below 35% health or taken while you are at 35% health is reduced by 5%.",
      "Damage that would take you below 35% health or taken while you are at 35% health is reduced by 10%.",
      "Damage that would take you below 35% health or taken while you are at 35% health is reduced by 15%.",
    ],
  },
  {
    name: "heartStrike",
    title: "HeartStrike",
    img: bloodImg.heartStrikeImg,
    pointsTotal: 1,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 40,
    branchName: "blood",
    description: [
      "Instantly strike the target and his nearest ally, causing 50% weapon damage plus 125 on the primary target, and 25% weapon damage plus 63 on the secondary target.  Each target takes 10% additional damage for each of your diseases active on that target",
    ],
    additionalDescription: [
      "1 Blood Rune / -10 Runic",
      "Melee",
      "Instant cast",
      "Range",
    ],
  },
  {
    name: "mightOfMograine",
    title: "Might Of Mograine",
    img: bloodImg.mightOfMograineImg,
    pointsTotal: 3,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 40,
    branchName: "blood",
    description: [
      "Increases the critical strike damage bonus of your Blood Boil, Blood Strike, Death Strike, and Heart Strike abilities by 15%.",
      "Increases the critical strike damage bonus of your Blood Boil, Blood Strike, Death Strike, and Heart Strike abilities by 30%.",
      "Increases the critical strike damage bonus of your Blood Boil, Blood Strike, Death Strike, and Heart Strike abilities by 45%.",
    ],
  },
  {
    name: "empty10",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "empty11",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "bloodGorgedImg",
    title: "Blood GorgedImg",
    img: bloodImg.bloodGorgedImg,
    pointsTotal: 5,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 45,
    branchName: "blood",
    description: [
      "When you are above 75% health, you deal 2% more damage.  In addition, your attacks ignore up to 2% of your opponent's armor at all times.",
      "When you are above 75% health, you deal 4% more damage.  In addition, your attacks ignore up to 4% of your opponent's armor at all times.",
      "When you are above 75% health, you deal 6% more damage.  In addition, your attacks ignore up to 6% of your opponent's armor at all times.",
      "When you are above 75% health, you deal 8% more damage.  In addition, your attacks ignore up to 8% of your opponent's armor at all times.",
      "When you are above 75% health, you deal 10% more damage.  In addition, your attacks ignore up to 10% of your opponent's armor at all times.",
    ],
  },
  {
    name: "empty12",
    img: "",
    title: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "empty13",
    img: "",
    title: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "empty14",
    img: "",
    title: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
  {
    name: "dancingRuneWeaponImg",
    title: "Dancing Rune Weapon",
    img: bloodImg.dancingRuneWeaponImg,
    pointsTotal: 1,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 50,
    branchName: "blood",
    description: [
      "Summons a second rune weapon that fights on its own for 12 sec, doing the same attacks as the Death Knight but for 50% reduced damage and healing.",
    ],
    additionalDescription: [
      "60 Runic Power",
      "30 yd range",
      "Instant cast",
      "1.5 min cooldown",
    ],
  },
  {
    name: "empty5",
    title: "",
    img: "",
    pointsTotal: 0,
    pointsSpent: 0,

    disabled: true,
    pointsRequired: 25,
    branchName: "blood",
    isEmpty: true,
  },
];
export default bloodTalents;
