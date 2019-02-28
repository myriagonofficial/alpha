<template>
  <div class="cards-scene">
    <!--
      <div class="pool below"><Card back /></div>
      <div class="next below"><Card back /></div>
    -->
    <Card :card="card" @choice="onChoice" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

import { state } from "@/game.js";

export default {
  name: "CardsScene",
  components: { Card },
  data() {
    return {};
  },

  computed: {
    card() {
      return state.card;
    }
  },

  methods: {
    onChoice(choice) {
      let card = this.cards.shift();
      if (choice) {
        card.leftEffects.forEach(effect => effect());
      } else {
        card.rightEffects.forEach(effect => effect());
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.cards-scene {
  perspective: 600px;
}
</style>
