<template>
  <div class="cards-scene">
    <transition name="fade" mode="out-in">
      <div v-if="changingEra" class="chapter" key="chapter">
        <p class="number">Chapitre {{state.era}}</p>
        <p class="title">{{state.deck.name}}</p>
      </div>
      <div v-else key="cardZone">
        <div class="background-overlay"></div>
        <div class="card-zone">
          <Card v-if="state.card" :card="card" />
        </div>
        <div class="card-info" v-if="card">
          <div class="card-name">{{ card.name }}</div>
          <div
            class="card-description"
            ref="description"
          >{{state.deck.interlocuteur}} : {{ description }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

import { state } from "@/state.js";
import { cards } from "@/cards.js";
import { nextCard } from "@/game.js";
import { gamepad, BUTTONS, DIRECTIONS } from "@/gamepad.js";
import { playSound } from "@/audio.js";

export default {
  name: "CardsScene",
  components: { Card },
  data() {
    return {
      state,
      changingEra: false
    };
  },

  mounted() {
    if (state.deck.onStart) state.deck.onStart();
    nextCard();

    gamepad.onButtonPress(BUTTONS.A, () => this.onButtonAPressed());
    gamepad.onDirection(dir => {
      if (dir === DIRECTIONS.UP) this.selectButton(-1);
      if (dir === DIRECTIONS.DOWN) this.selectButton(+1);
    });
  },
  destroyed() {
    gamepad.removeOnButtonPress(BUTTONS.A);
    gamepad.removeOnDirection();
  },

  computed: {
    card() {
      return cards[state.card];
    },
    description() {
      return typeof this.card.description === "function"
        ? this.card.description()
        : this.card.description;
    },
    image() {
      return typeof this.card.image === "function"
        ? this.card.image()
        : this.card.image;
    }
  },
  watch: {
    "state.card"() {
      if (this.$refs.description) {
        this.$refs.description.classList.add("appear");
      }
      setTimeout(() => {
        if (this.$refs.description) {
          this.$refs.description.classList.remove("appear");
        }
      }, 600);
    },
    "state.era"() {
      this.changeEra();
    }
  },
  methods: {
    changeEra() {
      this.changingEra = true;
      playSound("gui_transition_eres", "gui");
      setTimeout(() => {
        this.changingEra = false;
        this.$nextTick(() => {
          if (state.deck.onStart) state.deck.onStart();
          nextCard();
        });
      }, 2000);
    },
    selectButton(step) {
      const buttons = [...document.querySelectorAll("button, .choice")];
      const selectedButtonIndex = buttons.findIndex(
        button => button === document.activeElement
      );
      const nextIndex =
        (selectedButtonIndex + step + buttons.length) % buttons.length;
      buttons[nextIndex].focus();
      playSound("gui_hover_button", "gui");
    },
    onButtonAPressed() {
      if (document.activeElement.matches("button, .choice")) {
        playSound("gui_click_button", "gui");
        document.activeElement.click();
      }
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
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("../assets/ui/interface_fond_total.png");
  background-size: cover;
  background-position: center center;
  opacity: 0.85;
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
    font-size: 4vmin;
    text-transform: uppercase;
    flex: 0;
    margin: 1em 0;
  }

  .card-description {
    font-size: 3vmin;
    flex: 1;
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

.chapter {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .number {
    font-size: 10vh;
    margin: 0.5em auto;
  }

  .title {
    font-size: 15vh;
    letter-spacing: 0.5em;
    margin: 0 auto 1em auto;
    text-transform: uppercase;
  }
}

.appear,
.fade-enter-active {
  animation: appear 600ms linear;
}
.fade-leave-active {
  animation: appear 600ms linear reverse;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
