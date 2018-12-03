function toValue(value, _min, _max) {
  const max = typeof _max === 'function' ? _max : () => _max;
  const min = typeof _min === 'function' ? _min : () => _min;

  return {
    value,
    min,
    max,
  };
}

function rnd(start, end) {
  return Math.floor(start + Math.random() * (end - start + 1));
}

export default {
  state: {
    head: {
      height: toValue(79, 20, 120),
      width: toValue(200, 110, 200),
      chin: toValue(150,
        state => 160 - state.head.height.value / 2,
        state => 230 - state.head.height.value / 2),
      top: toValue(80, 10, 100),
      offsetY: toValue(0, -50, 30),
      color: '#F0C7B1',
    },
    eyes: {
      outerWidth: toValue(15, 5, 20),
      outerHeight: toValue(10, 5, 20),
      outerColor: '#FFF',
      innerWidth: toValue(6, 2,
        state => state.eyes.outerWidth.value - 2),
      innerHeight: toValue(6, 2,
        state => state.eyes.outerHeight.value - 2),
      innerColor: '#000',
      offsetY: toValue(0, -30, 20),
      wide: toValue(90,
        state => state.eyes.outerWidth.value * 2,
        state => state.head.width.value - 40 - state.eyes.outerWidth.value),
    },
    nose: {
      type: toValue(0, 0, 1),
      width: toValue(10, 10, 50),
      height: toValue(10, 10, 50),
      offsetY: toValue(10,
        state => state.eyes.offsetY.value + state.eyes.outerHeight.value + state.nose.height.value / 2,
        state => state.eyes.offsetY.value + state.eyes.outerHeight.value + 30),
    },
    mouth: {
      width: toValue(60, 20, state => state.head.width.value - 50),
      height: toValue(40, 10, 50),
      offsetY: toValue(60,
        state => state.nose.offsetY.value + state.nose.height.value / 2 + state.mouth.height.value / 2,
        state => state.nose.offsetY.value + state.nose.height.value + 40),
    },
    ears: {
      width: toValue(30, 10, 50),
      height: toValue(40, 10, 50),
      offsetY: toValue(0, -20, 20),
    },
    hair: {
      color: 'brown',
    },
  },
  mutations: {
    hairColor(state, value) {
      state.hair.color = value;
    },
    skinColor(state, value) {
      state.head.color = value;
    },
  },
  actions: {
    generate({ commit, state }) {
      // const clone = { ...state };
      const clone = Object.assign({}, state);
      Object.entries(clone.head).forEach((entry) => {
        if (entry[1].value) {
          const newValue = rnd(entry[1].min(state), entry[1].max(state));
          entry[1].value = newValue;
        }
      });

      const entries = [].concat(...[clone.eyes, clone.nose, clone.mouth, clone.ears].map(e => Object.entries(e)));

      entries.forEach((entry) => {
        // console.log(entry[0], entry[1].value);
        if (entry[1].value !== undefined) {
          const max = entry[1].max(state);
          const newValue = rnd(entry[1].min(state), max);
          // console.log(entry[0], newValue);
          entry[1].value = newValue;
        }
      });

      const skinColors = ['#f0c7b1', 'rgb(233, 181, 150)', 'rgb(115, 71, 43)', 'rgb(242, 171, 150)', 'rgb(150, 100, 74)', 'rgb(217, 160, 136)', 'rgb(175, 105, 53)'];

      commit('skinColor', skinColors[rnd(0, skinColors.length - 1)]);
      commit('hairColor', `#${((1 << 24) * Math.random() | 0).toString(16)}`);
    },
  },
};
