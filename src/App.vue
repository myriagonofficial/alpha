<template>
  <div id="app">
    <TopBar/>
    <CardsScene/>
    <BottomBar/>
  </div>
</template>

<script>
import CardsScene from "@/components/CardsScene.vue";
import TopBar from "@/components/TopBar.vue";
import BottomBar from "@/components/BottomBar.vue";

import { initGame } from "@/game.js";

export default {
  name: "Alpha",
  components: { CardsScene, TopBar, BottomBar },
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
      /*let scale = Math.min(window.innerWidth / 640, window.innerHeight / 1080);
      const autoscaledElements = this.$el.querySelectorAll(".autoscale");
      for (let elm of autoscaledElements) {
        elm.style.transform = `scale(${scale})`;
      }*/
    }
  }
};
</script>

<style lang="postcss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  user-select: none;
}

body {
  font-family: "Montserrat", serif;
  color: white;
  background-color: black;
  background-image: url("/assets/ui/interface_fond_total.png");
  background-size: cover;
}

#app {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
