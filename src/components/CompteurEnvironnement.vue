<template>
  <div id="branche">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1400 200"
      ref="svgFlowers"
      style="z-index:2"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1400 200"
      ref="svgLeaves"
      style="z-index:1"
    />
  </div>
</template>

<script>
import { state } from "@/state.js";
import { pickRandomIn, shuffleArray } from "@/utils.js";

const SVG_NS = "http://www.w3.org/2000/svg";

const dropIncrement = 0.002;
const rotateIncrement = Math.PI;
const NB_ACCROCHES = 200;
let accroches;
const groups = {
  leaves: {
    list: [],
    types: ["FEUILLE01", "FEUILLE02", "FEUILLE03"],
    maxGrowth: 30,
    radius: 15,
    zIndex: 2
  },
  flowers: {
    list: [],
    types: ["fleur1", "fleur2"],
    maxGrowth: 30,
    radius: 10,
    zIndex: 3
  }
};

let wind = 1;
const windIncrement = 0.5;
const maxWind = 2;

const createFlower = ({ x, y, type, accroche, group }) => {
  let growthPhase = 0;
  let scale = 0.3;
  let rotation = Math.floor(Math.random() * 60) - 30;
  const element = document.createElementNS(SVG_NS, "use");
  element.setAttribute("href", `assets/environment/${type}.svg#fleur`);
  element.setAttribute("xlink:href", `assets/environment/${type}.svg#fleur`); // for Safari
  element.setAttribute("style", `z-index: ${group.zIndex}`);

  const flower = {
    attached: true,
    alive: true,
    accroche,

    grow() {
      growthPhase += 1;
      scale += 0.05;
    },

    drop() {
      y += dropIncrement * Math.random() * (1400 / 100);
      x += dropIncrement * (wind + Math.random() * 2);
      rotation += rotateIncrement * (1 + Math.random());
    },

    transform() {
      const radius = scale * group.radius;
      let cx = Math.round(x * 1400 - radius);
      let cy = Math.round(100 + y * 100 - radius);
      if (cy > 250) flower.delete();
      element.setAttribute(
        "transform",
        `translate(${cx},${cy}) scale(${scale}) rotate(${rotation})`
      );
    },

    step() {
      if (growthPhase < group.maxGrowth) {
        this.grow();
      } else if (!this.attached) {
        this.drop();
      }
      this.transform();
    },

    delete() {
      flower.alive = false;
      group.svg.removeChild(element);
    }
  };

  flower.transform();
  group.svg.appendChild(element);
  return flower;
};

const attachFlower = group => {
  let type = pickRandomIn(group.types);
  let accroche = accroches.find(accroche => !accroche.occupied);
  if (!accroche) return; // plus de spot libre !
  let flower = createFlower({
    type,
    group,
    accroche,
    x: accroche.x,
    y: accroche.y
  });
  group.list.push(flower);
  accroche.occupied = true;
};

const detachFlowers = (n, group) => {
  let attached = group.list.filter(flower => flower.attached);
  n = Math.min(n, attached.length);

  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      attached[i].attached = false;
      attached[i].accroche.occupied = false;
    }, Math.round(i * 200 + Math.random() * 100));
  }

  return new Promise(resolve => setTimeout(resolve, n * 200));
};

const attachFlowers = (n, group) => {
  let t = 0;
  for (let i = 0; i < n; i++) {
    t += 25;
    setTimeout(() => attachFlower(group), t);
  }
  return new Promise(resolve => setTimeout(resolve, t));
};

const animateFlowers = () => {
  const tick = () => {
    Object.values(groups).forEach(group => {
      group.list = group.list.filter(flower => {
        flower.step();
        return flower.alive;
      });
    });

    if (Math.random() < 0.02) {
      wind = Math.min(maxWind, wind + (Math.random() * 2 - 1) * windIncrement);
      wind = Math.max(0, wind);
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

export default {
  name: "CompteurEnvironnement",

  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
    this.init();
  },

  destroyed() {
    window.removeEventListener("resize", this.resize);
  },

  data() {
    return { state };
  },

  watch: {
    "state.scores.environnement"(newValue, oldValue) {
      let valueLost = oldValue - newValue;
      if (valueLost > 0) {
        let nbToDrop = Math.ceil(Math.max(1, valueLost));
        console.log(`detach ${nbToDrop} leaves `);
        detachFlowers(nbToDrop, groups.leaves);
      }
    },
    "state.scores.bonheur"(newValue, oldValue) {
      let valueLost = oldValue - newValue;
      if (valueLost > 0) {
        let nbToDrop = Math.ceil(Math.max(1, valueLost));
        console.log(`detach ${nbToDrop} flowers`);
        detachFlowers(nbToDrop, groups.flowers);
      } else {
        let nbToAdd = Math.ceil(Math.max(1, -1 * valueLost));
        console.log(`attach ${nbToAdd} flowers`);
        for (let i = 0; i < nbToAdd; i++) {
          setTimeout(() => attachFlower(groups.flowers), i * 25);
        }
      }
    },
    "state.shouldShowIndicateurBonheur"(showDemo) {
      if (showDemo === true) {
        attachFlowers(50, groups.flowers).then(() => {
          setTimeout(() => detachFlowers(50, groups.flowers), 1000);
        });
      }
    }
  },

  methods: {
    init() {
      groups.flowers.svg = this.$refs.svgFlowers;
      groups.flowers.list = [];
      groups.leaves.svg = this.$refs.svgLeaves;
      groups.leaves.list = [];
      accroches = new Array(NB_ACCROCHES).fill().map((_, i) => ({
        x: (i + 0.3 * (Math.random() - 0.5)) / NB_ACCROCHES,
        y: 0.1 + 0.2 * (Math.random() - 0.5),
        occupied: false
      }));
      accroches = shuffleArray(accroches);
      attachFlowers(100, groups.leaves);
      animateFlowers();
    },

    resize() {}
  }
};
</script>

<style lang="postcss" scoped>
svg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 98%;
}

#branche {
  width: 100%;
  height: 100%;
  background: url("../../public/assets/environment/BRANCHE.svg");
  background-size: auto 5vmin;
  background-repeat: repeat-x;
  background-position: center center;
  animation: appear 600ms linear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>