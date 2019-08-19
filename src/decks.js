// deck = ère = ensemble de stories, mélangées

export const decks = [
  /*{
    name: "Introduction",
    stories: [
      "introduction"
    ]
  },*/
  {
    name: "Progrès_Marine",
    stories: [
      "init_marine_progrès_debut",
      "init_arc_marine_deplacement",
      "init_arc_religion_base",
      "init_religion_nomadisme",
      "init_religion_reproduction",
      "init_arc_repro_base"
    ],
    nbStoriesToComplete: 5,
    jauges: [
      {
        name: "Progrès",
        icon: "interface_jauge_picto_progres.png",
        gameOverUp: "gameOverUp_Céleste",
        gameOverDown: "gameOverDown_Céleste"
      },
      {
        name: "Démographie",
        icon: "interface_jauge_picto_demographie.png",
        gameOverUp: "gameOverUp_Céleste",
        gameOverDown: "gameOverDown_Céleste"
      },
      {
        name: "Bonheur",
        icon: "interface_jauge_picto_bonheur.png",
        gameOverUp: "gameOverUp_Céleste",
        gameOverDown: "gameOverDown_Céleste"
      },
      {
        name: "Environnement",
        icon: "interface_jauge_picto_environnement.png",
        gameOverUp: "gameOverUp_Céleste",
        gameOverDown: "gameOverDown_Céleste"
      }
    ]
  }
];
