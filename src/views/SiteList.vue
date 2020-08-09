<template>
  <div class="site-list">
    <h1 class="site-list__title">就活サイト一覧</h1>
    <div class="site-list__panels">
      <strong class="site-list__panels-title">定番の就活サイト</strong>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in itemsOne" :key="i">
          <v-expansion-panel-header
            >{{ i + 1 }}： {{ item.title }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            {{ item.content }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="site-list__panels">
      <strong class="site-list__panels-title">特化型就活サイト</strong>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in itemsSecond" :key="i">
          <v-expansion-panel-header
            >{{ i + 1 }}： {{ item.title }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            {{ item.content }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    itemsOne: [
      { title: "マイナビ", content: "URL入力" },
      { title: "リクナビ", content: "URL入力" },
      { title: "キャリタス就活", content: "URL入力" },
      { title: "あさがくナビ", content: "URL入力" },
      { title: "アクセス就活", content: "URL入力" },
      { title: "ブンナビ", content: "URL入力" },
      { title: "合説ドットコム", content: "URL入力" }
    ],
    itemsSecond: [
      { title: "サポーターズ（地方就活生支援）", content: "URL入力" },
      { title: "外資就活ドットコム（外資系企業特化）", content: "URL入力" },
      { title: "CheerCareer（べンチャー企業特化）", content: "URL入力" },
      { title: "ツノル（中小企業特化）", content: "URL入力" },
      { title: "マスナビ（広告/Web/マスコミ企業特化）", content: "URL入力" },
      { title: "スポナビ（体育会系特化）", content: "URL入力" },
      { title: "アカリクWEB（大学院生特化）", content: "URL入力" },
      { title: "ナース専科就職ナビ（看護学部特化）", content: "URL入力" },
      { title: "ファーネット（薬学部特化）", content: "URL入力" },
      { title: "理系ナビ（理系学部特化）", content: "URL入力" },
      { title: "秋冬採用ナビ（秋冬就活特化）", content: "URL入力" }
    ]
  })
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
}
</style>
