<template>
  <div class="achievement-info">
    <div class="background-overlay"></div>
    <div class="card-zone">
      <div class="card">
        <img :src="image" />
      </div>
    </div>
    <div class="card-info">
      <h3 v-if="!closable">Accomplissement de votre espèce:</h3>
      <div class="card-name">{{ title }}</div>
      <div class="card-description" ref="description">{{ description }}</div>
      <div class="bonus" v-if="bonus">
        <img class="preview" :src="bonus.preview" />
        <p>
          <strong>Bonus débloqué:</strong>
        </p>
        <p>
          <i>{{bonus.title}}</i>
        </p>
        <a :href="bonus.url" download>Télécharger</a>
      </div>
      <button class="close" v-if="closable" @click="close" @mouseover="onButtonMouseOver">
        <img src="../assets/ui/close.svg" alt="Retour" />
      </button>
    </div>
  </div>
</template>

<script>
import { playSound } from "@/audio.js";

export default {
  name: "Achievement",

  props: {
    title: String,
    image: String,
    description: String,
    bonus: {
      title: String,
      image: String,
      url: String
    },
    closable: Boolean
  },

  methods: {
    onButtonMouseOver() {
      playSound("gui_hover_button");
    },
    close() {
      //playSound("gui_click_button", "gui");
      this.$emit("close");
    }
  }
};
</script>

<style lang="postcss" scoped>
.achievement-info {
  position: relative;
  height: 80vh;
  padding: 0;
  color: black;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h3 {
    margin: 0;
    font-weight: normal;
    font-size: 3vh;
  }

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

  .card {
    position: relative;
    box-shadow: 0 0 3vh 0.5vh rgba(255, 255, 255, 0.5);

    img {
      width: 100%;
      height: 100%;
    }
  }

  .bonus {
    background: rgba(0, 0, 0, 0.5);
    flex: 0;
    padding: 0.5em;
    color: white;

    .preview {
      float: left;
      height: 10vh;
      margin-right: 0.5em;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    }

    p {
      margin: 0;
      font-size: 2vh;
    }

    a {
      float: right;
      margin: 0.5em 0 0 0.5em;
    }
  }
}

button.close {
  position: absolute;
  top: 0vh;
  right: 0vh;
  font-size: 0;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;

  img {
    display: block;
    width: 60%;
    height: 60%;
    margin: 20%;
  }
}

.card-zone,
.card-info {
  padding: 0;
}
</style>