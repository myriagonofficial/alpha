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
      "Quelques poussières qui dérivaient dans l'espace se sont laissées attirer par l'orbite de notre planète.",
    yesLabel: "Ah !",
    noLabel: "Ah !",
    yesEffects: [],
    noEffects: []
  },
  7: {
    image: "thunder.jpg",
    description:
      "Les poussières qui gravitent autour de notre planète semblent s'aglutiner petit à petit et forment quelques roches. On s'en débarrasse ?",
    yesLabel: "Oui",
    noLabel: "Non, c'est joli.",
    yesEffects: [endStory("lune")],
    noEffects: []
  },
  8: {
    image: "thunder.jpg",
    description:
      "Le temps passant, les quelques roches qui nous entourent ont grandi et une ceinture se dessine petit à petit autour de notre astre. Le ciel s'obscurci légèrement.",
    yesLabel: "Très bien.",
    noLabel: "Soufflons tout ça.",
    yesEffects: [
      changeJauge("Terrestre", +incidence.s),
      changeJauge("Céleste", -incidence.s)
    ],
    noEffects: [endStory("lune")]
  },
  9: {
    image: "thunder.jpg",
    description:
      "Un météore imposant s'approche calmement de notre orbite et représente un risque en cas de collision. On l'explose ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [startStory("astre_explose")],
    noEffects: [startStory("astre_safe")]
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
      changeJauge("Marine", +incidence.s),
      changeJauge("Céleste", +incidence.m)
    ],
    noEffects: [
      changeJauge("Marine", +incidence.s),
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
    noEffects: [changeJauge("Céleste", -incidence.l)]
  },
  13: {
    image: "valley.png",
    description:
      "Les océans semblent si chauds qu'il s'en dégage une brume épaisse. Y plonger quelques icerbergs ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [changeJauge("Marine", -incidence.m)],
    noEffects: []
  },
  14: {
    image: "valley.png",
    description:
      "La surface terrestre émergée s'apparente à un vaste marécage. On tente de réchauffer ça à coup de soleil ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [
      changeJauge("Céleste", -incidence.s),
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
    yesEffects: [changeJauge("Terrestre", -incidence.l)],
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
    noEffects: [changeJauge("Marine", -incidence.l)]
  },
  18: {
    image: "valley.png",
    description:
      "L'atmosphère est rendue si épaisse qu'elle s'est opacifiée. La réchauffer pourrait bien précipiter les nuages.",
    yesLabel: "C'est parti !",
    noLabel: "Surtout pas !",
    yesEffects: [changeJauge("Céleste", +incidence.m)],
    noEffects: [changeJauge("Terrestre", +incidence.s)]
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
      changeJauge("Céleste", +incidence.m),
      changeJauge("Terrestre", -incidence.m)
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
    yesEffects: [changeJauge("Marine", +incidence.s)],
    noEffects: [changeJauge("Marine", +incidence.s)]
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
    image: "thunder.jpg",
    description:
      "Le météore explose à une bonne distance de notre planète mais une grande quantité de débris se précipite vers elle. ",
    yesLabel: "Soufflons dessus.",
    noLabel: "Mince ...",
    yesEffects: [startStory("astre_explose_souffle")],
    noEffects: [startStory("pluie_eclats")]
  },
  30: {
    image: "thunder.jpg",
    description:
      "Quelques éclats du météore explosé sont venus peupler la masse grandissante de rochers autour de notre planète, et un gros rocher semble attirer ses voisins vers lui.",
    yesLabel: "Chassons-le",
    noLabel: "Ok !",
    yesEffects: [startStory("astre_explose_souffle_ceinture")],
    noEffects: [startStory("astre_explose_souffle_lune")]
  },
  31: {
    image: "thunder.jpg",
    description:
      "Le météore file droit vers notre planète et le percute violemment, la disloquant en quelques secondes ... Ce qu'il en reste ne risque plus d'abriter la vie.",
    yesLabel: "Mince ...",
    noLabel: "Mince ...",
    yesEffects: [gameOver()],
    noEffects: [gameOver()]
  },
  32: {
    image: "thunder.jpg",
    description:
      "Un joli disque de poussières et de rochers a fini par se stabiliser autour de notre planète et filtre un peu la lumière de l'étoile. ",
    yesLabel: "Soufflons dessus.",
    noLabel: "Superbe !",
    yesEffects: [
      changeJauge("Terrestre", -incidence.s),
      changeJauge("Céleste", +incidence.s)
    ],
    noEffects: [
      changeJauge("Terrestre", +incidence.l),
      changeJauge("Céleste", -incidence.s)
    ]
  },
  33: {
    image: "thunder.jpg",
    description:
      "Le rocher de notre ceinture de poussières s'est transformé en une lune toute rondelette, est-ce risqué de la laisser grossir ?",
    yesLabel: "Oui",
    noLabel: "Non",
    yesEffects: [startStory("end_lune_gardee")],
    noEffects: [startStory("end_lune_enorme")]
  },
  34: {
    image: "thunder.jpg",
    description:
      "La Lune massive continuant à s'alimenter de notre ceinture de débris a fini par faire dévier notre planète de son orbite. Ce qui est devenu un diptyque gravitationnel se dirige maintenant droit vers notre étoile ...",
    yesLabel: "Mince ...",
    noLabel: "Mince ...",
    yesEffects: [gameOver()],
    noEffects: [gameOver()]
  },
  35: {
    image: "thunder.jpg",
    description:
      "Les débris restants chassés, seule notre nouvelle amie sattelisée demeure autour de notre planète et ne risque plus de faire autre chose que de l'ombre.",
    yesLabel: "Chouette !",
    noLabel: "Chouette !",
    yesEffects: [
      changeJauge("Terrestre", +incidence.l),
      changeJauge("Céleste", -incidence.m)
    ],
    noEffects: [
      changeJauge("Terrestre", +incidence.l),
      changeJauge("Céleste", -incidence.m)
    ]
  },
  36: {
    image: "thunder.jpg",
    description:
      "Les éclats du météore s'effondrent sur notre planète en creusant de nombreux cratères à la surface du sol, formant au passage des cuvettes océaniques.",
    yesLabel: "Aïe !",
    noLabel: "Aïe !",
    yesEffects: [
      changeJauge("Marine", +incidence.s),
      changeJauge("Céleste", -incidence.l),
      changeJauge("Terrestre", -incidence.l)
    ],
    noEffects: [
      changeJauge("Marine", +incidence.s),
      changeJauge("Céleste", -incidence.l),
      changeJauge("Terrestre", -incidence.l)
    ]
  },
  "": {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    yesEffects: "",
    noEffects: ""
  }
};
