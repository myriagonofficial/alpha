<template>
  <div class="card" v-if="card" :style="cardStyle">
    <div class="card-face card-face-front hidden" ref="front">
      <div class="card-image">
        <img :src="'assets/cards/' + card.image" />
        <div class="card-effect" />
      </div>
    </div>
    <div class="choices">
      <div
        class="choice"
        v-for="(choice, i) in choices"
        :key="choice.label"
        :style="calcPositionChoice(i)"
        @click="choose(choice)"
      >{{ choice.label }}</div>
    </div>
  </div>
</template>

<script>
import { state } from "@/state.js";
import { nextCard } from "@/game.js";

export default {
  name: "Card",

  props: {
    card: Object
  },

  data() {
    return {
      state,
      randomAngle: 0,
      cardStyle: this.calcCardStyle()
    };
  },

  mounted() {
    this.randomAngle = Math.random() * Math.PI * 2;
    this.putCardAway(true);
    setTimeout(() => this.bringCardIn(), 400);
    this.resizeListener = window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  computed: {
    choices() {
      return Object.entries(this.card.choices)
        .map(([label, choice]) => ({ ...choice, label }))
        .filter(choice => !choice.test || choice.test() === true);
    }
  },

  methods: {
    choose(choice) {
      if (choice.effect) choice.effect(state);
      this.putCardAway();
      setTimeout(() => {
        nextCard();
        this.bringCardIn();
      }, 800);
    },

    calcCardStyle() {
      const zone = document.querySelector(".card-zone");

      if (!zone) return;
      let { width: maxWidth, height: maxHeight } = zone.getBoundingClientRect();
      const ratio = 630 / 720;
      const margin = 10;
      maxHeight -= margin * 2;
      maxWidth -= margin * 2;

      const width = Math.min(maxWidth, maxHeight * ratio);
      const height = Math.min(maxHeight, maxWidth / ratio);

      return {
        width: width + "px",
        height: height + "px",
        top: Math.floor((maxHeight - height) / 2 + margin) + "px"
      };
    },

    onResize() {
      this.cardStyle = this.calcCardStyle();
    },

    calcPositionChoice(i) {
      let angle =
        ((this.randomAngle + i / this.choices.length) % 1) * Math.PI * 2;
      return {
        top: `${Math.round(Math.sin(angle) * 30) + 50}%`,
        left: `${Math.round(Math.cos(angle) * 30) + 50}%`
      };
    },

    putCardAway(immediate = false) {
      if (!this.$el) return;
      let randomAngle = (0.75 + Math.random() * 0.5) * Math.PI;
      let dx = Math.cos(randomAngle) * 100;
      let dy = Math.sin(randomAngle) * 100;
      let rotation =
        (randomAngle < Math.PI ? -1 : +1) * Math.round(90 + Math.random() * 90);
      if (immediate) this.$el.style.transitionDelay = 0;
      this.$el.style.transform = `translate(${dx}vw,${dy}vh) rotate(${rotation}deg)`;
      this.$nextTick(() => delete this.$el.style.transitionDelay);
    },

    bringCardIn(immediate = false) {
      this.randomAngle = Math.random() * Math.PI * 2;
      if (immediate) this.$el.style.transitionDelay = 0;
      this.$el.style.transform = `translate(0,0) rotateZ(-2deg)`;
      this.$nextTick(() => delete this.$el.style.transitionDelay);
    }
  }
};
</script>

<style lang="postcss" scoped>
.card {
  transform-style: preserve-3d;
  transform-origin: center;
  transition: transform 0.8s;
  transform: rotateZ(-2deg);
  cursor: pointer;
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5));
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
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
    font-size: 1.6vmin;
    padding: 1em 0.5em;
    transform: translate(-50%, -50%);
    max-width: 25%;
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

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
