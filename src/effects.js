import { state } from "./game.js";

export function changeJauge(type, value) {
  return () => {
    let jauge = state.jauges.find(jauge => jauge.name === type);
    jauge.level += value;
  };
}
