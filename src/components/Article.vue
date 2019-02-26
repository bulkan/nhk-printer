<template>
  <article>
  </article>
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


<style scoped>
article {
  font-size: 18px;
}

@media print {
  article {
    font-size: 10px;
  }
}
</style>
