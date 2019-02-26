import { state } from "./game.js";

export function changeJauge(type, value) {
  return () => {
    console.log("changing jauge", type, value);
    let jauge = state.jauges.find(jauge => jauge.name === type);
    jauge.level += value;
  };
}
