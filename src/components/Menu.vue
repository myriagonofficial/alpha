<template>
  <ul class="menu">
    <li @click="$emit('play')">Jouer</li>
    <li>Crédits</li>
    <li>Découvrir Myriagon</li>
    <li>Découvrir Arthur Lemaître</li>
  </ul>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped lang="postcss">
ul.menu {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0;
  padding: 0;

  li {
    background: url("../assets/ui/bouton.png");
    background-size: 100% 100%;
    padding: 2rem 4rem;
    list-style: none;
    width: 256px;
    cursor: pointer;

    &:hover {
      background-image: url("../assets/ui/bouton_hover.png");
    }
  }
}
</style>