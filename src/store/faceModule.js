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
    id: 0,
    head: {
      show: true,
      type: toValue(1, 1, 1),
      height: toValue(230, 220, 240),
      width: toValue(180, 170, 180),
      topCurve: toValue(50, 40, 80),
      chinWidth: toValue(160, 140,
        state => state.head.width.value - 20),
      chinHeight: toValue(70, 50, 70),
      chinCurve: toValue(30, 20, 50),
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
      offsetY: toValue(30, 30, 50),
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
      offsetY: toValue(60, 50,
        state => 100 - state.nose.height.value),
    },
    mouth: {
      show: true,
      type: toValue(0, 0, 2),
      width: toValue(40, 20, 60),
      height: toValue(40, 10, state => Math.min(25, state.mouth.width.value)),
      upperLip: toValue(0, 0, 8),
      offsetY: toValue(120,
        state => Math.max(100, state.nose.offsetY.value + state.nose.height.value + state.mouth.height.value / 2 + 10),
        state => Math.max(state.mouth.offsetY.min(state) + 5, state.head.height.value / 3 * 2 - state.mouth.height.value / 2 - 15)),
    },
    ears: {
      show: true,
      width: toValue(30, 25, 40),
      height: toValue(40, 35, 60),
      offsetY: toValue(10,
        state => state.eyes.offsetY.value, 70),
    },
    hair: {
      show: true,
      type: toValue(3, 0, 8),
      color: 'brown',
      hairLine: toValue(70, 60, 70),

    },
    shirt: {
      color1: '#ff0000',
      color2: '#fff',
    },
    customPath1: '',
    customPath2: '',
    help: {
      grid: false,
    },
  },
  mutations: {
    id(state, id) {
      state.id = id;
    },
    hairColor(state, value) {
      state.hair.color = value;
    },
    skinColor(state, value) {
      state.head.color = value;
    },
  },
  actions: {
    generate({ commit, state }, id) {
      commit('id', id);
      const randomizer = new Randomizer(id);
      const clone = Object.assign({}, state);
      const entries = [].concat(...[clone.head, clone.eyes, clone.nose, clone.mouth, clone.ears, clone.hair, clone.brows].map(e => Object.entries(e)));

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
      const hairColors = ['#701919', '#262222', '#cE9F30', '#C36D20', '#222', '#a22', '#a44', '#44a', '#  a4a', '#CB0D05', '#CB9905', '#C8B8D1'];

      commit('skinColor', skinColors[randomizer.next(0, skinColors.length - 1)]);
      commit('hairColor', hairColors[randomizer.next(0, hairColors.length - 1)]);
    },
  },
};
