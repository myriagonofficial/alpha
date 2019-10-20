<template>
  <main class="gameover-scene">
    <header>
      <h2>Partie terminée</h2>
      <p>Merci d'avoir joué !</p>
    </header>

    <Achievement v-if="state.achievement" v-bind="state.achievement"></Achievement>
  </main>
</template>

<script>
import { playMusic } from "@/audio.js";
import { state, saveProgress } from "@/state.js";
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
    playMusic("mus_lull");
    saveProgress();
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
      margin: 0;
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