// deck = ère = ensemble de stories, mélangées

import { shuffleArray } from "./utils"

export const prophetesPrimal = shuffleArray([
  "Isaac","Jibril","Śrījnāna","Hönir","Jacob","Maryam","Atīśa","Ítreksjód","Abel","Aśoka"
]);
export const prophetesHeadway = shuffleArray([
  "Uriel","Salomon","Mounkar","Thamûd","Jetāri","Candrakīrti","Narfi","Skjöld","Hajar","Loth","Hermód"
]);
export const prophetesApex = shuffleArray([
  "Frigg","Lazare","Jonas","Ya`qoub","Zakariya","Dao'an","Dinnāga","Sudri","Austri","Kalyānaśrī",
]);
export const prophetesAgony = shuffleArray([
  "Ezéchiel","Isaiah","Ariel","Sarah","Phir`awn","Jâlût","Dōgen","Dōkyō","Genshin","Hyrrokkin","Thrudgelmir","Ægir"
]);


export const decks = [
  {
    name: "Introduction",
    interlocuteur: `Gardien`,
    stories: [
      "introduction",
    ]
  },
  {
    name: "Primal",
    interlocuteur: `Prophète ${prophetesPrimal[0]}`,
    stories: [
      "choix_espece",
      "region",
      "reproduction",
      "saisons",
      "communication"
    ]
  },
  {
    name: "Headway",
    interlocuteur: `Prophète ${prophetesHeadway[0]}`,
    stories: [
      "interaction_espece",
      "prophetes",
      "sedentarisation",
      "exploration",
      "dominationGenre",
      "epidemie"
    ]
  },
  {
    name: "Apex",
    interlocuteur: `Prophète ${prophetesApex[0]}`,
    stories: [
      "criminalite",
      "energie",
      "pharmacologie",
      "eaupolluee",
      "alimentation",
      "puceselectroniques"
    ]
  },
  {
    name: "Agony",
    interlocuteur: `Prophète ${prophetesAgony[0]}`,
    stories: [
    ]
  }
];
