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
    logoutUser(state) {
      state.login_user = null;
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    logoutUser({ commit }) {
      commit("logoutUser");
    },
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    login() {
      const google_auth = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth);
    },
    logout() {
      firebase.auth().signOut();
    }
  },
  modules: {}
});
