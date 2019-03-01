import { cards } from "./cards";

export const state = {};
window.state = state;

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

export const onChoice = choice => {
  if (choice) {
    state.card.yesEffects.forEach(effect => effect());
  } else {
    state.card.noEffects.forEach(effect => effect());
  }

  state.pool.push(state.card)
  state.card = null;
  setTimeout(() => nextCard(), 0)
}

export const nextCard = () => {
  state.card = state.pool.shift();
}