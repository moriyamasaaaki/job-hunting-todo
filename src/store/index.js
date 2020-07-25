import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    todos: [],
    profile: []
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
    },
    addTodo(state, { id, todo }) {
      todo.id = id;
      state.todos.push(todo);
    },
    updateTodo(state, { id, todo }) {
      const index = state.todos.findIndex(todo => {
        todo.id === id;
      });
      state.todos[index] = todo;
    },
    deleteTodo(state, { id }) {
      const index = state.todos.findIndex(todo => {
        todo.id === id;
      });
      state.todos.splice(index, 1);
    },
    addProfile(state, { profile }) {
      state.profile.push(profile);
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
    },
    addTodo({ getters, commit }, todo) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/todos`)
          .add(todo)
          .then(todo => {
            commit("addTodo", { id: todo.id, todo });
          });
      }
    },
    updateTodo({ getters, commit }, { id, todo }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/todos`)
          .doc(id)
          .update(todo)
          .then(() => {
            commit("updateTodo", { id, todo });
          });
      }
    },
    deleteTodo({ getters, commit }, { id }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/todos`)
          .doc(id)
          .delete()
          .then(() => {
            commit("deleteTodo", { id });
          });
      }
    },
    fetchTodos({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/todos`)
        .get()
        .then(todos => {
          todos.forEach(todo => {
            commit("addTodo", { id: todo.id, todo: todo.data() });
          });
        });
    },

    addProfile({ getters, commit }, profile) {
      if (getters.uid) {
        firebase
          .firestore()
          .doc(`profiles/${getters.uid}`)
          .set(profile)
          .then(profile => {
            commit("addProfile", { id: getters.id, profile });
          });
      }
    }
  },
  getters: {
    userName: state => (state.login_user ? state.login_user.displayName : ""),
    photoURL: state => (state.login_user ? state.login_user.photoURL : ""),
    uid: state => (state.login_user ? state.login_user.uid : null),
    getTodoId: state => id => state.todos.find(todo => todo.id === id)
  },
  modules: {}
});
