<template>
  <div class="achievements-scene">
    <header>
      <h2>Fins débloquées</h2>
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
          tabindex="0"
          v-for="(achievement, key) in achievements"
          :key="key"
          @mouseover="isUnlocked(key) && onAchievementMouseOver()"
          @click="isUnlocked(key) && selectAchievement(achievement)"
        >
          <img :src="achievement.image" />
        </li>
      </ul>
      <p v-if="state.bestScore && !selectAchievement">
        Meilleure partie:
        <strong>{{state.bestScore}}</strong>
        <img src="../assets/ui/fleur.svg" alt="fleurs" />
      </p>
    </main>
  </div>
</template>

<script>
import { state } from "@/state.js";
import { achievements } from "@/achievements.js";
import { playSound } from "@/audio.js";
import { gamepad, BUTTONS, DIRECTIONS } from "@/gamepad.js";

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

  mounted() {
    gamepad.onButtonPress(BUTTONS.A, () => this.onButtonAPressed());
    gamepad.onButtonPress(BUTTONS.B, () => this.onButtonBPressed());
    gamepad.onDirection(dir => {
      if (dir === DIRECTIONS.UP || dir === DIRECTIONS.LEFT)
        this.selectButton(-1);
      if (dir === DIRECTIONS.DOWN || dir === DIRECTIONS.RIGHT)
        this.selectButton(+1);
    });
  },

  destroyed() {
    gamepad.removeOnButtonPress(BUTTONS.A);
    gamepad.removeOnButtonPress(BUTTONS.B);
    gamepad.removeOnDirection();
  },

  methods: {
    isUnlocked(name) {
      return state.achievements != null && state.achievements.includes(name);
    },
    onAchievementMouseOver() {
      playSound("gui_hover_button", "gui_hover");
    },
    selectAchievement(achievement) {
      playSound("gui_click_button", "gui_click");
      this.selectedAchievement = achievement;
    },
    selectButton(step) {
      const buttons = [
        ...document.querySelectorAll("button, .achievement.unlocked")
      ];
      const selectedButtonIndex = buttons.findIndex(
        button => button === document.activeElement
      );
      const nextIndex =
        (selectedButtonIndex + step + buttons.length) % buttons.length;
      buttons[nextIndex].focus();
      playSound("gui_hover_button", "gui_hover");
    },
    onButtonAPressed() {
      if (document.activeElement.matches("button, .achievement.unlocked")) {
        playSound("gui_click_button", "gui_click");
        document.activeElement.click();
      }
    },
    onButtonBPressed() {
      if (this.selectedAchievement) this.selectedAchievement = null;
      else this.state.scene = "menu";
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
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & >>> .achievement-info {
      flex: 1;
    }

    p img {
      width: 3vmin;
      height: 3vmin;
      vertical-align: middle;
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

      &:focus {
        box-shadow: 0 0 25px 10px rgba(255, 220, 200, 0.75);
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