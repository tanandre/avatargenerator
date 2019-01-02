import Randomizer from '@/util/Randomizer';

import face from './faceAttributes';

export default {
  state: face,
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
      const hairColors = ['#701919', '#262222', '#cE9F30', '#C36D20', '#222', '#a22', '#CB0D05', '#CB9905', '#C8B8D1'];

      commit('skinColor', skinColors[randomizer.next(0, skinColors.length - 1)]);
      commit('hairColor', hairColors[randomizer.next(0, hairColors.length - 1)]);
    },
  },
};
