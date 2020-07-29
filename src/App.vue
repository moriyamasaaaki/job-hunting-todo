<template>
  <v-app>
    <div v-show="$route.path !== '/'">
      <Header />
      <SideNav />
    </div>
    <v-content class="app">
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

  data: () => ({})
};
</script>

<style lang="scss">
</style>
