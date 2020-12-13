import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [],
  },
  mutations: {
    appendCard(state, card) {
      state.cards.push(card);
    },
  },
  actions: {
    createCard({ commit }, card) {
      commit("appendCard", card);
    },
  },
  modules: {},
});
