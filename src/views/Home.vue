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
      autoplay
      loop
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
              :key="thumbnail"
              :class="{
                target: hoverThumbnail === list,
                escape: escapeThumbnail === list,
              }"
            >
              <img
                src="../../src/assets/images/target.png"
                alt="icon"
                class="icon"
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
          <p class="time" v-for="time in list.times" :key="time">{{ time }}</p>
        </div>
      </div>
      <div class="btn">VIEW MORE</div>
    </div>

    <v-calendar type="week">
      <template slot="day-content" slot-scope="props">
        <div class="cell-header">
          {{ props.day.day }}
        </div>
        <div class="cell-content">
          <template
            v-if="
              dateList.some(
                (date) => date.ymd === dateToYYYYMMDD(props.day.date)
              )
            "
          >
            <div
              class="cell-content-line"
              v-for="content in getContentFromKey(
                dateToYYYYMMDD(props.day.date)
              )"
              v-bind:key="content"
            >
              ・{{ content }}
            </div>
          </template>
        </div>

        <div class="cell-content2">
          <template
            v-if="
              dateList2.some(
                (date) => date.ymd === dateToYYYYMMDD2(props.day.date)
              )
            "
          >
            <div
              class="cell-content-line2"
              v-for="content2 in getContentFromKey2(
                dateToYYYYMMDD2(props.day.date)
              )"
              v-bind:key="content2"
            >
              ・{{ content2 }}
            </div>
          </template>
        </div>
      </template>
    </v-calendar>
  </div>
</template>
<script>
export default {
  name: "calendar",
  data: function() {
    return {
      hoverMain: "",
      hoverThumbnail: "",
      escapeThumbnail: "",
      hoverTitle: "",
      main: false,
      thumbnail: false,
      dateList: [
        {
          ymd: "20200809",
          contents: [
            "🎫【申込開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS 一般販売",
            "📻《21:00》【第46回】Afterglowの夕焼けSTUDIO",
            "🎧《21:00》「A&G TRIBAL RADIO エジソン」RASメンバー出演",
          ],
        },
        {
          ymd: "20200810",
          contents: [
            "🎫【申込開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS 一般販売",
            "📻《21:00》【第46回】Afterglowの夕焼けSTUDIO",
            "🎧《21:00》「A&G TRIBAL RADIO エジソン」RASメンバー出演",
          ],
        },
        {
          ymd: "20200811",
          contents: [
            "🎫【申込開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS 一般販売",
            "📻《21:00》【第46回】Afterglowの夕焼けSTUDIO",
            "🎧《21:00》「A&G TRIBAL RADIO エジソン」RASメンバー出演",
          ],
        },
        {
          ymd: "20200812",
          contents: [
            "🎫【申込開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS 一般販売",
            "📻《21:00》【第46回】Afterglowの夕焼けSTUDIO",
            "🎧《21:00》「A&G TRIBAL RADIO エジソン」RASメンバー出演",
          ],
        },
        {
          ymd: "20200813",
          contents: [
            "🎫【申込開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS 一般販売",
            "📻《21:00》【第46回】Afterglowの夕焼けSTUDIO",
            "🎧《21:00》「A&G TRIBAL RADIO エジソン」RASメンバー出演",
          ],
        },
        {
          ymd: "20200814",
          contents: [
            "🎫【申込開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS 一般販売",
            "📻《21:00》【第46回】Afterglowの夕焼けSTUDIO",
            "🎧《21:00》「A&G TRIBAL RADIO エジソン」RASメンバー出演",
          ],
        },
        {
          ymd: "20200815",
          contents: [
            "🎫【申込開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS 一般販売",
            "📻《21:00》【第46回】Afterglowの夕焼けSTUDIO",
            "🎧《21:00》「A&G TRIBAL RADIO エジソン」RASメンバー出演",
          ],
        },
      ],
      dateList2: [
        {
          ymd: "20200801",
          contents: [
            "🎫【申込開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS 一般販売",
            "📻《21:00》【第46回】Afterglowの夕焼けSTUDIO",
            "🎧《21:00》「A&G TRIBAL RADIO エジソン」RASメンバー出演",
          ],
        },
      ],
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
  methods: {
    dateToYYYYMMDD: function(date) {
      let y = date.getFullYear();
      let m = ("00" + (date.getMonth() + 1)).slice(-2);
      let d = ("00" + date.getDate()).slice(-2);
      let result = y + "" + m + "" + d;
      return result;
    },
    getContentFromKey: function(key) {
      const target = this.dateList.find((date) => {
        return date.ymd === key;
      });
      return target.contents;
    },
    dateToYYYYMMDD2: function(date) {
      let y = date.getFullYear();
      let m = ("00" + (date.getMonth() + 1)).slice(-2);
      let d = ("00" + date.getDate()).slice(-2);
      let result = y + "" + m + "" + d;
      return result;
    },
    getContentFromKey2: function(key) {
      const target = this.dateList2.find((date) => {
        return date.ymd === key;
      });
      return target.contents;
    },
  },
};
</script>
