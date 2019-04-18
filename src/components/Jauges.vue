<template>
  <div class="jauges">
    <div class="jauge" v-for="jauge in jauges" :key="jauge.name">
      <div class="level" :style="{ height: getLevelHeight(jauge) }"/>
      <img class="jauge-icon" :src="'assets/icons/' + jauge.icon">
      <div class="indicator" v-if="shouldShowIndicator">
        <svg
          viewBox="0 0 110 110"
          xmlns="http://www.w3.org/2000/svg"
          :style="{ opacity: getIndicatorOpacity() }"
        >
          <circle cx="55" cy="55" fill="#dad8cc" :r="getIndicatorRadius(jauge)"></circle>
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
      //return state.choice !== 0;
    }
  },
  data() {
    return {
      state
    };
  },
  methods: {
    getLevelHeight(jauge) {
      let pc = 1 - jauge.level / 100;
      let height = 12;
      let marginTop = 9 / 148;
      let marginBottom = 16 / 148;
      return (marginTop + pc) * height * (1 - marginTop - marginBottom) + "vh";
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
    },
    getIndicatorRadius(jauge) {
      return Math.abs(this.getChoiceEffect(jauge)) * 2;
    },
    getIndicatorOpacity() {
      return Math.pow(Math.abs(state.choice), 2);
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
}

.jauge {
  position: relative;
  background-image: url("/assets/ui/interface_jauge_fond_pleine.png");
  height: 15vh;
  width: calc(12vh * 98 / 148);
  background-size: auto 12vh;
  background-repeat: no-repeat;
  text-align: center;
  transition: all 400ms ease-in-out;
}

.jauge-icon {
  position: absolute;
  height: 12vh;
  top: 0;
  left: 0;
  right: 0;
}

.jauge .level {
  background-image: url("/assets/ui/interface_jauge_fond_vide.png");
  background-size: auto 12vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 400ms ease-in-out;
}

.indicator {
  text-align: center;
  position: absolute;
  top: 11vh;
  width: 100%;

  svg {
    width: 3vh;
    height: 3vh;
    transition: all 300ms;
  }
}
</style>
