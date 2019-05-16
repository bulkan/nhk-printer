<template>
  <div class="nhkArticle">
    <div>
      <input placeholder="Article Id" v-model="articleId"/>
      <button :disabled="hasArticleId" @click="scrape()">Scrape</button>
    </div>

    <div>
      <h1>{{title}}</h1>
      <div class="article" v-html="body"></div>
    </div>
  </div>
</template>

<script>
import scraper from '@/scraper';
import copy from 'copy-to-clipboard';

export default {
  data() {
    return {
      body: '',
      title: '',
      articleId: 'k10011828051000'
    }
  },

  computed: {
    hasArticleId() { 
      return this.articleId && this.articleId.length == 0;
    }
  },

  methods: {
    scrape() {
      scraper(this.articleId)
        .then(article => {
          this.title = article.title;
          this.body = article.article.replace(/\n/g, '<br>');
          copy(`${article.title}\n${article.article}`);
        });
    }
  }
}
</script>


<style lang="scss" scoped>
.nhkArticle {
  .article {
    font-size: 18px;
    padding: 10px;
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
