<template>
  <div class="cards-scene">
    <div class="background-overlay"></div>
    <div class="card-zone">
      <Card v-if="state.card" :card="card" />
    </div>
    <div class="card-info" v-if="card">
      <div class="card-name">{{ card.name }}</div>
      <div class="card-description">{{ card.description }}</div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

import { state } from "@/state.js";
import { cards } from "@/cards.js";

export default {
  name: "CardsScene",
  components: { Card },
  data() {
    return {
      state
    };
  },
  computed: {
    card() {
      return cards[state.card];
    }
  }
};
</script>

<style lang="postcss">
$card_width: 630;
$card_height: 720;

.cards-scene {
  perspective: 1600px;
  position: absolute;
  top: 15vh;
  left: 0;
  right: 0;
  bottom: 5vh;
  transform-origin: center;
  text-align: center;
  z-index: 2;

  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../assets/ui/interface_fond_total.png");
    background-size: cover;
    background-position: center center;
    opacity: 0.75;
  }

  .card-zone {
    position: absolute;
    top: 5vh;
    bottom: 5vh;
    left: 0;
    right: 50%;
  }

  .card-info {
    position: absolute;
    left: 50%;
    right: 5vh;
    top: 5vh;
    bottom: 5vh;
    padding: 2rem;
    color: black;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .card-name {
      font-weight: bold;
      font-size: 4rem;
      text-transform: uppercase;
      flex: 0;
      margin: 1em 0;
    }

    .card-description {
      font-size: 3rem;
      flex: 1;
    }
  }
}

.card {
  position: relative;
  width: calc($card_width / $card_height * 70vh);
  height: 70vh;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  img {
    max-width: calc($card_width / $card_height * 70vh);
    max-height: 70vh;
  }
}
</style>
