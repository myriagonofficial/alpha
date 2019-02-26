<template>
  <div class="cards-container">
    <Jauges />
    <p>Yes: {{ yes }} No: {{ no }}</p>
    <Card
      v-for="(card, i) in cards"
      :card="card"
      :index="i"
      :key="card.name"
      @choice="onChoice"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Jauges from "@/components/Jauges.vue";

import { initGame, state } from "@/game.js";

export default {
  name: "Alpha",
  components: { Card, Jauges },
  data() {
    return {
      yes: 0,
      no: 0
    };
  },

  created() {
    initGame();
  },

  computed: {
    cards() {
      return state.cards;
    }
  },

  methods: {
    onChoice(choice) {
      let card = this.cards.shift();
      if (choice) {
        this.yes++;
        card.leftEffects.forEach(effect => effect());
      } else {
        this.no++;
        card.rightEffects.forEach(effect => effect());
      }
    }
  }
};
</script>

<style lang="postcss">
.cards-container {
  position: relative;
  width: 100%;
}

body {
  font-family: "Laila", serif;
  color: white;
  background: black;
}
</style>
