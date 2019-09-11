<template>
  <div class="card is-flipped flipping">
    <div class="card-face card-face-back" ref="back">
      <img class="card-frame" src="assets/frames/carte_fond_arriere.png" />
    </div>
    <div class="card-face card-face-front hidden" ref="front">
      <div class="card-image">
        <img :src="'assets/cards/' + card.image" />
        <div class="card-effect" />
      </div>
    </div>
    <div class="choices">
      <div
        class="choice"
        v-for="(label, i) in choices"
        :key="label"
        :style="calcPositionChoice(i)"
        @click="choose(label)"
      >{{ label }}</div>
    </div>
  </div>
</template>

<script>
import { state } from "@/state.js";
import { nextCard } from "@/game.js";
//import { sounds } from "@/sounds.js";

export default {
  name: "Card",

  props: {
    card: Object
  },

  data() {
    return {
      state,
      randomAngle: 0
    };
  },

  computed: {
    choices() {
      return Object.keys(this.card.choices);
    }
  },

  watch: {
    card: {
      handler() {
        this.randomAngle = Math.random() * Math.PI * 2;
        this.flip();
      },
      immediate: true
    }
  },

  methods: {
    flip() {
      setTimeout(() => {
        this.$el.classList.remove("is-flipped");
      }, 50);
      setTimeout(() => {
        this.$refs.front.classList.remove("hidden");
      }, 300);
      setTimeout(() => {
        this.$el.classList.remove("flipping");
      }, 1050);
    },

    choose(action) {
      this.card.choices[action](state);
      this.throwCard();
      setTimeout(() => {
        this.state.card = null;
      }, 900);
      setTimeout(() => nextCard(), 1000);
    },

    calcPositionChoice(i) {
      let angle =
        ((this.randomAngle + i / this.choices.length) % 1) * Math.PI * 2;
      return {
        top: `${Math.round(Math.sin(angle) * 30) + 50}%`,
        left: `${Math.round(Math.cos(angle) * 30) + 50}%`
      };
    },

    throwCard() {
      let randomAngle = (1 + Math.random()) * Math.PI;
      let dx = Math.cos(randomAngle) * 150;
      let dy = Math.sin(randomAngle) * 150;
      let rotation = randomAngle < (Math.PI * 3) / 2 ? -180 : +180;
      this.$el.style.transform = `translate(${dx}vw,${dy}vh) rotate(${rotation}deg)`;
    }
  }
};
</script>

<style lang="postcss" scoped>
.card {
  transform-style: preserve-3d;
  transform-origin: center;
  transition: transform 0.8s;
  cursor: pointer;
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5));
}

.card.is-flipped {
  transform: translateX(100%) rotateY(-180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-face.hidden {
  opacity: 0;
}

.card-face-back {
  transform: rotateY(180deg);
}

img {
  pointer-events: none;
  width: 100%;
  height: auto;
}

.text-active {
  color: #d94b3f;
}
.text-inactive {
  color: #d3d3d3;
}

.card-image {
  position: relative;
  backface-visibility: hidden;
}

.card.is-flipped {
  transform: translateX(100%) rotateY(-180deg);
}
.card.flipping {
  transition: transform 0.7s;
  transform-origin: center left;
}

.card-frame {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.choices {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .choice {
    position: absolute;
    display: inline-block;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    font-size: 2vh;
    padding: 1em 0.5em;
    transform: translate(-50%, -50%);
    max-width: 20%;
    transition: all 400ms all;
    animation: appear 500ms linear;
    animation-fill-mode: forwards;
    opacity: 0;

    &:nth-child(0) {
      animation-delay: 1s;
    }

    &:nth-child(1) {
      animation-delay: 1.5s;
    }

    &:nth-child(2) {
      animation-delay: 2s;
    }

    &:nth-child(3) {
      animation-delay: 2.5s;
    }

    &:hover {
      filter: drop-shadow(0 0 25px white);
    }
  }
}

.card-info {
  z-index: 3;
  position: absolute;
  bottom: 210px;
  left: 60px;
  right: 80px;
  padding: 0.8em;
  color: black;
}
.card-info .card-name {
  font-size: 1.8em;
  font-weight: bold;
  text-align: center;
}

.card-info .card-description {
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 52px;
  left: 0;
  right: 0;
  height: 160px;
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
