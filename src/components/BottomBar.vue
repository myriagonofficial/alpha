<template>
  <footer>
    <button v-if="isIntro" @click="skipIntro">Passer l'introduction</button>
  </footer>
</template>

<script>
import { state } from "@/state.js";
import { cards } from "@/cards.js";
import { skipIntro } from "@/game.js";

export default {
  name: "BottomBar",
  components: {},
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
      return this.state.deck && this.state.deck.name === "Introduction";
    }
  },
  methods: {
    skipIntro
  }
};
</script>

<style lang="postcss" scoped>
footer {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5vh;
  background-image: url("../assets/ui/interface_barre_bas_fond.png");
  background-size: cover;
  background-position: top center;
  padding-top: 5px;
  box-sizing: border-box;
}

footer button{
  float: right;
}
</style>