<template>
  <div id="app" :class="'scene-'+state.scene">
    <TopBar />
    <MenuScene v-if="state.scene==='menu'" @play="play()" />
    <CardsScene v-if="state.scene==='game'" />
    <GameoverScene v-if="state.scene==='gameover'" />
    <AchievementsScene v-if="state.scene==='bonus'" />
    <BottomBar />
  </div>
</template>

<script>
import CardsScene from "@/components/CardsScene.vue";
import MenuScene from "@/components/MenuScene.vue";
import GameoverScene from "@/components/GameoverScene.vue";
import AchievementsScene from "@/components/AchievementsScene.vue";
import TopBar from "@/components/TopBar.vue";
import BottomBar from "@/components/BottomBar.vue";

import { initGame } from "@/game.js";
import { state } from "@/state.js";

export default {
  name: "Alpha",
  components: {
    CardsScene,
    MenuScene,
    GameoverScene,
    AchievementsScene,
    TopBar,
    BottomBar
  },
  data() {
    return {
      state
    };
  },

  created() {},

  mounted() {
    this.resizeScene();
    window.addEventListener("resize", this.resizeScene);
  },

  destroyed() {
    window.removeEventListener("resize", this.resizeScene);
  },

  methods: {
    play() {
      initGame();
    },
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
  background-image: url("assets/ECRAN_INTRO.png");
  background-size: cover;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

#app {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  &.scene-menu,
  &.scene-gameover {
    background-image: url("assets/ECRAN_INTRO.png");
    background-size: cover;
    background-position: center center;
  }

  &.scene-menu {
    header,
    footer {
      background: none;
    }
  }
}

button,
a {
  display: inline-block;
  margin: auto;
  padding: 0.5em 1em;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.15);
  border: none;
  color: white;
  font-family: "Montserrat", serif;
  font-size: 2vh;

  &.disabled {
    background: rgba(32, 32, 32, 0.25);
  }

  &:focus {
    outline: 4px white;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
  }

  &:hover {
    animation: none;
    opacity: 1;
  }

  &:not(.disabled):hover {
    background: rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  }
}

@keyframes blink {
  0% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.9;
  }
}
</style>
