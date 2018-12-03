import Vue from 'vue';
import Vuex from 'vuex';

import frameModule from './store/frameModule';
import faceModule from './store/faceModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // head: headModule,
    frame: frameModule,
    face: faceModule,
  },
  state: {

  },
  mutations: {
  },
  actions: {

  },
});
