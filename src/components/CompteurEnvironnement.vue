<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1400 200"
  >
    <defs>
      <g id="red" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <ellipse fill="#000000" cx="4.5" cy="5" rx="3.1" ry="2.6" />
        <ellipse fill="#B05DAA" cx="4.5" cy="5" rx="3" ry="2.5" />
      </g>
      <g id="blue" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <ellipse fill="#000000" cx="4.5" cy="5" rx="3.1" ry="2.6" />
        <ellipse fill="#4C6AB2" cx="4.5" cy="5" rx="3" ry="2.5" />
      </g>
      <g id="leaf" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <ellipse fill="#000000" cx="3" cy="1.5" rx="6" ry="3" />
        <ellipse fill="#61866B" cx="3" cy="1.5" rx="5.9" ry="2.8" />
      </g>
    </defs>
  </svg>
</template>

<script>
import { state } from "@/state.js";
import { pickRandomIn, shuffleArray } from "@/utils.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const MAX_FLOWER_AGE = 10;
const MAX_GROWTH_TICKS = 25;
const BRANCH_COLOR = "rgb(87, 85, 69)";

// from http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeRGBColor(color, percent) {
  const f = color.split(","),
    t = percent < 0 ? 0 : 255,
    p = percent < 0 ? percent * -1 : percent,
    R = parseInt(f[0].slice(4)),
    G = parseInt(f[1]),
    B = parseInt(f[2]),
    r = Math.round((t - R) * p) + R,
    g = Math.round((t - G) * p) + G,
    b = Math.round((t - B) * p) + B;
  return `rgb(${r},${g},${b})`;
}

const maxDepth = 8;
const trunkWidth = 14;
const trunkLength = 75;
const branchShrinkage = 0.75;
const maxAngleDelta = Math.PI / 12;
const delay = 100;

let svg;

const scaleIncrement = 0.1;
const flowerSize = 10.0;
const dropIncrement = 2.0;
const rotateIncrement = Math.PI;

let wind = 1;
const windIncrement = 0.5;
const maxWind = 2;

const createFlower = ({ x, y, type }) => {
  let telomeres = MAX_FLOWER_AGE;
  let growthPhase = 0;
  let scale = 0.5;
  let rotation = Math.floor(Math.random() * 60);
  if (type === "leaf") {
    rotation += Math.random() < 0.5 ? -120 : +60;
    let rx = Math.floor(Math.random() * 40);
    x += rx;
    y += 0.1 * rx;
  }
  const element = document.createElementNS(SVG_NS, "use");
  element.setAttribute("href", "#" + type);
  element.setAttribute("style", "z-index: 2");

  const flower = {
    attached: true,

    grow() {
      growthPhase += 1;
      scale += scaleIncrement * Math.random();
    },

    drop() {
      y += dropIncrement * Math.random();
      x += dropIncrement * (wind + Math.random() * 2);
      rotation += rotateIncrement * (2 + Math.random() - 0.5);
    },

    transform() {
      const radius = (scale * flowerSize) / 2;
      element.setAttribute(
        "transform",
        `translate(${x - radius},${y -
          radius}) scale(${scale}) rotate(${rotation})`
      );
    },

    step() {
      if (y >= svg - 2 * flowerSize) {
        telomeres -= 1;
      } else if (growthPhase >= MAX_GROWTH_TICKS) {
        if (!this.attached) {
          this.drop();
        }
      } else {
        this.grow();
      }

      this.transform();

      return telomeres;
    },

    delete() {
      svg.removeChild(element);
    }
  };

  flower.transform();

  // pick a random branch so it looks like the flowers are falling through them
  const { childNodes } = svg;
  const randomBranch =
    childNodes[Math.floor(Math.random() * childNodes.length)];
  svg.insertBefore(element, randomBranch);

  return flower;
};

let flowers = [];
let flowerDetachIndex = 0;
let branchEndings;

const detachFlowers = n => {
  if (flowerDetachIndex + n >= flowers.length) {
    n = flowers.length - flowerDetachIndex;
  }
  flowerDetachIndex += n;
  console.log({ n, flowerDetachIndex });

  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      flowers[flowerDetachIndex - n + i].attached = false;
    }, Math.round(i * 200 + Math.random() * 100));
  }
};

