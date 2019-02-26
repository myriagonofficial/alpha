import { changeJauge } from "./effects.js";

export const cards = [
  {
    name: "Carotte",
    image: "carrot.png",
    frame: "wood",
    description: "Ceci est une carotte ",
    leftLabel: "prout",
    rightLabel: "fuck",
    leftEffects: [changeJauge("Animal", +10), changeJauge("Végétal", -20)],
    rightEffects: [changeJauge("Animal", -10), changeJauge("Végétal", +15)]
  },
  {
    name: "Oeuf",
    image: "egg.png",
    frame: "wood",
    description: "Ceci est un oeuf",
    leftEffects: [changeJauge("Animal", +10), changeJauge("Végétal", -20)],
    rightEffects: [changeJauge("Animal", -10), changeJauge("Végétal", +15)]
  },
  {
    name: "Pêcheur",
    image: "fisher.png",
    frame: "wood",
    description: "Ceci est un pêcheur",
    leftEffects: [changeJauge("Animal", +10), changeJauge("Végétal", -20)],
    rightEffects: [changeJauge("Animal", -10), changeJauge("Végétal", +15)]
  },
  {
    name: "Foudre",
    image: "thunder.png",
    frame: "wood",
    description: "Ceci est un coup de foudre",
    leftEffects: [changeJauge("Animal", +10), changeJauge("Végétal", -20)],
    rightEffects: [changeJauge("Animal", -10), changeJauge("Végétal", +15)]
  }
];
