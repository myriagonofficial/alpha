<template>
  <header>
    <CompteurEnvironnement v-if="state.shouldShowIndicateurEnvironnement" />
    <CompteurBonheur v-if="state.shouldShowIndicateurBonheur" />
  </header>
</template>

<script>
import { state } from "@/state.js";
import CompteurBonheur from "./CompteurBonheur.vue";
import CompteurEnvironnement from "./CompteurEnvironnement.vue";

export default {
  name: "TopBar",
  components: {
    CompteurEnvironnement,
    CompteurBonheur
  },
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

