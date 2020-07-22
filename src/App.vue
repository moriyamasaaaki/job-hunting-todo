<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <router-link to="/">
        <span>就活ToDo</span>
      </router-link>
      <v-spacer></v-spacer>
      <div class="my-2">
        <div v-if="!$store.state.login_user">
          <v-btn @click="login">ログイン</v-btn>
        </div>
        <div v-else>
          <v-btn @click="logout">ログアウト</v-btn>
        </div>
      </div>
    </v-app-bar>
    <SideNav />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";
import SideNav from "@/components/SideNav";
export default {
  name: "App",

  components: {
    SideNav
  },

  data: () => ({
    //
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
    ...mapActions([
      "toggleSideMenu",
      "login",
      "setLoginUser",
      "logout",
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
