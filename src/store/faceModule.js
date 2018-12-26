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
      show: true,
      height: toValue(30, 20, 50),
      width: toValue(180, 170, 180),
      chin: toValue(180,
        170,
        190),
      chinWidth: toValue(-10, -20, 30),
      top: toValue(90, 70, 100),
      offsetY: toValue(-10, -10, 0),
      color: '#F0C7B1',
    },
    brows: {
      show: true,
      type: toValue(0, 0, 0),
      rotate: toValue(10, -20, 20),
      curve: toValue(10, 0, 10),
    },
    eyes: {
      show: true,
      rotate: toValue(10, -20, 30),
      offsetY: toValue(30, 30, 40),
      iris: toValue(0, 0, 2),
      irisType: toValue(0, 0, 1),
      outerWidth: toValue(45, 40, 50),
      outerHeight: toValue(15, 10, 25),
      outerColor: '#FFF',
      innerWidth: toValue(22, 15,
        state => Math.min(30, state.eyes.outerWidth.value - 10)),
      innerHeight: toValue(22, 15,
        state => state.eyes.outerHeight.value - 10),
      innerColor: '#000',
      wide: toValue(90,
        state => state.eyes.outerWidth.value + 30,
        state => Math.min(100, state.head.width.value - 50 - state.eyes.outerWidth.value)),
    },
    nose: {
      show: true,
      type: toValue(0, 0, 1),
      width: toValue(15, 10, 20),
      height: toValue(30, 20, 40),
      offsetY: toValue(60,
        state => state.eyes.offsetY.value + state.eyes.outerHeight.value + state.nose.height.value / 2,
        state => state.eyes.offsetY.value + state.eyes.outerHeight.value + state.head.height.value / 2 + state.head.chin.value / 4 - 30),
    },
    mouth: {
      show: true,
      type: toValue(0, 0, 1),
      width: toValue(40, 20, state => Math.min(state.head.width.value - 50, 80)),
      height: toValue(40, 10, state => Math.min(40, state.mouth.width.value)),
      offsetY: toValue(120,
        state => state.nose.offsetY.value + state.nose.height.value / 2 + state.mouth.height.value / 2 + 10,
        state => state.head.height.value / 2 + state.head.chin.value / 1.5 - 10),
    },
    ears: {
      show: true,
      width: toValue(30, 20, 40),
      height: toValue(40, 35, 60),
      offsetY: toValue(60, 40, 80),
    },
    hair: {
      show: true,
      type: toValue(3, 0, 4),
      color: 'brown',
      hairLine: toValue(80, 60, 80),

    },
    shirt: {
      color1: '#ff0000',
      color2: '#fff',
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

      const entries = [].concat(...[clone.eyes, clone.nose, clone.mouth, clone.ears, clone.hair, clone.brows].map(e => Object.entries(e)));

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
