<template>
  <div class="articles">
    <div class="sheet">
      <div class="columns">
        <div class="col">
          <nhk-article></nhk-article>
        </div>

        <!-- <div class="col">
          <nhk-article></nhk-article>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import NHKArticle from "./NHKArticle";

export default {
  components: {
    'nhk-article': NHKArticle
  }
};
</script>


<style lang="scss" scoped>

.articles {
  .sheet {
    margin: 0;
  }

  .columns {
    display: flex;
    justify-content: center;
    margin: 10px;

    .col {
      padding: 10px;
      // width: 30%;
      min-height: 100vh;
      border: 1px solid #cacaca;

      &:first-child {
        margin-right: 5%;
      }
    }
  }

  @media print {
    .sheet {
      margin: 5mm auto;
    }

    .columns {
      .col {
        min-height: auto;
        // height: 200mm;
        // width: 90mm;
        border: 1px dashed #dfdfdf;
      }
    }
  }
}
</style>
