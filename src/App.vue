<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="openSideMenu"></v-app-bar-nav-icon>
      <span>就活ToDo</span>
      <v-spacer></v-spacer>
    </v-app-bar>
    <SideNav />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "@/components/SideNav";
export default {
  name: "App",

  components: {
    SideNav
  },

  data: () => ({
    //
  }),

  methods: {
    openSideMenu() {
      this.$store.dispatch("toggleSideMenu");
    }
  }
};
</script>
