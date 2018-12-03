function toValue(value, min, max, maxFnc) {
  return {
    value,
    min,
    max,
    maxFnc,
  };
}

function rnd(start, end) {
  return Math.floor(start + Math.random() * (end - start + 1));
}

export default {
  state: {
    head: {
      height: toValue(79, 20, 200),
      width: toValue(200, 100, 200),
      chin: toValue(150, 70, 200),
      top: toValue(80, 10, 100),
      offsetY: toValue(0, -50, 50),
      color: '#F0C7B1',
    },
    eyes: {
      outerWidth: toValue(15, 5, 30),
      outerHeight: toValue(10, 5, 30),
      outerColor: '#FFF',
      innerWidth: toValue(6, 2, 20, state => state.eyes.outerWidth.value),
      innerHeight: toValue(6, 2, 20, state => state.eyes.outerHeight.value),
      innerColor: '#000',
      offsetY: toValue(0, -50, 50),
      wide: toValue(90, 5, 200, state => state.head.width.value - 50),
    },
    mouth: {
      width: toValue(60, 10, 150),
      height: toValue(40, 10, 100),
      offsetY: toValue(0, -50, 50),
    },
    nose: {
      width: toValue(10, 10, 50),
      height: toValue(10, 10, 50),
      offsetY: toValue(0, -50, 50),
    },
    ears: {
      width: toValue(30, 10, 50),
      height: toValue(40, 10, 50),
      offsetY: toValue(0, -50, 50),
    },
  },
  mutations: {
    head(state, value) {
      state.head = value;
    },
  },
  actions: {
    generate({ commit, state }) {
      // const clone = { ...state };
      const clone = Object.assign({}, state);
      Object.entries(clone.head).forEach((entry) => {
        if (entry[1].value) {
          const newValue = rnd(entry[1].min, entry[1].max);
          entry[1].value = newValue;
        }
      });

      Object.entries(clone.eyes).forEach((entry) => {
        if (entry[1].value) {
          const max = entry[1].maxFnc ? entry[1].maxFnc(state) : entry[1].max;
          console.log(entry[0], max, entry[1].maxFnc);
          const newValue = rnd(entry[1].min, max);
          entry[1].value = newValue;
        }
      });
      // commit('head', clone);
    },
  },
};
