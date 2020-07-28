<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
    <router-link to="/">
      <span>就活ToDo</span>
    </router-link>
    <v-spacer></v-spacer>
    <div class="my-2">
      <div v-if="!$store.state.todo.login_user">
        <v-btn @click="login">ログイン</v-btn>
      </div>
      <div v-else>
        <v-btn @click="logout">ログアウト</v-btn>
      </div>
    </div>
      <v-snackbar v-model="snackbar">{{ text }}</v-snackbar>
  </v-app-bar>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";
export default {

  data: () => ({
    snackbar: false,
    text: "ログアウトしました。"
  }),

  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
        this.fetchTodos();
      } else {
        this.logoutUser();
      }
    });
  },

  methods: {
    login() {
      const google_auth = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth);
    },
    logout() {
      firebase.auth().signOut();
      this.snackbar = true;
    },
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "logoutUser",
      "fetchTodos"
    ])
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
span {
  color: #fff;
}
</style>
