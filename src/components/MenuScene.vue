<template>
  <div id="info-son" v-if="!state.loaded">
    <p>
      <img src="../assets/ui/sound_on.png" alt="Son" class="icon" />
      L'expérience sonore est vivement conseillée
    </p>
    <button
      @mouseover="onButtonMouseOver"
      @click="onClickPlayButton"
      :disabled="loadingPc < 100"
    >{{loadingPc >= 100 ? "Jouer": "Chargement "+loadingPc+"%"}}</button>
  </div>

  <div id="menu-scene" v-else>
    <img class="logo-myriagon" src="assets/MYRIAGON_LOGO.png" alt="Myriagon" />
    <img class="logo-alpha" src="assets/ALPHA_TITRE.png" alt="Alpha" />
    <button
      @mouseover="onButtonMouseOver"
      @click="startGame"
      :class="['start', { hidden: !showStartButton }]"
    >Commencer le jeu</button>
    <p
      class="credits"
    >Visuels : Arthur Lemaître | Développement : Sylvain Pollet-Villard | Son et concept : Myriagon</p>
  </div>
</template>

<script>
import { playMusic, stopMusic, playSound } from "@/audio.js";
import { preloadGame } from "@/preloader.js";
import { state } from "@/state.js";
import { gamepad, BUTTONS, DIRECTIONS } from "@/gamepad.js";

export default {
  name: "MenuScene",
  data() {
    return {
      state,
      loadingPc: 0,
      showStartButton: false
    };
  },

  mounted() {
    if (!state.loaded) {
      preloadGame(this.onProgress);
    } else {
      playMusic("mus_menu");
      this.showStartButton = true;
    }

    gamepad.onButtonPress(BUTTONS.START, () => this.onButtonStartPressed());
    gamepad.onButtonPress(BUTTONS.A, () => this.onButtonAPressed());
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
    startGame() {
      stopMusic();
      playSound("gui_click_button", "gui");
      this.$emit("play");
    },
    onClickPlayButton() {
      if (this.loadingPc < 100) return;
      state.loaded = true;
      playSound("gui_click_button", "gui");
      playMusic("mus_menu");
      setTimeout(() => {
        this.showStartButton = true;
      }, 3000);
    },
    onProgress(pc) {
      this.loadingPc = Math.round(pc);
    },
    onButtonMouseOver() {
      playSound("gui_hover_button", "gui");
    },
    selectButton(step) {
      const buttons = [...document.querySelectorAll("button")];
      const selectedButtonIndex = buttons.findIndex(
        button => button === document.activeElement
      );
      const nextIndex =
        (selectedButtonIndex + step + buttons.length) % buttons.length;
      buttons[nextIndex].focus();
      playSound("gui_hover_button", "gui");
    },
    onButtonAPressed() {
      if (document.activeElement.matches("button")) {
        playSound("gui_click_button", "gui");
        document.activeElement.click();
      }
    },
    onButtonStartPressed() {
      if (state.loaded) this.startGame();
      else this.onClickPlayButton();
    }
  }
};
</script>

<style scoped lang="postcss">
#menu-scene {
  position: fixed;
  top: 15vh;
  left: 0;
  right: 0;
  bottom: 15vh;
  text-align: center;
  animation: fadein 2s linear;

  img,
  p {
    display: block;
    margin: auto;
  }

  .logo-myriagon {
    margin: 5vh auto;
    height: 10vh;
  }

  .logo-alpha {
    margin: 5vh auto;
    height: 20vh;
  }

  .start {
    font-size: 5vmin;
    padding: 0.25em 0.5em;
    margin: 2vh auto 8vh;
    display: inline-block;
    transition: box-shadow 300ms;
    animation: blink 1s alternate ease-in-out infinite;
    cursor: pointer;

    &.hidden {
      animation: none;
      opacity: 0;
      visibility: hidden;
    }

    &:hover {
      animation: none;
      opacity: 1;
    }
  }

  p.credits {
    font-size: 2vh;
  }
}

#info-son {
  background: black;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  font-size: 2.5vh;
  text-align: center;
  align-content: center;
  display: grid;

  p {
    padding: 0.5em;
    margin: auto;
  }

  img.icon {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0.5em 0.15em 0;
    animation: tada 2s ease-in-out infinite;
  }

  button {
    font-size: 3vmin;

    &:hover {
      &:disabled {
        background-color: rgba(128, 128, 128, 0.15);
        box-shadow: none;
        cursor: wait;
      }
    }
  }
}

@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }

  5%,
  10% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  15%,
  25%,
  35%,
  45% {
    transform: scale3d(1.3, 1.3, 1.3) rotate3d(0, 0, 1, 3deg);
  }

  20%,
  30%,
  40% {
    transform: scale3d(1.3, 1.3, 1.3) rotate3d(0, 0, 1, -3deg);
  }

  50% {
    transform: scale3d(1, 1, 1);
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