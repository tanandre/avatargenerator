import Vue from 'vue';
import Vuex from 'vuex';

import frameModule from './store/frameModule';

import { createFace, generate } from './js/FaceGenerator';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    frame: frameModule,
  },
  state: {
    id: 0,
    customPath1: '',
    customPath2: '',
    help: {
      grid: false,
    },
    face: createFace(),
  },
  mutations: {
    id(state, id) {
      state.id = id;
    },
    face(state, face) {
      state.face = face;
    },
  },
  actions: {
    generate({ commit }, id) {
      commit('id', id);
      commit('face', generate(id));
    },

  },
});
