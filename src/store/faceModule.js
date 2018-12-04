import Randomizer from '@/util/Randomizer';

function toValue(value, _min, _max) {
  const max = typeof _max === 'function' ? _max : () => _max;
  const min = typeof _min === 'function' ? _min : () => _min;

  return {
    value,
    min,
    max,
  };
}

export default {
  state: {
    head: {
      height: toValue(50, 30, 100),
      width: toValue(180, 150, 200),
      chin: toValue(180,
        state => 160 - state.head.height.value / 2,
        state => 230 - state.head.height.value / 2),
      top: toValue(90, 70, 100),
      offsetY: toValue(-20, -20, 0),
      color: '#F0C7B1',
    },
    brows: {
      type: toValue(0, 0, 0),
    },
    eyes: {
      outerWidth: toValue(15, 8, 20),
      outerHeight: toValue(15, 8, 20),
      outerColor: '#FFF',
      innerWidth: toValue(8, 4,
        state => state.eyes.outerWidth.value - 2),
      innerHeight: toValue(8, 4,
        state => state.eyes.outerHeight.value - 2),
      innerColor: '#000',
      offsetY: toValue(0, -30, 20),
      wide: toValue(90,
        state => state.eyes.outerWidth.value * 2,
        state => state.head.width.value - 40 - state.eyes.outerWidth.value),
    },
    nose: {
      type: toValue(0, 0, 1),
      width: toValue(20, 10, 50),
      height: toValue(20, 10, 50),
      offsetY: toValue(40,
        state => state.eyes.offsetY.value + state.eyes.outerHeight.value + state.nose.height.value / 2,
        state => state.eyes.offsetY.value + state.eyes.outerHeight.value + state.head.height.value / 2 + state.head.chin.value / 4 - 30),
    },
    mouth: {
      width: toValue(60, 20, state => state.head.width.value - 50),
      height: toValue(40, 10, 50),
      offsetY: toValue(90,
        state => state.nose.offsetY.value + state.nose.height.value / 2 + state.mouth.height.value / 2 + 5,
        state => state.head.height.value / 2 + state.head.chin.value / 2),
    },
    ears: {
      width: toValue(30, 10, 30),
      height: toValue(40, 10, 50),
      offsetY: toValue(0, -20, 20),
    },
    hair: {
      type: toValue(0, 0, 0),
      color: 'brown',
    },
    customPath1: '',
    customPath2: '',
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
    generate({ commit, state }, id) {
      const randomizer = new Randomizer(id);
      const clone = Object.assign({}, state);
      Object.entries(clone.head).forEach((entry) => {
        if (entry[1].value) {
          const newValue = randomizer.next(entry[1].min(state), entry[1].max(state));
          entry[1].value = newValue;
        }
      });

      const entries = [].concat(...[clone.eyes, clone.nose, clone.mouth, clone.ears, clone.hair].map(e => Object.entries(e)));

      entries.forEach((entry) => {
        // console.log(entry[0], entry[1].value);
        if (entry[1].value !== undefined) {
          const max = entry[1].max(state);
          const newValue = randomizer.next(entry[1].min(state), max);
          // console.log(entry[0], newValue);
          entry[1].value = newValue;
        }
      });

      const skinColors = ['#f0c7b1', 'rgb(233, 181, 150)', 'rgb(115, 71, 43)', 'rgb(242, 171, 150)', 'rgb(150, 100, 74)', 'rgb(217, 160, 136)', 'rgb(175, 105, 53)'];
      const hairColors = ['#701919', '#262222', '#FEEF60', '#C36D20', '#000', '#CB0D05', '#CB9905', '#C8B8D1'];

      commit('skinColor', skinColors[randomizer.next(0, skinColors.length - 1)]);
      commit('hairColor', hairColors[randomizer.next(0, hairColors.length - 1)]);
    },
  },
};
