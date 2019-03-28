<template>
  <div id="app">
    <Jauges/>
    <CardsScene/>
  </div>
</template>

<script>
import CardsScene from "@/components/CardsScene.vue";
import Jauges from "@/components/Jauges.vue";

import { initGame } from "@/game.js";

export default {
  name: "Alpha",
  components: { CardsScene, Jauges },
  data() {
    return {};
  },

  created() {
    initGame();
  },

  mounted() {
    this.resizeScene();
    this.resizeListener = window.addEventListener("resize", this.resizeScene);
  },

  destroyed() {
    window.removeEventListener(this.resizeListener);
  },

  methods: {
    resizeScene() {
      let scale = Math.min(window.innerWidth / 640, window.innerHeight / 1024);
      this.$el.style.transform = `scale(${scale})`;
    }
  }
};
</script>

<style lang="postcss">
body {
  font-family: "Slabo 27px", serif;
  color: white;
  background: rgb(245, 245, 240);
  margin: 0;
  padding: 0;
  overflow: hidden;
  user-select: none;
}
</style>
