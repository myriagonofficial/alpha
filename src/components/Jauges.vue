<template>
  <div class="jauges">
    <div class="jauge" v-for="jauge in jauges" :key="jauge.name">
      <img :src="'assets/icons/' + jauge.icon">
      <div class="level" :style="{ height: getLevelHeight(jauge) }"/>
      <div class="indicator" v-if="shouldShowIndicator">
        <svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          :style="{ opacity: Math.abs(state.choice) }"
        >
          <circle cx="20" cy="20" :r="Math.abs(getChoiceEffect(jauge))"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { state } from "@/state.js";
import { changeJauge } from "@/effects.js";
import { cards } from "@/cards.js";

export default {
  name: "Jauges",
  computed: {
    jauges() {
      return this.state.deck.jauges;
    },
    shouldShowIndicator() {
      return true;
      return state.choice !== 0;
    }
  },
  data() {
    return {
      state
    };
  },
  methods: {
    getLevelHeight(jauge) {
      return (1 - jauge.level / 100) * 64 + "px";
    },
    getChoiceEffect(jauge) {
      if (!state.card || state.choice === 0) return 0;
      let card = cards[state.card];
      let futureEffects =
        Math.sign(state.choice) === 1 ? card.yesEffects : card.noEffects;

      return (futureEffects || [])
        .filter(
          effect => effect.type === changeJauge && effect.jauge === jauge.name
        )
        .map(effect => effect.value)
        .reduce((a, b) => a + b, 0);
    }
  }
};
</script>

<style lang="postcss">
.jauges {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin: 16px;
}

.jauge {
  position: relative;
}

.jauge img {
  height: 64px;
  width: 64px;
  margin: 0 1em;
}

.jauge .level {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 400ms ease-in-out;
}

.indicator {
  text-align: center;

  svg {
    width: 20px;
    height: 20px;
    fill: white;
    transition: all 300ms;
  }
}
</style>
