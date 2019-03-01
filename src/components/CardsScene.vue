<template>
  <div class="cards-scene">
    <div class="pool">
      <img class="card" src="assets/frames/back_wood.png">
      <img class="card" src="assets/frames/back_wood.png">
      <img class="card" src="assets/frames/back_wood.png">
    </div>
    <Card v-if="state.card" :card="state.card" @choice="onChoice"/>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

import { state, onChoice } from "@/game.js";

export default {
  name: "CardsScene",
  components: { Card },
  data() {
    return {
      state
    };
  },

  methods: {
    onChoice
  }
};
</script>

<style lang="postcss">
.cards-scene {
  perspective: 1200px;
}

.card {
  position: relative;
  width: 512px;
  height: 716px;
}

.pool {
  position: absolute;
  width: 512px;
  height: 720px;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
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
