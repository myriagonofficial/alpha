<template>
  <div id="app" :class="['scene-'+state.scene, 'era-'+state.era]">
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
@import "./assets/fonts.pcss";
@import "./assets/global.pcss";

#app {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;

  &.scene-menu,
  &.scene-gameover {
    background-image: url("assets/ECRAN_INTRO.png");
  }

  &.scene-game {
    &.era-0 {
      background-image: url("assets/CHAP1_LULL.png");
    }
    &.era-1 {
      background-image: url("assets/CHAP2_PRIMAL.png");
    }
    &.era-2 {
      background-image: url("assets/CHAP3_HEADWAY.png");
    }
    &.era-3 {
      background-image: url("assets/CHAP4_APEX.png");
    }
    &.era-4 {
      background-image: url("assets/CHAP5_AGONY.png");
    }
  }

  &.scene-menu {
    header,
    footer {
      background: none;
    }
  }
}
</style>
