<template>
  <div id="menu-scene">
    <img class="logo-myriagon" src="assets/logo-myriagon.png" alt="Myriagon" />
    <img class="logo-alpha" src="assets/logo-alpha.png" alt="Alpha" />
    <p class="start" @click="$emit('play')">Commencer le jeu</p>
    <p class="info-son">L'expérience sonore est vivement conseillée</p>
    <p
      class="credits"
    >Visuels: Arthur Lemaître | Développement: Sylvain Pollet-Villard | Son et concept: Myriagon</p>
  </div>
</template>

<script>
export default {
  name: "MenuScene"
};
</script>

<style scoped lang="postcss">
#menu-scene {
  position: fixed;
  top: 15vh;
  left: 0;
  right: 0;
  bottom: 15vh;
  text-align: center;

  img,
  p {
    display: block;
    margin: auto;
  }

  .logo-myriagon {
    margin: 8vh auto 5vh;
    height: 8vh;
  }

  .logo-alpha {
    margin: 5vh auto;
    height: 15vh;
  }

  .start {
    font-size: 5vh;
    padding: 0.25em 0.5em;
    margin: 2vh auto 8vh;
    display: inline-block;
    transition: box-shadow 300ms;
    animation: blink 1s alternate ease-in-out infinite;
    cursor: pointer;

    &:hover {
      animation: none;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
      opacity: 1;
    }
  }

  .info-son {
    font-size: 2.5vh;
    margin-bottom: 3vh;

    &::before {
      content: url("../assets/ui/volume.png");
      display: inline-block;
      vertical-align: middle;
      line-height: 2.5vh;
      margin-right: 0.5em;
    }
  }
}

@keyframes blink {
  0% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.2;
  }
}
</style>