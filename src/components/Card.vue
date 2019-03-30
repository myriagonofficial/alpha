<template>
  <div class="card is-flipped flipping">
    <div class="card-face card-face-back" ref="back">
      <img class="card-frame" :src="'assets/frames/back_' + card.frame + '.png'" @load="flip">
    </div>
    <div class="card-face card-face-front hidden" ref="front">
      <div class="card-image">
        <span class="card-image-yes" :style="{opacity: opacityYes }">{{ card.yesLabel || "Oui" }}</span>
        <span class="card-image-no" :style="{opacity: opacityNo }">{{ card.noLabel || "Non" }}</span>
        <img :src="'assets/cards/' + card.image">
        <div
          class="card-frame"
          :style="{
            backgroundImage: 'url(./assets/frames/' + card.frame + '.png)'
          }"
        />
      </div>
      <div class="card-info clearfix">
        <div class="card-name">{{ card.name }}</div>
        <div class="card-description">{{ card.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Hammer from "hammerjs";
import { state } from "@/state.js";

export default {
  name: "Card",

  props: {
    card: Object
  },

  data() {
    return {
      state,
      active: false, // the active variable is used to render each frame of the animation
      transform: null
    };
  },

  computed: {
    opacityYes() {
      return this.state.choice > 0 ? this.state.choice : 0;
    },
    opacityNo() {
      return this.state.choice < 0 ? -this.state.choice : 0;
    }
  },

  methods: {
    // all animation takes place between when active changes state from true
    // in requestElementUpdate to false in updateElementTransform
    requestElementUpdate() {
      if (!this.active) {
        requestAnimationFrame(this.updateElementTransform);
        this.active = true;
      }
    },

    resetElement() {
      this.$el.classList.add("animate");
      state.choice = 0;
      this.transform = {
        translate: {
          x: 0,
          y: 0
        },
        angle: 0
      };
      this.requestElementUpdate();
    },

    updateElementTransform() {
      const {
        angle,
        translate: { x, y }
      } = this.transform;
      const style = `translate3d(${x}px, ${y}px, 0) rotate(${angle}deg)`;
      this.$el.style.transform = style;
      this.active = false;
    },

    onHammerInput(ev) {
      if (ev.isFinal) {
        if (state.choice === 1) {
          //offscreen
          this.$el.classList.add("animate");
          this.transform.translate = {
            x: ev.deltaX * 3,
            y: ev.deltaY * 3
          };
          this.requestElementUpdate();
          setTimeout(() => {
            this.$emit("choice", true);
          }, 200);
        } else if (state.choice === -1) {
          //offscreen
          this.$el.classList.add("animate");
          this.transform.translate = {
            x: ev.deltaX * 3,
            y: ev.deltaY * 3
          };
          this.requestElementUpdate();
          setTimeout(() => {
            this.$emit("choice", false);
          }, 200);
        } else {
          this.resetElement();
        }
      }
    },

    onPanMove(ev) {
      const MAX_ANGLE = 25;

      this.$el.classList.remove("animate");
      let deltaY = Math.sign(ev.deltaY) * Math.min(150, Math.abs(ev.deltaY));

      this.transform.translate = {
        x: ev.deltaX,
        y: deltaY
      };

      // change opacity of the YES / NO text and angle of card
      let multiplier = Math.min(
        Math.max(Math.abs(ev.deltaX) / (this.$el.offsetWidth / 3), 0),
        1
      );
      state.choice = multiplier * Math.sign(ev.deltaX);
      this.transform.angle = MAX_ANGLE * state.choice;
      this.requestElementUpdate();
    },

    flip() {
      setTimeout(() => {
        this.$el.classList.remove("is-flipped");
      }, 50);
      setTimeout(() => {
        this.$refs.front.classList.remove("hidden");
      }, 300);
      setTimeout(() => {
        this.$el.classList.remove("flipping");
        let mc = new Hammer.Manager(this.$el);
        mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

        this.resetElement();

        mc.on("hammer.input", this.onHammerInput);
        mc.on("panstart panmove", this.onPanMove);
      }, 1050);
    }
  }
};
</script>

<style lang="postcss" scoped>
.card {
  transform-style: preserve-3d;
  transform-origin: center;
  cursor: grab;
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
  border-radius: 24px;
}

.text-active {
  color: #d94b3f;
}
.text-inactive {
  color: #d3d3d3;
}

.card.animate {
  transition: all 0.3s;
}
.card-image {
  position: relative;
  backface-visibility: hidden;
}

.card.is-flipped {
  transform: translateX(100%) rotateY(-180deg) translateY(15px) scale(0.98);
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
  background-size: 100% 100%;
}

.card-face-front .card-frame,
.card-face-front .card-info {
  backface-visibility: hidden;
}

.card-image-yes,
.card-image-no {
  z-index: 99;
  position: absolute;
  top: 50px;
  padding: 5px;
  border: 5px solid;
  border-radius: 10px;
  font-size: 3rem;
  box-shadow: 0 0 16px 16px rgba(0, 0, 0, 0.95);
  letter-spacing: 2px;
  text-align: center;
  font-weight: bold;
  opacity: 0;
}
.card-image-yes {
  left: 30px;
  color: white;
  background-color: rgb(84, 102, 109);
  transform: rotate(-30deg);
}
.card-image-no {
  left: calc(512px - 140px - 30px);
  color: white;
  background-color: rgb(84, 102, 109);
  transform: rotate(30deg);
}
.card-info {
  z-index: 3;
  position: absolute;
  bottom: 215px;
  left: 80px;
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
  font-size: 1.7em;
  text-align: center;
  position: absolute;
  top: 62px;
  left: 0;
  right: 0;
  height: 160px;
}
</style>
