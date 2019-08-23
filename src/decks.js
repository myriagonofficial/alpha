// deck = ère = ensemble de stories, mélangées

export const decks = [
  /*{
    name: "Introduction",
    stories: [
      "introduction"
    ]
  },*/
  // {
  //   name: "(Re)naissance",
  //   stories: [
  //     "init_lune",
  //     "init_terres_arides",
  //     "init_oceans_chauds",
  //     "init_marecages",
  //     "init_volcans",
  //     "init_meteorites",
  //     "init_oceans_geles",
  //     "init_atmosphere_sombre",
  //     "init_rayonnements_dangereux",
  //     "init_sel_de_mer",
  //     "init_sol_glace",
  //     "init_algues",
  //     "init_tectonique"
  //   ],
  //   jauges: [
  //     {
  //       name: "Céleste",
  //       icon: "interface_jauge_picto_progres.png",
  //       gameOverUp: "gameOverUp_Céleste",
  //       gameOverDown: "gameOverDown_Céleste"
  //     },
  //     {
  //       name: "Marine",
  //       icon: "interface_jauge_picto_progres.png",
  //       gameOverUp: "gameOverUp_Marine",
  //       gameOverDown: "gameOverDown_Marine"
  //     },
  //     {
  //       name: "Terrestre",
  //       icon: "interface_jauge_picto_progres.png",
  //       gameOverUp: "gameOverUp_Terrestre",
  //       gameOverDown: "gameOverDown_Terrestre"
  //     }
  //   ]
  // },
  {
    name: "Progrès_Marine",
    stories: [
      "init_marine_progrès_debut",
      "init_arc_marine_deplacement",
      "init_arc_religion_base",
      "init_religion_nomadisme",
      "init_religion_reproduction",
      "init_arc_repro_base",
      "init_arc_poli_base"
    ],
    nbArcsToComplete: 2,
    jauges: [
      {
        name: "Progrès",
        icon: "interface_jauge_picto_progres.png",
        gameOverUp: "gameOverUp_Progrès",
        gameOverDown: "gameOverDown_Progrès"
      },
      {
        name: "Démographie",
        icon: "interface_jauge_picto_demographie.png",
        gameOverUp: "gameOverUp_Démographie",
        gameOverDown: "gameOverDown_Démographie"
      },
      {
        name: "Bonheur",
        icon: "interface_jauge_picto_bonheur.png",
        gameOverUp: "gameOverUp_Bonheur",
        gameOverDown: "gameOverDown_Bonheur"
      },
      {
        name: "Environnement",
        icon: "interface_jauge_picto_environnement.png",
        gameOverUp: "gameOverUp_Environnement",
        gameOverDown: "gameOverDown_Environnement"
      }
    ]
  }
];
