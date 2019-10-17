<template>
  <main class="gameover-scene">
    <h2>Partie terminée</h2>
    <p>Merci d'avoir joué !</p>
    <button id="backbutton" @mouseover="onButtonMouseOver" @click="backToMenu">Retour au menu</button>
  </main>
</template>

<script>
import { playMusic, playSound } from "@/audio.js";
import { state } from "@/state.js";

export default {
  name: "GameoverScene",
  data() {
    return {
      state
    };
  },

  mounted() {
    playMusic("mus_lull");
  },

  methods: {
    backToMenu() {
      state.scene = "menu";
    },
    onButtonMouseOver() {
      playSound("gui_hover_button", "gui");
    }
  }
};
</script>

<style scoped lang="postcss">
.gameover-scene {
  position: fixed;
  top: 15vh;
  left: 0;
  right: 0;
  bottom: 15vh;
  text-align: center;
  animation: fadein 2s linear;
  font-size: 4vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#backbutton {
  font-size: 5vmin;
  padding: 0.25em 0.5em;
  margin: 2vh auto 8vh;
  display: inline-block;
  transition: box-shadow 300ms;
  animation: blink 1s alternate ease-in-out infinite;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.25);
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>