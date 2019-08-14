// deck = ère = ensemble de stories, mélangées

export const decks = [
  // {
  //   name: "Introduction",
  //   stories: [
  //     "introduction"
  //   ]
  // },
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
  //     "init_rayonnemets_dangereux",
  //     "init_sel_de_mer",
  //     "init_sol_glace",
  //     "init_algues",
  //     "init_tectonique"
  //   ],
  //   jauges: [
  //     { name: "Céleste", level: 50},
  //     { name: "Marine", level: 50},
  //     { name: "Terrestre", level: 50}
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
      "init_arc_repro_base"
    ],
    jauges: [
      { name: "Progrès", icon: "interface_jauge_picto_progres.png", level: 50 },
      { name: "Démographie", icon: "interface_jauge_picto_demographie.png", level: 50 },
      { name: "Bonheur", icon: "interface_jauge_picto_bonheur.png", level: 50 },
      { name: "Environnement", icon: "interface_jauge_picto_environnement.png", level: 50 }
    ]
  }
];
