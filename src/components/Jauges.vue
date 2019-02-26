<template>
  <div class="jauges">
    <div class="jauge" v-for="jauge in jauges">
      <img :src="'assets/icons/' + jauge.icon" />
      <div class="level" :style="{ height: getLevelHeight(jauge) }" />
    </div>
  </div>
</template>

<script>
import { state } from "@/game.js";
export default {
  name: "Jauges",
  data() {
    return {
      jauges: state.jauges
    };
  },
  methods: {
    getLevelHeight(jauge) {
      return (1 - jauge.level / 100) * 64 + "px";
    }
  }
};
</script>

<style>
.jauges {
  padding: 0.5em;
  display: flex;
  justify-content: center;
}

.jauge {
  position: relative;
}

.jauge img {
  height: 64px;
  width: 64px;
  margin: 0 1em;
}

.jauge .level {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 400ms ease-in-out;
}
</style>
