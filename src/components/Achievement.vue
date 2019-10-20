<template>
  <div class="achievement-info">
    <div class="background-overlay"></div>
    <div class="card-zone">
      <div class="card">
        <img :src="image" />
      </div>
    </div>
    <div class="card-info">
      <h3>Fin débloquée</h3>
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
    </div>
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style lang="postcss" scoped>
.achievement-info {
  position: relative;
  flex: 0 0 60vh;
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
    width: calc(630 / 720 * 50vh);
    height: 50vh;
    box-shadow: 0 0 3vh 0.5vh rgba(255, 255, 255, 0.5);

    img {
      max-width: calc(630 / 720 * 50vh);
      max-height: 50vh;
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

.card-zone,
.card-info {
  height: 50vh;
  bottom: auto;
  padding: 0;
}
</style>