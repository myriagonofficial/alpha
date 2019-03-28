<template>
  <div class="cards-scene">
    <div class="pool">
      <img class="card" src="assets/frames/back_wood.png">
      <img class="card" src="assets/frames/back_wood.png">
      <img class="card" src="assets/frames/back_wood.png">
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
  top: 180px;
  left: 50%;
  right: 0;
  bottom: 0;
  width: 512px;
  transform: translateX(-50%);
}

.card {
  position: relative;
  width: 512px;
  height: 720px;
}

.pool {
  position: absolute;
  width: 512px;
  height: 720px;
  top: 0;
  left: 0;
  right: 0;
}

.pool img {
  position: absolute;
}

.pool img:nth-child(3) {
  transform: translateY(15px) scale(0.98);
}
.pool img:nth-child(2) {
  transform: translateY(30px) scale(0.96);
}
.pool img:nth-child(1) {
  transform: translateY(45px) scale(0.94);
}
</style>
