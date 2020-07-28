import Vue from "vue";
import Vuex from "vuex";
import toggleNav from "@/store/toggleNav";
import todo from "@/store/todo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    toggleNav,
    todo
  }
});
