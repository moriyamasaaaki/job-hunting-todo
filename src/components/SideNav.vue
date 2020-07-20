<template>
  <v-sheet>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/img/user-img.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>守屋 雅章</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <div v-for="item in items" :key="item.title">
        <router-link :to="item.link">
          <v-list dense>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </router-link>
      </div>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "ToDoリスト", icon: "mdi-home", link: "/" },
        { title: "プロフィール", icon: "mdi-account", link: "/profile" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
