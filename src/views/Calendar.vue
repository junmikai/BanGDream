<template>
  <div class="contents-container -pa1_5 -back">
    <p class="title">
      SCHEDULE
    </p>
    <p class="translation">
      スケジュール
    </p>
    <p class="month">
      2020年8月
    </p>

    <v-calendar>
      <template>
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
              v-for="content in getLiveFromKey(liveDate(props.day.date))"
              :key="content"
              class="cell-content-line -live"
            >
              {{ content }}
            </div>
          </template>
        </div>

        <div class="cell-content">
          <template
            v-if="
              ticketList.some((date) => date.ymd === ticketDate(props.day.date))
            "
          >
            <div
              v-for="content in getTicketFromKey(ticketDate(props.day.date))"
              :key="content"
              class="cell-content-line -ticket"
            >
              {{ content }}
            </div>
          </template>
        </div>
      </template>
    </v-calendar>
    <div
      :key="btn"
      class="btn"
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
  name: "Calendar",
  data: function() {
    return {
      hoverBtn: "",
      btn: false,
      props: {
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
      },
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
