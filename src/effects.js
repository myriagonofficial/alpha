import { state } from "./state.js";
import { removeInArray } from "./utils.js"
import { sounds } from "./sounds.js"

export function changeJauge(jaugeToUpdate, value) {
  return {
    type: changeJauge,
    jauge: jaugeToUpdate,
    value,
    apply() {
      let jauge = state.deck.jauges.find(jauge => jauge.name === jaugeToUpdate);
      jauge.level += value;
    }
  }
}

export function startStory(name) {
  return {
    type: startStory,
    story: name,
    apply() {
      state.deck.stories.push(name)
    }
  }
}

export function endStory(name) {
  return {
    type: endStory,
    story: name,
    apply() {
      removeInArray(state.deck.stories, name);
    }
  }
}

export function gameOver() {
  return {
    type: gameOver,
    apply() {
      alert("Game over !");
    }
  }
}

export function playSound(key, channel) {
  return {
    type: playSound,
    apply() {
      sounds.play(key, channel)
    }
  }
}