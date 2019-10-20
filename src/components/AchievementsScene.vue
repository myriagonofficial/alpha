<template>
  <div class="achievements-scene">
    <header>
      <h2>Bonus débloqués</h2>
      <p>Quelles voies vous reste-t-il à découvrir ?</p>
    </header>

    <main>
      <Achievement
        v-if="selectedAchievement"
        v-bind="selectedAchievement"
        :closable="true"
        @close="selectedAchievement = null"
      ></Achievement>
      <ul class="grid" v-else>
        <li
          :class="['achievement', {unlocked: isUnlocked(key)}]"
          v-for="(achievement, key) in achievements"
          :key="key"
        >
          <img :src="achievement.image" @click="selectedAchievement = achievement" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { state } from "@/state.js";
import { achievements } from "@/achievements.js";

import Achievement from "@/components/Achievement.vue";

export default {
  name: "AchievementsScene",

  components: {
    Achievement
  },

  data() {
    return {
      state,
      achievements,
      selectedAchievement: null
    };
  },

  mounted() {},

  methods: {
    isUnlocked(name) {
      return state.achievements.includes(name);
    }
  }
};
</script>

<style scoped lang="postcss">
.achievements-scene {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 5vh;
  z-index: 2;
  text-align: center;
  animation: fadein 2s linear;
  font-size: 3vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;

  header {
    flex: 0 0 15vh;

    h2 {
      margin: 0.5em;
    }

    p {
      margin: 0;
    }
  }

  main {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & >>> .achievement-info {
      flex: 1;
    }
  }
}

.grid {
  display: grid;
  grid-template-columns: 15vh 15vh 15vh;
  grid-gap: 0.5em;

  .achievement {
    transition: all 300ms linear;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    &.unlocked {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 25px 5px rgba(255, 255, 255, 0.75);
      }
    }

    &:not(.unlocked) {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      filter: brightness(0.2) grayscale(0.5);
    }
  }
}

#backbutton {
  font-size: 4vmin;
  padding: 0.25em 0.5em;
  margin: 2vh auto 8vh;
  display: inline-block;
  transition: box-shadow 300ms;
  animation: blink 1s alternate ease-in-out infinite;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.25);
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>