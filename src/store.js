import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBooted: false,
    user: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    SET_BOOTED(state) {
      state.isBooted = true;
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user.uid;
    }
  },
  actions: {
    async boot({ commit, dispatch }) {
      // 1. wait until we get a user response from firebase
      const user = await dispatch('fetchUser');

      // 2. set that user in the state
      commit('SET_USER', user || {});

      // 3. mark the app as booted
      commit('SET_BOOTED');
    },
    fetchUser() {
      return new Promise((resolve) => {
        firebase.auth().onAuthStateChanged(user => resolve(user));
      });
    }
  }
});
