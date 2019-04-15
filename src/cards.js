import { changeJauge, endStory, startStory, gameOver } from "./effects.js";
import { incidence } from "./const.js";

export const cards = {
  1: {
    image: "thunder.jpg",
    description:
      "L'incommensurable envergure de l’Univers s’offre à nous, enivrante et vertigineuse. La Vie - peuplant jadis galaxies, étoiles et planètes - décline secrètement ...",
    yesLabel: "...",
    noLabel: "...",
    yesEffects: [],
    noEffects: []
  },
  2: {
    image: "thunder.jpg",
    description:
      "Nous sommes les Gardiens du Temps, édificateurs du Cosmos, martyrs d'une malédiction nous rendant esclaves de la Vie.",
    yesLabel: "...",
    noLabel: "...",
    yesEffects: [],
    noEffects: []
  },
  3: {
    image: "thunder.jpg",
    description:
      "Sans Vie, plus de témoins du Temps. Le Temps n'existe qu'au travers de ses observateurs, les êtres vivants.",
    yesLabel: "...",
    noLabel: "...",
    yesEffects: [],
    noEffects: []
  },
  4: {
    image: "thunder.jpg",
    description:
      "Comme chaque témoin avant toi, tu as vécu une partie infinitésimale du champs des possibles, et maintenant la tâche t'incombe d'endosser à ton tour le lourd fardeau des Gardiens.",
    yesLabel: "...",
    noLabel: "...",
    yesEffects: [],
    noEffects: []
  },
  5: {
    image: "thunder.jpg",
    description:
      "Nous te confions ce berceau, au printemps de son Histoire. Il sera ta mémoire, l'empreinte que tu laisseras en ce monde.",
    yesLabel: "...",
    noLabel: "...",
    yesEffects: [],
    noEffects: []
  },
  6: {
    image: "thunder.jpg",
    description:
      "Un astre sorti de nulle part semble s’être pris d’affection pour notre planète et s’y est satellisé.",
    yesLabel: "Ah !",
    noLabel: "Ah !",
    yesEffects: [changeJauge("Céleste", -incidence.l)],
    noEffects: [changeJauge("Céleste", -incidence.l)]
  },
  7: {
    image: "thunder.jpg",
    description:
      "Par effet boule de neige il s’est mis à grossir rapidement et obscurci maintenant en partie notre ciel.",
    yesLabel: "On le détruit !",
    noLabel: "Pourquoi pas ...",
    yesEffects: [endStory("lune"), changeJauge("Céleste", +incidence.l)],
    noEffects: [changeJauge("Terrestre", +incidence.s)]
  },
  8: {
    image: "thunder.jpg",
    description:
      "Notre satellite est devenu trop massif et menace de faire sortir notre planète de son orbite.",
    yesLabel: "Cette fois ça suffit !",
    noLabel: "Laissons voir.",
    yesEffects: [endStory("lune"), changeJauge("Céleste", +incidence.l)],
    noEffects: []
  },
  9: {
    image: "thunder.jpg",
    description:
      "Ce qui est devenu un diptyque gravitationnel se dirige maintenant droit vers notre étoile ...",
    yesLabel: "Arf ...",
    noLabel: "Arf ...",
    yesEffects: [gameOver()],
    noEffects: [gameOver()]
  },
  10: {
    image: "thunder.jpg",
    description:
      "Le magma sous la croûte terrestre agite beaucoup les plaques tectoniques. On calme un peu le jeu ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [changeJauge("Terrestre", +incidence.m)],
    noEffects: [startStory("end_tectonique")]
  },
  11: {
    image: "thunder.jpg",
    description:
      "Quelques volcans ont réchauffé les mers et l'atmosphère terrestre, et rendu la terre fertile pour les végétaux.",
    yesLabel: "D'accord",
    noLabel: "D'accord",
    yesEffects: [
      changeJauge("Marine", +incidence.m),
      changeJauge("Céleste", +incidence.m)
    ],
    noEffects: [
      changeJauge("Marine", +incidence.m),
      changeJauge("Céleste", +incidence.m)
    ]
  },
  12: {
    image: "desert.png",
    description:
      "Les terres asséchées sont devenues arides et finissent par se craqueler. Mouillons-les d'une pluie rafraichissante !",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [changeJauge("Terrestre", +incidence.m)],
    noEffects: [changeJauge("Céleste", -incidence.m)]
  },
  13: {
    image: "valley.png",
    description:
      "Les océans semblent si chauds qu'il s'en dégage une brume épaisse. Y plonger quelques icerbergs ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [changeJauge("Marine", -incidence.m)],
    noEffects: [changeJauge("Céleste", +incidence.m)]
  },
  14: {
    image: "valley.png",
    description:
      "La surface terrestre émergée s'apparente à un vaste marécage. On tente de réchauffer ça à coup de soleil ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [
      changeJauge("Céleste", +incidence.m),
      changeJauge("Terrestre", -incidence.m)
    ],
    noEffects: [changeJauge("Terrestre", +incidence.m)]
  },
  15: {
    image: "fireball.png",
    description:
      "Notre planète semble bouillonner de lave en fusion. Est-ce qu'on la soulage en laissant émerger quelques volcans ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [
      changeJauge("Marine", +incidence.m),
      changeJauge("Céleste", +incidence.m)
    ],
    noEffects: [
      changeJauge("Marine", +incidence.m),
      changeJauge("Céleste", +incidence.m)
    ]
  },
  16: {
    image: "meteor.png",
    description:
      "Une pluie de météorites est sur le point de s'abattre sur le monde.",
    yesLabel: "Les faire tomber dans l'océan.",
    noLabel: "Les faire tomber sur un continent.",
    yesEffects: [startStory("end_meteorite_marine")],
    noEffects: [startStory("end_meteorite_terrestre")]
  },
  17: {
    image: "water.png",
    description:
      "Une couche de glace s'est formée à la surface des océans et la plonge dans l'obscurité.",
    yesLabel: "Soleil ...?",
    noLabel: "Tant mieux.",
    yesEffects: [
      changeJauge("Marine", +incidence.m),
      changeJauge("Terrestre", -incidence.m)
    ],
    noEffects: [changeJauge("Marine", -incidence.m)]
  },
  18: {
    image: "valley.png",
    description:
      "L'atmosphère est rendue si épaisse qu'elle s'est opacifiée. La réchauffer pourrait bien précipiter les nuages.",
    yesLabel: "C'est parti !",
    noLabel: "Surtout pas !",
    yesEffects: [changeJauge("Céleste", +incidence.m)],
    noEffects: [changeJauge("Terrestre", +incidence.m)]
  },
  19: {
    image: "valley.png",
    description:
      "Par endroits, les rayons du soleil sont intenses et deviennent nocifs. Peut-être qu'un peu d'atmosphère ferait bouclier ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [
      changeJauge("Céleste", +incidence.s),
      changeJauge("Terrestre", +incidence.l)
    ],
    noEffects: [
      changeJauge("Terrestre", -incidence.l),
      changeJauge("Céleste", -incidence.s)
    ]
  },
  20: {
    image: "water.png",
    description:
      "De la glace persiste à la surface de nos océans. On pourrait peut-être utiliser des roches salées pour la faire fondre ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [changeJauge("Marine", +incidence.m)],
    noEffects: [changeJauge("Marine", -incidence.m)]
  },
  21: {
    image: "valley.png",
    description:
      "Une épaisse couche de neige éternelle recouvre certains de nos paysages, pas un perce-neige à l’horizon. Faut-il y souffler un vent chaud ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [
      changeJauge("Terrestre", -incidence.l),
      changeJauge("Céleste", +incidence.m),
      changeJauge("Marine", +incidence.s)
    ],
    noEffects: [changeJauge("Terrestre", +incidence.m)]
  },
  22: {
    image: "water.png",
    description:
      "De nombreuses algues ont envahi nos fonds marins et rendent l’eau trouble et obscure.",
    yesLabel: "Soleil !",
    noLabel: "Chouette.",
    yesEffects: [
      changeJauge("Marine", +incidence.s),
      changeJauge("Céleste", +incidence.m)
    ],
    noEffects: []
  },
  23: {
    image: "thunder.jpg",
    description:
      "Un astre sorti de nulle part semble s’être pris d’affection pour notre planète et s’y est satellisé.",
    yesLabel: "On le détruit !",
    noLabel: "Pourquoi pas ...",
    yesEffects: [],
    noEffects: [changeJauge("Céleste", -incidence.l)]
  },
  24: {
    image: "thunder.jpg",
    description:
      "L'astre qui a élu domicile autour de notre planète s'est stabilisé sur une orbite régulière.",
    yesLabel: "Chouette !",
    noLabel: "Chouette !",
    yesEffects: [],
    noEffects: []
  },
  25: {
    image: "thunder.jpg",
    description:
      "Il y a en chaque être de cette planète un peu de toi, ils sont ton paradis, ta gratitude inconditionnelle.",
    yesLabel: "...",
    noLabel: "...",
    yesEffects: [],
    noEffects: []
  },
  26: {
    image: "thunder.jpg",
    description:
      "Nous laisserons libre cours à ton imagination, mais garde bien à l'esprit que l'équilibre sera la clef du fleurissement de ton jardin.",
    yesLabel: "...",
    noLabel: "...",
    yesEffects: [],
    noEffects: []
  },
  27: {
    image: "meteor.png",
    description:
      "Ce vaisseau minéral abritait des formes de vie à qui profite ce nouvel environnement. ",
    yesLabel: "Surprenant !",
    noLabel: "Surprenant !",
    yesEffects: [changeJauge("Marine", +incidence.m)],
    noEffects: [changeJauge("Marine", +incidence.m)]
  },
  28: {
    image: "meteor.png",
    description:
      "Ce vaisseau minéral abritait des formes de vie à qui profite ce nouvel environnement. ",
    yesLabel: "Surprenant !",
    noLabel: "Surprenant !",
    yesEffects: [changeJauge("Terrestre", +incidence.m)],
    noEffects: [changeJauge("Terrestre", +incidence.m)]
  },
  29: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    yesEffects: "",
    noEffects: ""
  },
  30: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    yesEffects: "",
    noEffects: ""
  },
  31: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    yesEffects: "",
    noEffects: ""
  },
  32: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    yesEffects: "",
    noEffects: ""
  },
  33: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    yesEffects: "",
    noEffects: ""
  },
  34: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    yesEffects: "",
    noEffects: ""
  },
  35: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    yesEffects: "",
    noEffects: ""
  }
};
