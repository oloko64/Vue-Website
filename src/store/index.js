import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowSize: { x: 0, y: 0 },
  },
  mutations: {
    updateWindowSize(state, data) {
      state.windowSize = data;
    },
  },
  getters: {
    windowsSizeStore: ({ windowSize }) => windowSize,
  },
  actions: {
    updateWindowSize: (context, payload) => {
      context.commit('updateWindowSize', payload);
    },
  },
  modules: {},
});
