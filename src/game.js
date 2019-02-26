import { cards } from "./cards";

export const initGame = () => {
  Object.assign(state, {
    cards: cards.slice(),
    jauges: [
      { name: "Végétal", icon: "tree.png", level: 50 },
      { name: "Minéral", icon: "stone.png", level: 50 },
      { name: "Animal", icon: "animal.png", level: 50 }
    ]
  });
};

export const state = {};
