<template>
  <div class="contents-container">
    <p class="title">NEWS</p>
    <p class="translation">ニュース</p>
    <div class="lists">
      <div
        class="news-list"
        v-for="(list, index) in lists"
        :key="`list-${index}`"
        @mouseover="
          (hoverThumbnail = list), (escapeThumbnail = ''), (hoverTitle = list)
        "
        @mouseout="
          (hoverThumbnail = ''), (escapeThumbnail = list), (hoverTitle = '')
        "
      >
        <div class="image">
          <div
            class="inner"
            :key="thumbnail"
            :class="{
              target: hoverThumbnail === list,
              escape: escapeThumbnail === list,
            }"
          >
            <img
              src="../../src/assets/images/target.png"
              alt="icon"
              class="no"
              :class="{
                icon: hoverThumbnail === list,
              }"
            />
          </div>

          <img
            v-for="thumbnail in list.thumbnails"
            :key="thumbnail"
            :src="thumbnail"
            alt="thumbnail"
            class="thumbnail"
          />
        </div>
        <img
          v-for="genre in list.genres"
          :key="genre"
          :src="genre"
          alt="genre"
          class="genre"
        />
        <p
          class="title"
          v-for="title in list.titles"
          :key="title"
          :class="{ hover: hoverTitle === list }"
        >
          {{ title }}
        </p>
        <p class="time" v-for="time in list.times" :key="time">
          {{ time }}
        </p>
      </div>
    </div>
    <div
      class="btn"
      :key="btn"
      :class="{ hoverLine: hoverBtn === btn }"
      @mouseover="hoverBtn = btn"
      @mouseout="hoverBtn = ''"
    >
      VIEW MORE
    </div>
  </div>
</template>
<script>
export default {
  name: "calendar",
  data: function() {
    return {
      hoverThumbnail: "",
      escapeThumbnail: "",
      hoverIcon: "",
      escapeIcon: "",
      hoverBtn: "",
      hoverTitle: "",
      thumbnail: false,
      btn: false,
      title: false,
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
      boxs: [
        { banners: [require("@/assets/images/link1.png")] },
        { banners: [require("@/assets/images/link2.png")] },
      ],
      twitters: [
        {
          icons: [require("@/assets/images/twitter-icon.png")],
          titles: ["BanG Dream!（バンドリ！）公式"],
          links: ["@bang_dream_info"],
        },
        {
          icons: [require("@/assets/images/app-icon.png")],
          titles: ["バンドリ！ ガールズバンドパーティ！"],
          links: ["@bang_dream_gbp"],
        },
      ],
    };
  },
  methods: {},
};
</script>
