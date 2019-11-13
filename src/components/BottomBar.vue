<template>
  <footer v-if="state.loaded">
    <div class="left">
      <VolumeControl />
    </div>
    <div class="center">
      <button
        key="backButton"
        v-if="state.scene === 'bonus'"
        id="backbutton"
        @click="state.scene='menu'"
      >Retour au menu</button>
      <button v-if="state.scene === 'gameover'" @click="state.scene='bonus'">Continuer</button>
    </div>
    <div class="right">
      <button
        key="skipIntroButton"
        v-if="isIntro"
        @click="skipIntro"
        @mouseover="onButtonMouseOver"
      >Passer l'introduction</button>
      <button
        key="quitGameButton"
        v-else-if="state.scene === 'game'"
        @click="quitGame"
        @mouseover="onButtonMouseOver"
      >Quitter la partie</button>
      <button
        key="bonusButton"
        v-if="state.scene === 'menu'"
        class="bonus"
        @click="state.scene='bonus'"
      >Fins débloquées</button>
      <button
        key="clearProgressButton"
        v-if="state.scene === 'bonus' && state.achievements"
        class="bonus"
        @click="clearProgress"
      >Réinitialiser sa progression</button>
    </div>
  </footer>
</template>

<script>
import { state, clearProgress } from "@/state.js";
import { cards } from "@/cards.js";
import { skipIntro } from "@/game.js";
import { playSound } from "@/audio.js";

import VolumeControl from "@/components/VolumeControl.vue";

export default {
  name: "BottomBar",
  components: { VolumeControl },
  data() {
    return {
      state
    };
  },
  computed: {
    card() {
      return cards[this.state.card];
    },
    isIntro() {
      return (
        this.state.scene === "game" &&
        this.state.deck &&
        this.state.deck.name === "Introduction"
      );
    }
  },
  methods: {
    skipIntro,
    clearProgress,
    onButtonMouseOver() {
      playSound("gui_hover_button", "gui");
    },
    quitGame() {
      state.scene = "menu";
    }
  }
};
</script>

<style lang="postcss" scoped>
footer {
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5vh;
  background-image: url("../assets/ui/interface_barre_bas_fond.png");
  background-size: cover;
  background-position: top center;
  padding-top: 5px;
  box-sizing: border-box;

  .left {
    flex: 1;
    justify-self: start;
    text-align: left;
  }

  .center {
    flex: 1;
    text-align: center;
  }

  .right {
    flex: 1;
    justify-self: end;
    text-align: right;
  }

  .right button {
    margin-bottom: 0.2em;
  }
}
</style>