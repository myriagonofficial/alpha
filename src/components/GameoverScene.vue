<template>
  <main class="gameover-scene">
    <header>
      <h2>Partie terminée</h2>
      <p style="margin:0">
        L'apogée de votre espèce a eu lieu au chapitre {{state.scores.ageBonheurMax}}
        avec
        <strong>{{state.scores.bonheurMax}}</strong>
        <img src="../assets/ui/fleur.svg" alt="fleurs" />
      </p>
      <div v-if="!state.achievement">
        <p>Votre espèce n'est pas parvenue à s'illustrer cette fois-ci...</p>
        <p>Merci d'avoir joué !</p>
      </div>
    </header>

    <Achievement v-if="state.achievement" v-bind="state.achievement"></Achievement>
  </main>
</template>

<script>
import { playSound } from "@/audio.js";
import { state, saveProgress } from "@/state.js";
import { gamepad, BUTTONS, DIRECTIONS } from "@/gamepad.js";

import Achievement from "@/components/Achievement.vue";

export default {
  name: "GameoverScene",
  components: {
    Achievement
  },

  data() {
    return {
      state
    };
  },

  mounted() {
    saveProgress();
    gamepad.onButtonPress(BUTTONS.START, () => this.onButtonPressed());
    gamepad.onButtonPress(BUTTONS.A, () => this.onButtonPressed());
    gamepad.onDirection(dir => {
      if (dir === DIRECTIONS.UP) this.selectButton(-1);
      if (dir === DIRECTIONS.DOWN) this.selectButton(+1);
    });
  },
  destroyed() {
    gamepad.removeOnButtonPress(BUTTONS.START);
    gamepad.removeOnButtonPress(BUTTONS.A);
    gamepad.removeOnDirection();
  },

  methods: {
    selectButton(step) {
      const buttons = [...document.querySelectorAll("button")];
      const selectedButtonIndex = buttons.findIndex(
        button => button === document.activeElement
      );
      const nextIndex =
        (selectedButtonIndex + step + buttons.length) % buttons.length;
      buttons[nextIndex].focus();
      playSound("gui_hover_button", "gui_hover");
    },
    onButtonPressed() {
      if (document.activeElement.matches("button")) {
        playSound("gui_click_button", "gui_click");
        document.activeElement.click();
      }
    }
  }
};
</script>

<style scoped lang="postcss">
.gameover-scene {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 5vh;
  z-index: 2;
  text-align: center;
  animation: fadein 2s linear;
  font-size: 3vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;

  header {
    flex: 0 0 15vh;

    h2 {
      margin: 0.5em;
    }

    p {
      img {
        display: inline-block;
        vertical-align: middle;
        width: 3vmin;
        height: 3vmin;
      }
    }
  }
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