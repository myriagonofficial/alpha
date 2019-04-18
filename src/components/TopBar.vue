<template>
  <header>
    <Jauges/>
  </header>
</template>

<script>
import Jauges from "@/components/Jauges.vue";

export default {
  name: "TopBar",
  components: { Jauges }
};
</script>

<style lang="postcss" scoped>
header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 14.5vh;
  background-image: url("/assets/ui/interface_barre_haut_fond.png");
  background-size: 100% 100%;
}
</style>

