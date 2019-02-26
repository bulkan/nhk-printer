<template>
  <div class="sheet">
    <div class="columns">
      <div class="col">
        <b>[02/22/2019] 日本の「はやぶさ２」がリュウグウという星に下りた</b>
        <article>
          <p>日本のＪＡＸＡは、地球から３億ｋｍの所にあるリュウグウという小さい星を調べるため、４年ぐらい前に「はやぶさ２」を打ち上げました。</p>
          <p>「はやぶさ２」は２１日の午後、高さ２万ｍの所からリュウグウに下り始めました。高さ５００ｍぐらいの所からは、センサーを使って高さや下りる場所を自分で計算しながら下りました。ＪＡＸＡは、「はやぶさ２」は２２日の午前７時半ごろリュウグウに着いたと発表しました。</p>
          <p>「はやぶさ２」は、リュウグウの表面に弾丸を発射して、細かくなった石や砂を取ります。ＪＡＸＡによると、弾丸を発射できたというデータが届きました。</p>
          <p>「はやぶさ２」はこれから高さ２万ｍの所まで戻ります。そのあと１回か２回リュウグウに下りて、来年１２月に地球に帰る予定です。</p>
        </article>
      </div>

      <div class="col">
        <b>[02/22/2019] 北海道で震度６弱の地震 「去年９月の地震と関係がある</b>

        <article>
          <p>２１日午後９時２２分ごろ、北海道の胆振地方でマグニチュード５．８の地震がありました。</p>
          <p>北海道厚真町では震度６弱の大きな揺れがありました。震度５強は安平町とむかわ町、震度５弱は札幌市の北区と手稲区、千歳市、長沼町、平取町でした。津波はありませんでした。この地震で大きなけがをした人はいませんでした。</p>
          <p>胆振地方では去年９月６日にもマグニチュード６．７の地震があって、厚真町で震度７の揺れがありました。</p>
          <p>気象庁は「２１日の地震は去年９月の地震と関係があると考えています。大きく揺れた場所では家が壊れたり山などが崩れたりする心配があります。これからも同じぐらい揺れる地震があるかもしれないため、気をつけてください」と言っています。</p>
        </article>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>

.sheet {
  margin: 0;
}

.columns {
  display: flex;
  justify-content: center;
  margin: 10px;

  .col {
    padding: 10px;
    width: 30%;
    min-height: 90vh;
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
      height: 200mm;
      width: 90mm;
      border: 1px dashed #dfdfdf;
    }
  }
}
</style>