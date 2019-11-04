<template>
  <div class="card" v-if="card" :style="cardStyle">
    <div class="card-face card-face-front hidden" ref="front">
      <div class="card-image">
        <img :src="'assets/cards/' + image" />
        <div class="card-effect" />
      </div>
    </div>
    <ul class="choices">
      <li
        :class="['choice', choice.anim, { special: !!choice.test }]"
        tabindex="0"
        v-for="(choice, i) in choices"
        :key="choice.label"
        :style="calcPositionChoice(i)"
        @mouseover="onMouseOverChoice"
        @click="choose(choice)"
      >{{ choice.label }}</li>
    </ul>
  </div>
</template>

<script>
import { state } from "@/state.js";
import { nextCard } from "@/game.js";
import { playSound } from "@/audio.js";

export default {
  name: "Card",

  props: {
    card: Object
  },

  data() {
    return {
      state,
      randomAngle: 0,
      cardStyle: this.calcCardStyle(),
      choices: []
    };
  },

  mounted() {
    this.randomAngle = Math.random() * Math.PI * 2;
    this.$el.style.transition = "none";
    this.putCardAway();
    setTimeout(() => {
      this.$el.style.transition = null;
      this.bringCardIn();
      this.showChoices();
    }, 400);
    this.resizeListener = window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  watch: {
    card() {
      this.showChoices();
    }
  },

  computed: {
    image() {
      return typeof this.card.image === "function"
        ? this.card.image()
        : this.card.image;
    }
  },

  methods: {
    choose(choice) {
      playSound("gui_click_choice", "gui");
      if (choice.effect) choice.effect(state);
      this.putCardAway();
      setTimeout(() => {
        nextCard();
        this.bringCardIn();
      }, 800);
    },

    showChoices() {
      this.choices = Object.entries(this.card.choices)
        .map(([label, choice]) => ({ ...choice, label, anim: "hidden" }))
        .filter(choice => !choice.test || choice.test() === true);

      this.choices.forEach((choice, i) => {
        setTimeout(() => {
          choice.anim = "appear";
        }, 1400 + i * 500);
        setTimeout(() => {
          choice.anim = "glow";
        }, 1900 + i * 500);
      });
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
      if (this.choices[i].position) {
        return this.choices[i].position;
      }

      let angle =
        ((this.randomAngle + i / this.choices.length) % 1) * Math.PI * 2;
      return {
        top: `${Math.round(Math.sin(angle) * 30) + 50}%`,
        left: `${Math.round(Math.cos(angle) * 30) + 50}%`
      };
    },

    putCardAway() {
      if (!this.$el) return;
      let randomAngle = (0.75 + Math.random() * 0.5) * Math.PI;
      let dx = Math.cos(randomAngle) * 120;
      let dy = Math.sin(randomAngle) * 120;
      let rotation =
        (randomAngle < Math.PI ? -1 : +1) * Math.round(90 + Math.random() * 90);

      this.$nextTick(() => {
        this.choices = [];
        this.$el.style.transform = `translate(${dx}vw,${dy}vh) rotate(${rotation}deg)`;
      });
    },

    bringCardIn(immediate = false) {
      this.randomAngle = Math.random() * Math.PI * 2;
      if (immediate) this.$el.style.transitionDelay = 0;
      this.$el.style.transform = `translate(0,0) rotateZ(-2deg)`;
      this.$nextTick(() => delete this.$el.style.transitionDelay);
    },

    onMouseOverChoice() {
      playSound("gui_hover_choice", "gui");
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
    background: rgba(0, 0, 0, 0.75);
    font-size: 1.8vmin;
    padding: 1em 0.5em;
    transform: translate(-50%, -50%);
    max-width: 30%;
    transition: all 400ms all;

    &.hidden {
      visibility: hidden;
      opacity: 0;
      animation: none;
    }

    &.appear {
      animation: appear 500ms linear;
      animation-fill-mode: forwards;
    }

    &:focus {
      animation: none;
      outline: 4px white;
      box-shadow: 0 0 5px white, 0 0 25px rgba(0, 0, 0, 0.5);
      color: black;
      background: #d0cdc4;
    }

    &.glow:not(:focus) {
      animation: glow 500ms alternate ease-in-out infinite;

      &.special {
        animation-name: glow-special;
      }
    }

    &:hover {
      animation: none;
      box-shadow: 0 0 25px white, 0 0 35px rgba(0, 0, 0, 0.5);
      color: black;
      background: #d0cdc4;
    }
  }
}

@keyframes appear {
  0% {
    opacity: 0;
    box-shadow: none;
  }
  100% {
    opacity: 1;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.35);
  }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.35);
  }
  100% {
    box-shadow: 0 0 20px rgba(128, 128, 128, 0.45);
  }
}

@keyframes glow-special {
  0% {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 25px rgba(64, 64, 64, 0.5);
  }
}
</style>
