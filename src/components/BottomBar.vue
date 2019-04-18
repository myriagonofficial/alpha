<template>
  <footer>
    <div class="card-info">
      <div class="card-name">{{ card.name }}</div>
      <div class="card-description">{{ card.description }}</div>
    </div>
  </footer>
</template>

<script>
import { state } from "@/state.js";
import { cards } from "@/cards.js";

export default {
  name: "BottomBar",
  components: {},
  computed: {
    card() {
      return cards[state.card];
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
  height: 14.5vh;
  background-image: url("../assets/ui/interface_barre_bas_fond.png");
  background-size: cover;
  background-position: center;
}

.card-info {
  margin: 1vh auto;
  width: 60vh;
  font-size: 1.4rem;
}

.card-name {
  font-weight: bold;
  font-size: 1.6rem;
  margin: 0.25em;
}
</style>