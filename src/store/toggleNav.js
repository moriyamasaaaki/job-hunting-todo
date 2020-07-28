const state = {
  drawer: false
};

const mutations = {
  toggleSideMenu(state) {
    state.drawer = !state.drawer;
  }
};

const actions = {
  toggleSideMenu({ commit }) {
    commit("toggleSideMenu");
  }
};

export default {
  state,
  mutations,
  actions
};
