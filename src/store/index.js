import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    login() {
      const google_auth = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth);
    }
  },
  modules: {}
});
