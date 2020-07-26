<template>
  <v-app>
    <Header />
    <SideNav />
    <v-snackbar v-model="snackbar">{{ text }}</v-snackbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";
export default {
  name: "App",

  components: {
    SideNav,
    Header
  },

  data: () => ({
    snackbar: false,
    text: "ログアウトしました。"
  }),

  methods: {}
};
</script>
