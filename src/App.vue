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

import { initCards } from "@/game.js";

export default {
  name: "Alpha",
  components: { Card, Jauges },
  data() {
    return {
      cards: initCards(),
      yes: 0,
      no: 0
    };
  },

  methods: {
    onChoice(choice) {
      this.cards.shift();
      choice ? this.yes++ : this.no++;
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
