<template>
  <v-sheet>
    <v-navigation-drawer
      v-model="$store.state.toggleNav.drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img v-if="photoURL" :src="photoURL"></v-img>
          <v-img v-else src="/img/user-img.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ userName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <div v-for="item in items" :key="item.title">
        <router-link :to="item.link">
          <v-list dense>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon :color="item.color">{{ item.icon }}</v-icon>
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          title: "ToDoリスト",
          icon: "mdi-home",
          link: "/todos",
          color: "red"
        },
        {
          title: "プロフィール",
          icon: "mdi-account",
          link: "/profile",
          color: "blue-grey darken-2"
        },
        {
          title: "就活サイト一覧",
          icon: "mdi-web",
          link: "/site/list",
          color: "blue darken-2"
        }
      ]
    };
  },

  computed: {
    ...mapGetters(["userName", "photoURL"])
  }
};
</script>
