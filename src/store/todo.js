import firebase from "firebase";

const state = {
  login_user: null,
  todos: []
};

const mutations = {
  setLoginUser(state, user) {
    state.login_user = user;
  },
  logoutUser(state) {
    state.login_user = null;
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
  }
};

const actions = {
  setLoginUser({ commit }, user) {
    commit("setLoginUser", user);
  },
  logoutUser({ commit }) {
    commit("logoutUser");
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
      .orderBy("updatedAt", "desc")
      .get()
      .then(todos => {
        todos.forEach(todo => {
          commit("addTodo", { id: todo.id, todo: todo.data() });
        });
      });
  }
};

const getters = {
  userName: state => (state.login_user ? state.login_user.displayName : ""),
  photoURL: state => (state.login_user ? state.login_user.photoURL : ""),
  uid: state => (state.login_user ? state.login_user.uid : null),
  getTodoId: state => id => state.todos.find(todo => todo.id === id)
};

export default {
  state,
  mutations,
  actions,
  getters
};
