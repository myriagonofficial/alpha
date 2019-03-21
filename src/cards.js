import { changeJauge, endStory, startStory, gameOver } from "./effects.js";

export const cards = {
  6: {
    image: "thunder.jpg",
    description: "Un astre sorti de nulle part semble s’être pris d’affection pour notre planète et s’y est satellisé.",
    yesLabel: "Ah !",
    noLabel: "Ah !",
    yesEffects: [changeJauge("Animal", +10), changeJauge("Végétal", -20)],
    noEffects: [changeJauge("Animal", -10), changeJauge("Végétal", +15)]
  },
  7: {
    image: "thunder.jpg",
    description: "Par effet boule de neige il s’est mis à grossir rapidement et obscurci maintenant en partie notre ciel.",
    yesLabel: "On le détruit !",
    noLabel: "Pourquoi pas ...",
    yesEffects: [endStory("lune")],
    noEffects: []
  },
  8: {
    image: "thunder.jpg",
    description: "Notre satellite est devenu trop massif et menace de faire sortir notre planète de son orbite.",
    yesLabel: "Cette fois ça suffit !",
    noLabel: "Laissons voir.",
    yesEffects: [endStory("lune")],
    noEffects: []
  },
  9: {
    image: "thunder.jpg",
    description: "Ce qui est devenu un diptyque gravitationnel se dirige maintenant droit vers notre étoile ...",
    yesLabel: "Arf ...",
    noLabel: "Arf ...",
    yesEffects: [gameOver()],
    noEffects: [gameOver()]
  },
  10: {
    image: "egg.jpg",
    description: "Le magma sous la croûte terrestre agite beaucoup les plaques tectoniques. On calme un peu le jeu ?",
    yesEffects: [endStory("tectonique")],
    noEffects: []
  },
  11: {
    image: "egg.jpg",
    description: "ptdr t'es mort",
    yesEffects: [gameOver()],
    noEffects: [gameOver()]
  },
  13: {
    image: "carrot.jpg",
    description: "Un luxuriant lit de végétation primaire est venue égayer le sol meuble et fertile. On arrose tout ça ?",
    yesEffects: [],
    noEffects: [endStory("vegetation_terrestre")]
  },
  14: {
    image: "carrot.jpg",
    description: "Quelques plantes semblent mener une course au soleil et prennent de l’altitude.",
    yesLabel: "Il est temps de tondre.",
    noLabel: "C’est beau !",
    yesEffects: [startStory("vegetation_terrestre_tondue")],
    noEffects: [startStory("vegetation_terrestre_sauvage")]
  },
  15: {
    image: "carrot.jpg",
    description: "L'herbe fraîchement coupée semble avoir constitué un humus savoureux pour quelques rampants affamés.",
    yesEffects: [],
    noEffects: []
  },
  16: {
    image: "carrot.jpg",
    description: "Les rampants semblent devenus bien gourmands et la végétation en prend un coup.On aide les plantes à se défendre avec du poison?",
    yesEffects: [],
    noEffects: [endStory("vegetation_terrestre_sauvage")]
  },
  17: {
    image: "carrot.jpg",
    description: "Les plantes se sont investies dans la régulation de la population de leurs gourmands prédateurs.",
    yesEffects: [],
    noEffects: []
  }
}


/*
{
  name: "Carotte",
    image: "carrot.jpg",
      frame: "wood",
        description: "Ceci est une carotte ",
          yesLabel: "gauche",
            noLabel: "droite",
              yesEffects: [changeJauge("Animal", +10), changeJauge("Végétal", -20)],
                noEffects: [changeJauge("Animal", -10), changeJauge("Végétal", +15)]
},
{
  name: "Oeuf",

    {
      name: "Pêcheur",
      image: "fisher.jpg",
      frame: "wood",
      description: "Ceci est un pêcheur",
      yesEffects: [changeJauge("Animal", +10), changeJauge("Végétal", -20)],
      noEffects: [changeJauge("Animal", -10), changeJauge("Végétal", +15)]
    },
    {
      name: "Foudre",
      image: "thunder.jpg",
      frame: "wood",
      description: "Ceci est un coup de foudre",
      yesEffects: [changeJauge("Animal", +10), changeJauge("Végétal", -20)],
      noEffects: [changeJauge("Animal", -10), changeJauge("Végétal", +15)]
    }
];*/