const flowersPerLevel = {
  0: ["red", "blue"],
  1: ["red", "blue"],
  2: ["red", "blue", "leaf", "leaf"],
  3: ["red", "blue", "leaf", "leaf", "leaf", "leaf"],
  4: ["leaf"],
  5: ["leaf"]
};

const attachFlower = node => {
  let type = pickRandomIn(flowersPerLevel[node.depth]);
  flowers.push(createFlower(Object.assign({ type }, node)));
};

const addFlowers = () => {
  branchEndings = shuffleArray(branchEndings);
  branchEndings.forEach((node, i) => {
    setTimeout(() => attachFlower(node), i * 25);
  });
};

const animateFlowers = () => {
  const tick = () => {
    flowers = flowers.reduce((acc, flower) => {
      if (flower.step() > 0) {
        return acc.concat([flower]);
      } else {
        flower.delete();
        return acc;
      }
    }, []);

    if (Math.random() < 0.02) {
      wind = Math.min(maxWind, wind + (Math.random() * 2 - 1) * windIncrement);
      wind = Math.max(0, wind);
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const wrap = a => (Array.isArray(a) ? a : [a]);
const flatten = a => {
  if (!Array.isArray(a)) {
    return a;
  }

  const [left, right] = a;
  return wrap(left).concat(wrap(right));
};

const drawBranch = (x1, y1, length, angle, depth, branchWidth, branchColor) => {
  let randomLength = Math.round(length * (0.9 + 0.2 * Math.random()));
  const x2 = x1 + randomLength * Math.cos(angle);
  const y2 = y1 + randomLength * Math.sin(angle);

  const line = document.createElementNS(SVG_NS, "line");
  const style = `stroke:${branchColor};stroke-width:${branchWidth};z-index:1;`;

  line.setAttribute("x1", x1);
  line.setAttribute("x2", x2);
  line.setAttribute("y1", y1);
  line.setAttribute("y2", y2);
  line.setAttribute("style", style);

  svg.appendChild(line);

  const newDepth = depth - 1;

  if (newDepth <= 5) {
    branchEndings.push({ x: x2, y: y2, depth: newDepth });
  }

  if (newDepth <= 0) {
    return Promise.resolve({ x: x2, y: y2 });
  }

  const newBranchWidth = branchWidth * branchShrinkage;
  const newBranchColor = shadeRGBColor(branchColor, 0.05);

  return Promise.all(
    [-1, 1].map(direction => {
      const newAngle =
        angle + maxAngleDelta * (0.25 + Math.random() * 0.25) * direction;
      const newLength = length * (branchShrinkage + Math.random() * 0.2);

      return new Promise(resolve => {
        setTimeout(
          () =>
            resolve(
              drawBranch(
                x2,
                y2,
                newLength,
                newAngle,
                newDepth,
                newBranchWidth,
                newBranchColor
              )
            ),
          delay
        );
      });
    })
  ).then(flatten);
};

// returns a promise that resolves to an array of the positions of the branches
const drawTree = () => {
  branchEndings = [];
  return drawBranch(
    -50,
    20,
    trunkLength,
    Math.PI / 16,
    maxDepth,
    trunkWidth,
    BRANCH_COLOR
  );
};

export default {
  name: "CompteurEnvironnement",

  mounted() {
    svg = this.$el;
    this.resize();
    window.addEventListener("resize", this.resize);
    drawTree()
      .then(addFlowers)
      .then(animateFlowers);
  },

  destroyed() {
    window.removeEventListener("resize", this.resize);
  },

  data() {
    return { state };
  },

  watch: {
    "state.scores.environnement"(newValue, oldValue) {
      let valueLost = newValue - oldValue;
      let nbFlowersToDrop = Math.ceil(Math.max(1, valueLost));
      //console.log({ newValue, oldValue, nbFlowersToDrop });
      detachFlowers(nbFlowersToDrop);
    }
  },

  methods: {
    resize() {}
  }
};
</script>

<style lang="postcss" scoped>
svg {
  height: 100%;
}
</style>