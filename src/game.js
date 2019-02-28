import { cards } from "./cards";

export const initGame = () => {
  let pool = cards.slice();
  let card = pool.shift();

  Object.assign(state, {
    pool,
    card,
    jauges: [
      { name: "Végétal", icon: "tree.png", level: 50 },
      { name: "Minéral", icon: "stone.png", level: 50 },
      { name: "Animal", icon: "animal.png", level: 50 }
    ]
  });
};

export const state = {};
