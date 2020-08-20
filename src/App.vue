<template>
  <div id="app">
    <div class="header-container">
      <img
        alt="logo"
        class="logo"
        src="../src/assets/images/logo.png"
      >
      <div class="header-nav">
        <div
          v-for="(list, index) in lists"
          :key="`list-${index}`"
          class="link"
          :class="{ select: hoverLink === list }"
          @mouseover="hoverLink = list"
          @mouseout="hoverLink = ''"
        >
          <div
            v-for="english in list.english"
            :key="english"
            class="english"
          >
            {{ english }}
          </div>
          <div
            v-for="japanese in list.japanese"
            :key="japanese"
            class="japanese"
          >
            {{ japanese }}
          </div>
        </div>

        <img
          v-for="icon in icons"
          :key="icon"
          :src="icon"
          alt="sns"
          class="sns"
          :class="{ hoverOpacity: hoverSns === icon }"
          @mouseover="hoverSns = icon"
          @mouseout="hoverSns = ''"
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      lists: [
        { english: ["NEWS"], japanese: ["ニュース"] },
        { english: ["LIVE/EVENT"], japanese: ["ライブ/イベント"] },
        { english: ["ANIME"], japanese: ["アニメ"] },
        { english: ["DISCOGRAPHY"], japanese: ["ディスコグラフティ"] },
        { english: ["GOODS"], japanese: ["グッズ"] },
        { english: ["ABOUT"], japanese: ["バンドリ!とは"] },
      ],
      icons: [
        require("@/assets/images/twitter.png"),
        require("@/assets/images/youtube.png"),
        require("@/assets/images/instagram.png"),
      ],
      hoverLink: "",
      hoverSns: "",
    };
  },
  methods: {},
};
</script>
