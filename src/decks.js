// deck = ère = ensemble de stories, mélangées

import { shuffleArray } from "./utils"

export const nomsProphetes = shuffleArray([
  "Bernard", "Gérard", "Claudie", "Robert", "Alphonse", "Philippe"
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
    interlocuteur: `Prophète ${nomsProphetes[0]}`,
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
    interlocuteur: `Prophète ${nomsProphetes[1]}`,
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
    interlocuteur: `Prophète ${nomsProphetes[2]}`,
    stories: [
      "criminalite",
      "energie"
    ]
  }
];
