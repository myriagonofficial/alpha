<template>
  <header>
    <p>Compteur environnement</p>
    <p>Compteur bonheur</p>
  </header>
</template>

<script>
import { state } from "@/state.js";

export default {
  name: "TopBar",
  components: {},
  data() {
    return {
      state
    };
  }
};
</script>

<style lang="postcss" scoped>
header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 15vh;
  background-image: url("../assets/ui/interface_barre_haut_fond.png");
  background-size: 100% 100%;
}
</style>

