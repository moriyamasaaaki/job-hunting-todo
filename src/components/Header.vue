<template>
  <v-app-bar class="header" app color="primary" dark>
    <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
    <router-link to="/">
      <span class="header__title">就活ToDo</span>
    </router-link>
    <v-spacer></v-spacer>
    <div class="my-2">
      <div v-if="$store.state.todo.login_user">
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
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.snackbar = true;
          setTimeout(() => {
            this.$router.push("/");
          }, 1200);
        });
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
.header {
  &__title {
    color: #fff;
  }
}
</style>
