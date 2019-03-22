import { state } from "./state.js";
import { removeInArray } from "./utils.js"

export function changeJauge(type, value) {
  return () => {
    let jauge = state.deck.jauges.find(jauge => jauge.name === type);
    jauge.level += value;
  };
}

export function startStory(name) {
  return () => state.deck.stories.push(name)
}

export function endStory(name) {
  return () => removeInArray(state.deck.stories, name);
}

export function gameOver() {
  return () => alert("Game over !");
}