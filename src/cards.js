import { changeJauge, endStory, startStory, gameOver } from "./effects.js";

export const cards = {
    1: {
        image: "thunder.jpg",
        description: "Coucou mec !",
        yesLabel: "Salut",
        noLabel: "Salut",
        yesEffects: [],
        noEffects: []
    },
    2: {
        image: "thunder.jpg",
        description: "Tu vas bien ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    3: {
        image: "thunder.jpg",
        description: "Bah cool alors !",
        yesLabel: "Super !",
        noLabel: "Super !",
        yesEffects: [],
        noEffects: []
    },
    4: {
        image: "thunder.jpg",
        description: "C'est sympa d'te voir !",
        yesLabel: "Super !",
        noLabel: "Super !",
        yesEffects: [],
        noEffects: []
    },
    5: {
        image: "thunder.jpg",
        description: "Bonne journée !",
        yesLabel: "Super !",
        noLabel: "Super !",
        yesEffects: [],
        noEffects: []
    },
    6: {
        image: "thunder.jpg",
        description: "Un astre sorti de nulle part semble s’être pris d’affection pour notre planète et s’y est satellisé.",
        yesLabel: "Ah !",
        noLabel: "Ah !",
        yesEffects: [changeJauge('Céleste', -20)],
        noEffects: [changeJauge('Céleste', -20)]
    },
    7: {
        image: "thunder.jpg",
        description: "Par effet boule de neige il s’est mis à grossir rapidement et obscurci maintenant en partie notre ciel.",
        yesLabel: "On le détruit !",
        noLabel: "Pourquoi pas ...",
        yesEffects: [endStory('lune')],
        noEffects: []
    },
    8: {
        image: "thunder.jpg",
        description: "Notre satellite est devenu trop massif et menace de faire sortir notre planète de son orbite.",
        yesLabel: "Cette fois ça suffit !",
        noLabel: "Laissons voir.",
        yesEffects: [endStory('lune')],
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
        image: "thunder.jpg",
        description: "Le magma sous la croûte terrestre agite beaucoup les plaques tectoniques. On calme un peu le jeu ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    11: {
        image: "thunder.jpg",
        description: "",
        yesLabel: "",
        noLabel: "",
        yesEffects: [],
        noEffects: []
    },
    12: {
        image: "",
        description: "",
        yesLabel: "",
        noLabel: "",
        yesEffects: [],
        noEffects: []
    },
    13: {
        image: "carrot.jpg",
        description: "Un luxuriant lit de végétation primaire est venue égayer le sol meuble et fertile. On arrose tout ça ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    14: {
        image: "carrot.jpg",
        description: "Quelques plantes semblent mener une course au soleil et prennent de l’altitude.",
        yesLabel: "Il est temps de tondre.",
        noLabel: "C’est beau !",
        yesEffects: [startStory('vegetation_terrestre_tondue')],
        noEffects: [startStory('vegetation_terrestre_sauvage')]
    },
    15: {
        image: "carrot.jpg",
        description: "L'herbe fraîchement coupée semble avoir constitué un humus savoureux pour quelques rampants affamés.",
        yesLabel: "",
        noLabel: "",
        yesEffects: [],
        noEffects: []
    },
    16: {
        image: "carrot.jpg",
        description: "Les rampants semblent devenus bien gourmands et la végétation en prend un coup. On aide les plantes à se défendre avec du poison ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [startStory('vegetation_terrestre_poison')],
        noEffects: [startStory('vegetation_terrestre_dead')]
    },
    17: {
        image: "carrot.jpg",
        description: "Les plantes se sont investies dans la régulation de la population de leurs gourmands prédateurs.",
        yesLabel: "Oui",
        noLabel: "Oui",
        yesEffects: [],
        noEffects: []
    },
    18: {
        image: "carrot.jpg",
        description: "On dirait bien que d'opportunistes micromoinsorganismes ont élu domicile sous quelques nénuphars. On plonge tout ça dans la mer ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: [startStory('BdC2')]
    },
    19: {
        image: "carrot.jpg",
        description: "Les micromoinsorganismes ont conquis le dessus des nénuphars et semblent désirer se déplacer de plus en plus vite. On leur souffle l'idée des pattes ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [startStory('BdC3')],
        noEffects: [startStory('BdC4')]
    },
    20: {
        image: "carrot.jpg",
        description: "Ça grouille à la surface du sol parmi les herbes.",
        yesLabel: "Chouette !",
        noLabel: "Chouette !",
        yesEffects: [],
        noEffects: []
    },
    21: {
        image: "carrot.jpg",
        description: "Notre forme de vie terrestre s'est mise à migrer au gré des déplacements d'eau vers la mer. Estmoinsce qu'on les arme de nageoires ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    22: {
        image: "carrot.jpg",
        description: "Les plantes viennent à manquer et les rampants semblent en souffrir.",
        yesLabel: "Oui",
        noLabel: "Oui",
        yesEffects: [],
        noEffects: []
    },
    23: {
        image: "carrot.jpg",
        description: "",
        yesLabel: "",
        noLabel: "",
        yesEffects: [],
        noEffects: []
    },
    24: {
        image: "carrot.jpg",
        description: "Dans l'obscurité des fonds marins, un tapis d'algues gluantes s'est répandu. ",
        yesLabel: "",
        noLabel: "",
        yesEffects: [],
        noEffects: []
    },
    25: {
        image: "thunder.jpg",
        description: "Les terres asséchées sont devenues arides et finissent par se craqueler. Mouillonsmoinsles d'une pluie rafraichissante !",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    26: {
        image: "thunder.jpg",
        description: "Les océans semblent si chauds qu'il s'en dégage une brume épaisse. Y plonger quelques icerbergs ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    27: {
        image: "thunder.jpg",
        description: "La surface terrestre émergée s'apparente à un vaste marécage. On tente de réchauffer ça à coup de soleil ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    28: {
        image: "thunder.jpg",
        description: "Notre planète semble bouillonner de lave en fusion. Estmoinsce qu'on la soulage en laissant émerger quelques volcans ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    29: {
        image: "thunder.jpg",
        description: "Une pluie de météorites est sur le point de s'abattre sur le monde.",
        yesLabel: "Les faire tomber dans l'océan.",
        noLabel: "Les faire tomber sur un continent.",
        yesEffects: [],
        noEffects: []
    },
    30: {
        image: "",
        description: "Une couche de glace s'est formée à la surface des océans et la plonge dans l'obscurité.",
        yesLabel: "Soleil ...?",
        noLabel: "Tant mieux.",
        yesEffects: [],
        noEffects: []
    },
    31: {
        image: "",
        description: "L'atmosphère est rendue si épaisse qu'elle s'est opacifiée. La réchauffer pourrait bien précipiter les nuages.",
        yesLabel: "C'est parti !",
        noLabel: "Surtout pas !",
        yesEffects: [],
        noEffects: []
    },
    32: {
        image: "",
        description: "Les rayons du soleil sont intenses et deviennent nocifs. Peutmoinsêtre qu'un peu d'atmosphère ferait bouclier ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    33: {
        image: "",
        description: "La glace persiste à la surface de nos océans. On pourrait peutmoinsêtre utiliser des roches salées pour la faire fondre ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    34: {
        image: "",
        description: "Une épaisse couche de neige éternelle recouvre certains de nos paysages, pas un percemoinsneige à l’horizon. Fautmoinsil y souffler un vent chaud ?",
        yesLabel: "Oui",
        noLabel: "Non",
        yesEffects: [],
        noEffects: []
    },
    35: {
        image: "",
        description: "De nombreuses algues ont envahi nos fonds marins et rendent l’eau trouble et obscure.",
        yesLabel: "Soleil !",
        noLabel: "Chouette.",
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