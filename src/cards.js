import { changeJauge, endStory, startStory, gameOver } from "./effects.js";
import { incidence } from "./const.js";

export const cards = {
  1: {
    image: "thunder.jpg",
    description: "Coucou mec !",
    yesLabel: "Salut",
    noLabel: "Salut",
    appearsOnce: "",
    yesEffects: [],
    noEffects: []
  },
  2: {
    image: "thunder.jpg",
    description: "Tu vas bien ?",
    yesLabel: "Oui",
    noLabel: "Non",
    appearsOnce: "",
    yesEffects: [],
    noEffects: []
  },
  3: {
    image: "thunder.jpg",
    description: "Bah cool alors !",
    yesLabel: "Super !",
    noLabel: "Super !",
    appearsOnce: "",
    yesEffects: [],
    noEffects: []
  },
  4: {
    image: "thunder.jpg",
    description: "C'est sympa d'te voir !",
    yesLabel: "Super !",
    noLabel: "Super !",
    appearsOnce: "",
    yesEffects: [],
    noEffects: []
  },
  5: {
    image: "thunder.jpg",
    description: "Bonne journée !",
    yesLabel: "Super !",
    noLabel: "Super !",
    appearsOnce: "",
    yesEffects: [],
    noEffects: []
  },
  6: {
    image: "thunder.jpg",
    description:
      "Un astre sorti de nulle part semble s’être pris d’affection pour notre planète et s’y est satellisé.",
    yesLabel: "Ah !",
    noLabel: "Ah !",
    appearsOnce: "1",
    yesEffects: [changeJauge("Céleste", +20)],
    noEffects: [changeJauge("Céleste", +20)]
  },
  7: {
    image: "thunder.jpg",
    description:
      "Par effet boule de neige il s’est mis à grossir rapidement et obscurci maintenant en partie notre ciel.",
    yesLabel: "On le détruit !",
    noLabel: "Pourquoi pas ...",
    appearsOnce: "1",
    yesEffects: [endStory("lune"), changeJauge("Céleste", +20)],
    noEffects: []
  },
  8: {
    image: "thunder.jpg",
    description:
      "Notre satellite est devenu trop massif et menace de faire sortir notre planète de son orbite.",
    yesLabel: "Cette fois ça suffit !",
    noLabel: "Laissons voir.",
    appearsOnce: "1",
    yesEffects: [endStory("lune"), changeJauge("Céleste", +20)],
    noEffects: []
  },
  9: {
    image: "thunder.jpg",
    description:
      "Ce qui est devenu un diptyque gravitationnel se dirige maintenant droit vers notre étoile ...",
    yesLabel: "Arf ...",
    noLabel: "Arf ...",
    appearsOnce: "1",
    yesEffects: [gameOver()],
    noEffects: [gameOver()]
  },
  10: {
    image: "thunder.jpg",
    description:
      "Le magma sous la croûte terrestre agite beaucoup les plaques tectoniques. On calme un peu le jeu ?",
    yesLabel: "Oui",
    noLabel: "Non",
    appearsOnce: "1",
    yesEffects: [],
    noEffects: []
  },
  11: {
    image: "thunder.jpg",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "1",
    yesEffects: [],
    noEffects: []
  },
  12: {
    image: "desert.png",
    description:
      "Les terres asséchées sont devenues arides et finissent par se craqueler. Mouillons-les d'une pluie rafraichissante !",
    yesLabel: "Oui",
    noLabel: "Non",
    appearsOnce: "1",
    yesEffects: [changeJauge("Terrestre", +10)],
    noEffects: [changeJauge("Céleste", -10)]
  },
  13: {
    image: "valley.png",
    description:
      "Les océans semblent si chauds qu'il s'en dégage une brume épaisse. Y plonger quelques icerbergs ?",
    yesLabel: "Oui",
    noLabel: "Non",
    appearsOnce: "1",
    yesEffects: [changeJauge("Marine", -10)],
    noEffects: [changeJauge("Céleste", +10)]
  },
  14: {
    image: "valley.png",
    description:
      "La surface terrestre émergée s'apparente à un vaste marécage. On tente de réchauffer ça à coup de soleil ?",
    yesLabel: "Oui",
    noLabel: "Non",
    appearsOnce: "1",
    yesEffects: [changeJauge("Céleste", -10), changeJauge("Terrestre", -10)],
    noEffects: [changeJauge("Terrestre", +10)]
  },
  15: {
    image: "fireball.png",
    description:
      "Notre planète semble bouillonner de lave en fusion. Est-ce qu'on la soulage en laissant émerger quelques volcans ?",
    yesLabel: "Oui",
    noLabel: "Non",
    appearsOnce: "1",
    yesEffects: [changeJauge("Terrestre", -10), changeJauge("Céleste", +10)],
    noEffects: [changeJauge("Marine", -10)]
  },
  16: {
    image: "meteor.png",
    description:
      "Une pluie de météorites est sur le point de s'abattre sur le monde.",
    yesLabel: "Les faire tomber dans l'océan.",
    noLabel: "Les faire tomber sur un continent.",
    appearsOnce: "0",
    yesEffects: [changeJauge("Marine", +10)],
    noEffects: [changeJauge("Terrestre", +10)]
  },
  17: {
    image: "water.png",
    description:
      "Une couche de glace s'est formée à la surface des océans et la plonge dans l'obscurité.",
    yesLabel: "Soleil ...?",
    noLabel: "Tant mieux.",
    appearsOnce: "1",
    yesEffects: [changeJauge("Marine", -10), changeJauge("Céleste", -10)],
    noEffects: [changeJauge("Marine", +10)]
  },
  18: {
    image: "valley.png",
    description:
      "L'atmosphère est rendue si épaisse qu'elle s'est opacifiée. La réchauffer pourrait bien précipiter les nuages.",
    yesLabel: "C'est parti !",
    noLabel: "Surtout pas !",
    appearsOnce: "1",
    yesEffects: [changeJauge("Céleste", -10)],
    noEffects: [changeJauge("Marine", +10), changeJauge("Céleste", +10)]
  },
  19: {
    image: "valley.png",
    description:
      "Les rayons du soleil sont intenses et deviennent nocifs. Peut-être qu'un peu d'atmosphère ferait bouclier ?",
    yesLabel: "Oui",
    noLabel: "Non",
    appearsOnce: "1",
    yesEffects: [changeJauge("Céleste", +10)],
    noEffects: [changeJauge("Terrestre", -10), changeJauge("Céleste", -10)]
  },
  20: {
    image: "water.png",
    description:
      "De la glace persiste à la surface de nos océans. On pourrait peut-être utiliser des roches salées pour la faire fondre ?",
    yesLabel: "Oui",
    noLabel: "Non",
    appearsOnce: "1",
    yesEffects: [changeJauge("Marine", +10), changeJauge("Terrestre", -10)],
    noEffects: [changeJauge("Marine", -10)]
  },
  21: {
    image: "valley.png",
    description:
      "Une épaisse couche de neige éternelle recouvre certains de nos paysages, pas un perce-neige à l’horizon. Faut-il y souffler un vent chaud ?",
    yesLabel: "Oui",
    noLabel: "Non",
    appearsOnce: "1",
    yesEffects: [changeJauge("Terrestre", +10), changeJauge("Céleste", +10)],
    noEffects: [changeJauge("Marine", +10)]
  },
  22: {
    image: "water.png",
    description:
      "De nombreuses algues ont envahi nos fonds marins et rendent l’eau trouble et obscure.",
    yesLabel: "Soleil !",
    noLabel: "Chouette.",
    appearsOnce: "1",
    yesEffects: [changeJauge("Marine", -10), changeJauge("Céleste", -10)],
    noEffects: [changeJauge("Marine", +10)]
  },
  23: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  24: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  25: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  26: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  27: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  28: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  29: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  30: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  31: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  32: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  33: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  34: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  },
  35: {
    image: "",
    description: "",
    yesLabel: "",
    noLabel: "",
    appearsOnce: "",
    yesEffects: "",
    noEffects: ""
  }
};
