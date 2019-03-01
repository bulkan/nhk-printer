<template>
  <div class="sheet">
    <div class="columns">
      <div class="col">
        <b>[02/27/2019] 高さ５４ｍまではしごが伸びる消防車</b>

        <article>
          <p>高い建物で火事があったとき、はしごを長く伸ばして、火を消すことができる消防車があります。</p>
          <p>日本の消防車でいちばん長いはしごは、高さ５４ｍまで伸びます。この消防車を愛知県豊橋市でも使うことになりました。</p>
          <p>２５日、市役所の前で子どもたちに新しい消防車を見せました。はしごは市役所の１３階、高さ４７ｍまで伸びました。</p>
          <p>この消防車は１８階建てのマンションの火事にも使うことができます。水を出すホースは車の中から動かすことができます。</p>
        </article>
      </div>

      <div class="col">
        <b>[02/26/2019] いちばん売れた音楽 外国のアーティストは「クイーン</b>

        <article>
          <p>日本レコード協会は毎年、日本で活躍した歌手やバンドなどのアーティストに賞を贈っています。「アーティスト・オブ・ザ・イヤー」は、ＣＤと音楽ビデオ、インターネットで曲を聞くサービスなどの売り上げが１年でいちばん多かったアーティストに贈る賞です。</p>
          <p>外国のアーティストでは、イギリスのロックバンド「クイーン」がこの賞をもらいました。去年１１月、クイーンについての映画が日本でも始まって、とても人気になりました。この映画の音楽が入ったＣＤやクイーンのアルバムがたくさん売れています。</p>
          <p>ギターのブライアン・メイさんは「日本の皆さんを愛しています。また近いうちに会いましょう」と話しています。</p>
          <p>日本のアーティストでは、去年９月に歌手をやめた安室奈美恵さんがもらいました。安室さんは２年続けてこの賞をもらいました。         </p>
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