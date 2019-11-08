<template>
  <div :class="['volume', { muted: state.mute }]">
    <label id="mute">
      Mute
      <input type="checkbox" v-model="state.mute" @change="updateMute" />
    </label>
    <label id="volume">
      Volume
      <input type="range" min="0" max="100" v-model="state.volume" @input="updateVolume" />
    </label>
  </div>
</template>

<script>
import { state } from "@/state.js";
import { updateVolume, updateMute } from "@/audio.js";

export default {
  name: "VolumeControl",

  data() {
    return {
      state
    };
  },

  methods: {
    updateVolume,
    updateMute
  }
};
</script>

<style scoped lang="postcss">
@import "../assets/input-range.pcss";

.volume {
  justify-self: start;
  display: flex;
  align-items: center;

  label {
    font-size: 0;
    cursor: pointer;
  }

  input[type="range"] {
    width: 100px;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  #mute {
    display: inline-block;
    width: 3vh;
    height: 3vh;
    background-image: url("../assets/ui/sound_on.png");
    background-size: contain;
    margin: 8px;
  }

  &.muted {
    #mute {
      background-image: url("../assets/ui/sound_off.png");
    }

    #volume {
      opacity: 0.5;
    }
  }
}
</style>