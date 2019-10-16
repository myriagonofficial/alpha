<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1000 200"
  >
    <defs>
      <g id="flower" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group">
          <ellipse fill="#D2172E" cx="1.9724348" cy="4.19841371" rx="1.9724348" ry="1.99215915" />
          <ellipse fill="#D2172E" cx="4.55630988" cy="2.019449" rx="1.9724348" ry="1.99215915" />
          <ellipse fill="#D2172E" cx="6.29091552" cy="7.27775063" rx="1.9724348" ry="1.99215915" />
          <ellipse fill="#D2172E" cx="7.32232646" cy="4.19841371" rx="1.9724348" ry="1.99215915" />
          <ellipse fill="#D2172E" cx="3.16363164" cy="7.27775063" rx="1.9724348" ry="1.99215915" />
          <ellipse fill="#FFFFFF" cx="4.64971266" cy="5.00538314" rx="1.9724348" ry="1.99215915" />
        </g>
      </g>
    </defs>
  </svg>
</template>

<script>
import { state } from "@/state.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const MAX_FLOWER_AGE = 10;
const MAX_GROWTH_TICKS = 25;
const BRANCH_COLOR = "rgb(101, 67, 33)";
const NB_FLOWERS = 100;

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

const maxDepth = 8,
  trunkWidth = 12;
const branchShrinkage = 0.7;
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

const createFlower = ({ x, y, idx }) => {
  let telomeres = MAX_FLOWER_AGE;
  let growthPhase = 0;
  let scale = 0.5;
  let rotation = 0;
  const element = document.createElementNS(SVG_NS, "use");
  element.setAttribute("href", "#flower");
  element.setAttribute("style", "z-index: -1");

  const flower = {
    idx,

    attached: true,

    grow() {
      growthPhase += 1;
      scale += scaleIncrement * Math.random();
    },

    drop() {
      y += dropIncrement * Math.random();
      x += dropIncrement * (wind + Math.random() * 2);
      rotation += rotateIncrement * (Math.random() - 0.5);
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

const branchesInUse = {};
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

const findFreeBranchIdx = () => {
  for (let i = 0; i < branchEndings.length; i++) {
    const idx = Math.floor(Math.random() * branchEndings.length);
    if (!branchesInUse[idx]) {
      branchesInUse[idx] = true;
      return idx;
    }
  }

  return -1;
};

const attachFlower = () => {
  const idx = findFreeBranchIdx();
  if (idx >= 0) {
    const branch = branchEndings[idx];
    flowers.push(createFlower(Object.assign({}, branch, { idx })));
  }
};

const animateFlowers = () => {
  const tick = () => {
    flowers = flowers.reduce((acc, flower) => {
      if (flower.step() > 0) {
        return acc.concat([flower]);
      } else {
        flower.delete();
        delete branchesInUse[flower.idx];
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
  let randomLength = Math.round(length * (0.8 + 0.4 * Math.random()));
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
  if (newDepth <= 0) {
    return Promise.resolve({ x: x2, y: y2 });
  }

  const newBranchWidth = branchWidth * branchShrinkage;
  const newBranchColor = shadeRGBColor(branchColor, 0.1);

  return Promise.all(
    [-1, 1].map(direction => {
      const newAngle =
        angle + maxAngleDelta * (0.25 + Math.random() * 0.25) * direction;
      const newLength =
        length * (branchShrinkage + Math.random() * (1.0 - branchShrinkage));

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
const drawTree = (maxDepth, trunkWidth) => {
  return drawBranch(
    0,
    200,
    75,
    -Math.PI / 10,
    maxDepth,
    trunkWidth,
    BRANCH_COLOR
  ).then(branches => {
    for (let i = 0; i < NB_FLOWERS; i++) {
      setTimeout(attachFlower, i * 100);
    }

    branchEndings = branches;
    return branches;
  });
};

export default {
  name: "CompteurEnvironnement",

  mounted() {
    svg = this.$el;
    this.resize();
    window.addEventListener("resize", this.resize);
    drawTree(maxDepth, trunkWidth).then(animateFlowers);
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

<style scoped>
svg {
  height: 100%;
}
</style>