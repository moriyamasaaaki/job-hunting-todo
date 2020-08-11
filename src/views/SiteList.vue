<template>
  <div class="site-list">
    <h1 class="site-list__title">就活サイト一覧</h1>
    <div class="site-list__panels">
      <strong class="site-list__panels-title">定番の就活サイト</strong>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in jobsOne" :key="i">
          <v-expansion-panel-header
            >{{ i + 1 }}： {{ item.title }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <a :href="item.url">{{ item.url }}</a>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="site-list__panels">
      <strong class="site-list__panels-title">特化型就活サイト</strong>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in jobsSecond" :key="i">
          <v-expansion-panel-header
            >{{ i + 1 }}： {{ item.title }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <a :href="item.url">{{ item.url }}</a>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    jobsOne: [],
    jobsSecond: []
  }),
  methods: {
    getSiteOne() {
      firebase
        .firestore()
        .collection("jobsOne")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let data = {
              id: doc.id,
              title: doc.data().title,
              url: doc.data().url
            };
            this.jobsOne.push(data);
          });
        });
    },
    getSiteSecond() {
      firebase
        .firestore()
        .collection("jobsSecond")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let data = {
              id: doc.id,
              title: doc.data().title,
              url: doc.data().url
            };
            this.jobsSecond.push(data);
          });
        });
    }
  },
  created() {
    this.getSiteOne();
    this.getSiteSecond();
  }
};
</script>

<style lang="scss" scoped>
.site-list {
  max-width: 1000px;
  margin: 32px auto;
  padding: 0 8px;
  &__title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 32px;
  }
  &__panels {
    margin-bottom: 40px;
  }
  &__panels-title {
    display: block;
    margin-bottom: 8px;
  }
  a {
    letter-spacing: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 15px;
  }
}
</style>
