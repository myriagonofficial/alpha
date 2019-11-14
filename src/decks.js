// deck = ère = ensemble de stories, mélangées

import { pickRandomIn } from "./utils"
import { playMusicRandomSequence } from "./audio";

export const prophetePrimal = pickRandomIn([
  "Isaac", "Jibril", "Śrījnāna", "Hönir", "Jacob", "Maryam", "Atīśa", "Ítreksjód", "Abel", "Aśoka"
]);
export const propheteHeadway = pickRandomIn([
  "Uriel", "Salomon", "Mounkar", "Thamûd", "Jetāri", "Candrakīrti", "Narfi", "Skjöld", "Hajar", "Loth", "Hermód"
]);
export const propheteApex = pickRandomIn([
  "Frigg", "Lazare", "Jonas", "Ya`qoub", "Zakariya", "Dao'an", "Dinnāga", "Sudri", "Austri", "Kalyanaarī",
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
    interlocuteur: `Gardien`,
    stories: [
      "choix_espece",
      "region",
      "reproduction",
      "saisons",
      "communication",
      "prophetes"
    ],
    onStart() {
      playMusicRandomSequence(['mus_primal_01', 'mus_primal_02', 'mus_primal_03'])
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
      "epidemie",
      "abris",
      "politique",
      "feu1",
      "exploration2",
      "saisons2"
    ],
    onStart() {
      playMusicRandomSequence(['mus_headway_01', 'mus_headway_02', 'mus_headway_03'])
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
      "puceselectroniques",
      "gestation",
      "mutiles",
      "etoiles",
      "feu2",
      "dechets",
      "recoltes",
      "temps1",
      "science",
      "transport"
    ],
    onStart() {
      playMusicRandomSequence(['mus_apex_01', 'mus_apex_02', 'mus_apex_03'])
    }
  },
  {
    name: "Agony",
    interlocuteur: `Prophète ${propheteAgony}`,
    stories: [
      "UV",
      "fertilite",
      "plante_poison",
      "vieux",
      "hiver",
      "refugies",
      "chomage",
      "champsravages",
      "particules",
      "ressources",
      "eauviciee",
      "chaleur",
      "demo",
      "guerrecivile",
      "robots",
      "extinction",
      "especesmenacees",
      "temps2"
    ],
    onStart() {
      playMusicRandomSequence(['mus_agony_01', 'mus_agony_02', 'mus_agony_03'])
    }
  }
];
