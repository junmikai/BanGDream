<template>
  <div class="main-container">
    <img
      alt="main"
      :key="main"
      src="../../src/assets/images/Las.png"
      :class="{ hoverOpacity: hoverMain === main }"
      @mouseover="hoverMain = main"
      @mouseout="hoverMain = ''"
    />
    <carousel
      autoplay="true"
      loop="true"
      :per-page="1"
      navigation-prev-label="〈"
      navigation-next-label="〉"
      :speed="1000"
      :autoplayTimeout="4000"
    >
      <slide>
        <img src="../../src/assets/images/banner1.png" alt="スライド1" />
        <img src="../../src/assets/images/banner2.png" alt="スライド2" />
      </slide>
      <slide>
        <img src="../../src/assets/images/banner2.png" alt="スライド2" />
        <img src="../../src/assets/images/banner3.png" alt="スライド3" />
      </slide>
      <slide>
        <img src="../../src/assets/images/banner3.png" alt="スライド3" />
        <img src="../../src/assets/images/banner4.png" alt="スライド4" />
      </slide>
      <slide>
        <img src="../../src/assets/images/banner4.png" alt="スライド4" />
        <img src="../../src/assets/images/banner5.png" alt="スライド5" />
      </slide>
      <slide>
        <img src="../../src/assets/images/banner5.png" alt="スライド5" />
        <img src="../../src/assets/images/banner6.png" alt="スライド6" />
      </slide>
      <slide>
        <img src="../../src/assets/images/banner6.png" alt="スライド6" />
        <img src="../../src/assets/images/banner1.png" alt="スライド1" />
      </slide>
    </carousel>
    <div class="news-container">
      <p class="title">NEWS</p>
      <p class="translation">ニュース</p>
      <div class="lists">
        <div
          class="news-list"
          v-for="list in lists"
          :key="list"
          @mouseover="hoverThumbnail = thumbnail ,escapeThumbnail = '' "
          @mouseout="hoverThumbnail = '' , escapeThumbnail = thumbnail"
        >
          <div class="image">
            <div
              :key="thumbnail"
              :class="{
                  target: hoverThumbnail === thumbnail,
                  escape: escapeThumbnail === thumbnail
                  }"
            >
              <img src="../../src/assets/images/target.png" alt="icon" class="icon" />
            </div>

            <img
              v-for="thumbnail in list.thumbnails"
              :key="thumbnail"
              :src="thumbnail"
              alt="thumbnail"
              class="thumbnail"
            />
          </div>
          <img v-for="genre in list.genres" :key="genre" :src="genre" alt="genre" class="genre" />
          <p class="title" v-for="title in list.titles" :key="title">{{title}}</p>
          <p class="time" v-for="time in list.times" :key="time">{{time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data: function () {
    return {
      hoverMain: "",
      hoverThumbnail: "",
      escapeThumbnail: "",
      lists: [
        {
          thumbnails: [require("@/assets/images/news1.png")],
          genres: [require("@/assets/images/info.png")],
          titles: ["【重要なお知らせ】2020年開催公演についてのご案内"],
          times: ["2020.06.30[Tue]"],
        },
        {
          thumbnails: [require("@/assets/images/news2.png")],
          genres: [require("@/assets/images/goods.png")],
          titles: [
            "BanG Dream! 8th☆LIVE「Breakthrough!」のグッズ情報第１弾を公開！",
          ],
          times: ["2020.08.06[Thu]"],
        },
        {
          thumbnails: [require("@/assets/images/news3.png")],
          genres: [require("@/assets/images/goods.png")],
          titles: ["Morfonica 1st Live「Cantabile」のグッズ情報第１弾を公開！"],
          times: ["2020.08.06[Thu]"],
        },
        {
          thumbnails: [require("@/assets/images/news4.png")],
          genres: [require("@/assets/images/info.png")],
          titles: ["「バンドリ！TV LIVE 2020」第28回放送のお知らせ"],
          times: ["2020.08.06[Thu]"],
        },
        {
          thumbnails: [require("@/assets/images/news5.png")],
          genres: [require("@/assets/images/info.png")],
          titles: [
            "「ハウスウェルネスフーズ×BanG Dream! 8th☆LIVEキャンペーン」開催！ ",
          ],
          times: ["2020.07.31[Fri]"],
        },
        {
          thumbnails: [require("@/assets/images/no-image.png")],
          genres: [require("@/assets/images/info.png")],
          titles: [
            "Afterglow×Pastel＊Palettes×ハロー、ハッピーワールド！6th Single 発売記念スペシャルトークイベント開催中止のお知らせ",
          ],
          times: ["2020.07.31[Fri]"],
        },
        {
          thumbnails: [require("@/assets/images/no-image.png")],
          genres: [require("@/assets/images/info.png")],
          titles: [
            "『Roselia 10th Single「約束」発売記念トークイベント』、『RAISE A SUILEN 4th Single「DRIVE US CRAZY」発売記念トーク&ミニライブ』開催中止のお知らせ",
          ],
          times: ["2020.07.31[Fri]"],
        },
        {
          thumbnails: [require("@/assets/images/news6.png")],
          genres: [require("@/assets/images/info.png")],
          titles: ["ガルパと赤い羽根共同募金のコラボレーション第3弾が決定！"],
          times: ["2020.07.30[Thu]"],
        },
      ],
    };
  },
};
</script>

