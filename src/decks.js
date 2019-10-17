// deck = ère = ensemble de stories, mélangées

import { pickRandomIn } from "./utils"
import { playMusic } from "./audio";

export const prophetePrimal = pickRandomIn([
  "Isaac", "Jibril", "Śrījnāna", "Hönir", "Jacob", "Maryam", "Atīśa", "Ítreksjód", "Abel", "Aśoka"
]);
export const propheteHeadway = pickRandomIn([
  "Uriel", "Salomon", "Mounkar", "Thamûd", "Jetāri", "Candrakīrti", "Narfi", "Skjöld", "Hajar", "Loth", "Hermód"
]);
export const propheteApex = pickRandomIn([
  "Frigg", "Lazare", "Jonas", "Ya`qoub", "Zakariya", "Dao'an", "Dinnāga", "Sudri", "Austri", "Kalyānaśrī",
]);
export const propheteAgony = pickRandomIn([
  "Ezéchiel", "Isaiah", "Ariel", "Sarah", "Phir`awn", "Jâlût", "Dōgen", "Dōkyō", "Genshin", "Hyrrokkin", "Thrudgelmir", "Ægir"
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
    interlocuteur: `Prophète ${prophetePrimal}`,
    stories: [
      "choix_espece",
      "region",
      "reproduction",
      "saisons",
      "communication"
    ],
    onStart() {
      playMusic('mus_primal')
    }
  },
  {
    name: "Headway",
    interlocuteur: `Prophète ${propheteHeadway}`,
    stories: [
      "interaction_espece",
      "prophetes",
      "sedentarisation",
      "exploration",
      "dominationGenre",
      "epidemie"
    ],
    onStart() {
      playMusic('mus_headway')
    }
  },
  {
    name: "Apex",
    interlocuteur: `Prophète ${propheteApex}`,
    stories: [
      "criminalite",
      "energie",
      "pharmacologie",
      "eaupolluee",
      "alimentation",
      "puceselectroniques"
    ],
    onStart() {
      playMusic('mus_apex')
    }
  },
  {
    name: "Agony",
    interlocuteur: `Prophète ${propheteAgony}`,
    stories: [
    ],
    onStart() {
      playMusic('mus_agony')
    }
  }
];
