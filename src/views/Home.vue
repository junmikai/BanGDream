<template>
  <div class="main-container">
    <!-- トップ画像 -->
    <img
      alt="main"
      :key="main"
      src="../../src/assets/images/Las.png"
      :class="{ hoverOpacity: hoverMain === main }"
      @mouseover="hoverMain = main"
      @mouseout="hoverMain = ''"
    />
    <!-- カルーセル-->
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
    <!-- ニュース-->
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

    <div class="contents-container -pa1_5 -back">
      <p class="title">SCHEDULE</p>
      <p class="translation">スケジュール</p>
      <p class="month">2020年8月</p>
      <!-- カレンダー-->
      <v-calendar>
        <template slot="day-content" slot-scope="props">
          <div class="cell-header">
            {{ props.day.day }}
          </div>
          <div class="cell-content">
            <template
              v-if="
                liveList.some((date) => date.ymd === liveDate(props.day.date))
              "
            >
              <div
                class="cell-content-line -live"
                v-for="content in getLiveFromKey(liveDate(props.day.date))"
                v-bind:key="content"
              >
                {{ content }}
              </div>
            </template>
          </div>

          <div class="cell-content">
            <template
              v-if="
                ticketList.some(
                  (date) => date.ymd === ticketDate(props.day.date)
                )
              "
            >
              <div
                class="cell-content-line -ticket"
                v-for="content in getTicketFromKey(ticketDate(props.day.date))"
                v-bind:key="content"
              >
                {{ content }}
              </div>
            </template>
          </div>
        </template>
      </v-calendar>
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

    <div class="banner-container">
      <div
        class="box"
        v-for="(box, index) in boxs"
        :key="`box-${index}`"
        @mouseover="hoverBox = box"
        @mouseout="hoverBox = ''"
      >
        <img
          class="image"
          v-for="(banner, index) in box.banners"
          :key="`banner-${index}`"
          :src="banner"
          alt="banner"
        />
        <div :class="{ hoverRed: hoverBox === box }"></div>
      </div>
    </div>

    <div class="footer-container">
      <div class="black">
        <div class="flex -title">
          <img
            src="../../src/assets/images/star-white.png"
            alt="star"
            class="star"
          />
          <p>Official Twitter</p>
          <img
            src="../../src/assets/images/star-white.png"
            alt="star"
            class="star"
          />
        </div>

        <div class="footer-sns">
          <div
            class="rectangle"
            v-for="(twitter, index) in twitters"
            :key="`twitter-${index}`"
            @mouseover="hoverTwitter = twitter"
            @mouseout="hoverTwitter = ''"
            :class="{ hoverWhite: hoverTwitter === twitter }"
          >
            <div class="area -w120">
              <img
                v-for="(icon, index) in twitter.icons"
                :key="`icon-${index}`"
                :src="icon"
                alt="icon"
                class="icon"
                :class="{ hoverOpacity: hoverTwitter === twitter }"
              />
            </div>
            <div class="area" :class="{ hoverFont: hoverTwitter === twitter }">
              <p
                class="title"
                v-for="(title, index) in twitter.titles"
                :key="`title-${index}`"
              >
                {{ title }}
              </p>
              <a
                class="link"
                v-for="(link, index) in twitter.links"
                :key="`link-${index}`"
                >@bang_dream_info</a
              >
            </div>
          </div>
        </div>

        <div class="flex -share">
          <p class="share">SHARE</p>
          <img
            v-for="(circle, index) in circles"
            :key="`circle-${index}`"
            :src="circle"
            alt="circle"
            class="circle"
            @mouseover="hoverCircle = circle"
            @mouseout="hoverCircle = ''"
            :class="{ hoverOpacity: hoverCircle === circle }"
          />
        </div>

        <img
          :src="logo"
          alt="logo"
          class="logo"
          @mouseover="logo = hoverLogo"
          @mouseout="logo = hoverLogoOut"
        />
        <div class="flex">
          <img
            v-for="(bushiroad, index) in bushiroads"
            :key="`bushiroad-${index}`"
            :src="bushiroad"
            alt="bushiroad"
            class="bushiroad"
            @mouseover="hoverBushiroad = bushiroad"
            @mouseout="hoverBushiroad = ''"
            :class="{ hoverOpacity: hoverBushiroad === bushiroad }"
          />
        </div>

        <div class="flex -share">
          <p
            class="lang"
            v-for="(lang, index) in langs"
            :key="`lang-${index}`"
            @mouseover="hoverLang = lang"
            @mouseout="hoverLang = ''"
            :class="{ hoverFont: hoverLang === lang }"
          >
            {{ lang }}
          </p>
        </div>
        <p class="terms">
          掲載の記事・写真・イラスト等のすべてのコンテンツの無断複写・転載を禁じます。©BanG
          Dream! Project ©Craft Egg Inc. ©bushiroad All Rights Reserved.
        </p>
      </div>
    </div>
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
      hoverBtn: "",
      hoverTitle: "",
      hoverBox: "",
      hoverTwitter: "",
      hoverCircle: "",
      hoverBushiroad: "",
      hoverLang: "",
      main: false,
      thumbnail: false,
      btn: false,
      box: false,
      red: false,
      twitter: false,
      circle: false,
      bushiroad: false,
      lang: false,
      logo: require("@/assets/images/footer-logo-white.png"),
      hoverLogo: require("@/assets/images/footer-logo.png"),
      hoverLogoOut: require("@/assets/images/footer-logo-white.png"),
      liveList: [
        {
          ymd: "20200803",
          contents: ["📻《21:00》【第46回】Afterglowの夕焼けSTUDIO"],
        },
        {
          ymd: "20200809",
          contents: [
            "📻《21:00》【第46回】Afterglowの夕焼けSTUDIO",
            "🎧《21:00》「A&G TRIBAL RADIO エジソン」RASメンバー出演",
          ],
        },
        {
          ymd: "20200811",
          contents: [
            "📻【第197回】バンドリ！ポッピンラジオ！",
            "📻《20:30》【第7回】モニカラジオ（ニッポン放送版）",
          ],
        },
        {
          ymd: "20200812",
          contents: [
            "📺《19:00》【第7回】モニカラジオ（ニッポン放送版/動画アーカイブ放送）",
            "📺《19:30》MORFONICAL #9",
            "🎪《21:00》【第38回】＠ハロハピCiRCLE放送局",
          ],
        },
        {
          ymd: "20200813",
          contents: ["📻【第143回】RoseliaのRADIO SHOUT!"],
        },
        {
          ymd: "20200814",
          contents: [
            "📻【第82回】RAISE A SUILENのRADIO R･I･O･T",
            "📺《22:00》バンドリ！TV LIVE #29",
          ],
        },
        {
          ymd: "20200815",
          contents: ["📺《21:00》Pastel＊PalettesのしゅわりんTV #10"],
        },
        {
          ymd: "20200830",
          contents: ["📺《21:00》Pastel＊PalettesのしゅわりんTV #10"],
        },
      ],
      ticketList: [
        {
          ymd: "20200809",
          contents: [
            "🎫【申込開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS 一般販売",
          ],
        },
        {
          ymd: "20200810",
          contents: [
            "🎫【受付開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS リセールチケット出品",
          ],
        },
        {
          ymd: "20200813",
          contents: [
            "🎫【販売開始】「BanG Dream! 8th☆LIVE」夏の野外3DAYS リセールチケット販売",
          ],
        },
        {
          ymd: "20200815",
          contents: ["🎤「BanG Dream! 8th☆LIVE」夏の野外3DAYS"],
        },
        {
          ymd: "20200820",
          contents: ["🎤「BanG Dream! 8th☆LIVE」夏の野外3DAYS"],
        },
        {
          ymd: "20200826",
          contents: ["🎤「BanG Dream! 8th☆LIVE」夏の野外3DAYS"],
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
      circles: [
        require("@/assets/images/twitter-circle.png"),
        require("@/assets/images/facebook-circle.png"),
        require("@/assets/images/line-circle.png"),
      ],
      bushiroads: [
        require("@/assets/images/logo-bushiroad.png"),
        require("@/assets/images/logo-bushiroad-music.png"),
      ],
      langs: ["JP", "EN"],
    };
  },
  methods: {
    liveDate: function(date) {
      let y = date.getFullYear();
      let m = ("00" + (date.getMonth() + 1)).slice(-2);
      let d = ("00" + date.getDate()).slice(-2);
      let result = y + "" + m + "" + d;
      return result;
    },
    getLiveFromKey: function(key) {
      const target = this.liveList.find((date) => {
        return date.ymd === key;
      });
      return target.contents;
    },
    ticketDate: function(date) {
      let y = date.getFullYear();
      let m = ("00" + (date.getMonth() + 1)).slice(-2);
      let d = ("00" + date.getDate()).slice(-2);
      let result = y + "" + m + "" + d;
      return result;
    },
    getTicketFromKey: function(key) {
      const target = this.ticketList.find((date) => {
        return date.ymd === key;
      });
      return target.contents;
    },
  },
};
</script>
