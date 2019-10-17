<template>
  <footer>
    <div :class="['volume', { muted: state.mute }]">
      <label id="mute">
        Mute
        <input type="checkbox" v-model="state.mute" @change="updateMute" />
      </label>
      <label id="volume">
        Volume
        <input type="range" min="0" max="100" v-model="state.volume" @change="updateVolume" />
      </label>
    </div>
    <div class="actions">
      <button v-if="isIntro" @click="skipIntro">Passer l'introduction</button>
    </div>
  </footer>
</template>

<script>
import { state } from "@/state.js";
import { cards } from "@/cards.js";
import { skipIntro } from "@/game.js";
import { updateVolume, updateMute } from "@/audio.js";

export default {
  name: "BottomBar",
  components: {},
  data() {
    return {
      state
    };
  },
  computed: {
    card() {
      return cards[this.state.card];
    },
    isIntro() {
      return this.state.deck && this.state.deck.name === "Introduction";
    }
  },
  methods: {
    skipIntro,
    updateVolume,
    updateMute
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/input-range.css";

footer {
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5vh;
  background-image: url("../assets/ui/interface_barre_bas_fond.png");
  background-size: cover;
  background-position: top center;
  padding-top: 5px;
  box-sizing: border-box;

  .volume {
    justify-self: start;
    display: flex;
    align-items: center;

    label {
      font-size: 0;
    }

    input[type="range"] {
      width: 100px;
    }

    input[type="checkbox"] {
      visibility: hidden;
    }

    #mute {
      display: inline-block;
      width: 28px;
      height: 28px;
      background: url("../assets/ui/sound_on.png");
      margin: 8px;
    }

    &.muted {
      #mute {
        background: url("../assets/ui/sound_off.png");
      }

      #volume {
        opacity: 0.5;
      }
    }
  }

  .actions {
    flex: 1;
    justify-self: end;
  }
}

footer button {
  float: right;
}
</style>