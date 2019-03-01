import { changeJauge } from "./effects.js";

export const cards = [
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
    image: "egg.jpg",
    frame: "wood",
    description: "Ceci est un oeuf",
    yesEffects: [changeJauge("Animal", +10), changeJauge("Végétal", -20)],
    noEffects: [changeJauge("Animal", -10), changeJauge("Végétal", +15)]
  },
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
];
