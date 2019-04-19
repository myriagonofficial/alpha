<template>
  <div class="cards-scene">
    <div class="pool">
      <img class="card" src="assets/frames/carte_fond_arriere.png">
      <img class="card" src="assets/frames/carte_fond_arriere.png">
      <img class="card" src="assets/frames/carte_fond_arriere.png">
      <img class="card" src="assets/frames/carte_fond_arriere.png">
    </div>
    <Card v-if="state.card" :card="card" @choice="onChoice"/>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

import { state } from "@/state.js";
import { onChoice } from "@/game.js";
import { cards } from "@/cards.js";

export default {
  name: "CardsScene",
  components: { Card },
  data() {
    return {
      state
    };
  },
  computed: {
    card() {
      return cards[state.card];
    }
  },

  methods: {
    onChoice
  }
};
</script>

<style lang="postcss">
.cards-scene {
  perspective: 1600px;
  position: absolute;
  top: 15vh;
  left: 0;
  right: 0;
  bottom: 15vh;
  transform-origin: center;
  text-align: center;
  z-index: 2;
}

.card {
  position: relative;
  width: calc(630 / 720 * 70vh);
  height: 70vh;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.pool {
  position: absolute;
  width: calc(512 / 720 * 70vh);
  height: 70vh;
  left: calc(50% - 256 / 720 * 70vh);
  top: calc(50% - 35vh);
}

.pool img {
  position: absolute;
  top: 0;
}

.pool img:nth-child(4) {
  left: 15px;
}
.pool img:nth-child(3) {
  left: 30px;
}
.pool img:nth-child(2) {
  left: 45px;
}
.pool img:nth-child(1) {
  left: 55px;
}
</style>
