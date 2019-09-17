<template>
  <footer></footer>
</template>

<script>
import { state } from "@/state.js";
import { cards } from "@/cards.js";

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
    }
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
}
</style>