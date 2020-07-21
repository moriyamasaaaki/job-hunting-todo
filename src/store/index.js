import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
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
