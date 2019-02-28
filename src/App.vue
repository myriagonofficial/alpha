<template>
  <div id="app">
    <Jauges/>
    <CardsScene/>
  </div>
</template>

<script>
import CardsScene from "@/components/CardsScene.vue";
import Jauges from "@/components/Jauges.vue";

import { initGame, state } from "@/game.js";

export default {
  name: "Alpha",
  components: { CardsScene, Jauges },
  data() {
    return {};
  },

  created() {
    initGame();
  }
};
</script>

<style lang="postcss">
.cards-scene {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}

body {
  font-family: "Laila", serif;
  color: white;
  background: black;
}
</style>
