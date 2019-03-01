<template>
  <div class="nhkArticle">
    <div>
      <input placeholder="Article Id" />
      <button>Scrape</button>
    <div>

    <article>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    articleId: String
  },

  mounted() {

  }
}
</script>


<style lang="scss" scoped>
.nhkArticle {
  article {
    font-size: 18px;
    padding: 10px;
    width: 30%;
    min-height: 90vh;
    border: 1px solid #cacaca;
  }
}

@media print {
  .nhkArticle {
    .article {
      font-size: 10px;
    }
  }
}
</style>
