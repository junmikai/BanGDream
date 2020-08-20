<template>
  <div class="footer-container">
    <div class="black">
      <div class="flex -title">
        <img
          src="../../src/assets/images/star-white.png"
          alt="star"
          class="star"
        >
        <p>Official Twitter</p>
        <img
          src="../../src/assets/images/star-white.png"
          alt="star"
          class="star"
        >
      </div>

      <div class="footer-sns">
        <div
          v-for="(twitter, index) in twitters"
          :key="`twitter-${index}`"
          class="rectangle"
          :class="{ hoverWhite: hoverTwitter === twitter }"
          @mouseover="hoverTwitter = twitter"
          @mouseout="hoverTwitter = ''"
        >
          <div class="area -w120">
            <img
              v-for="(icon, index) in twitter.icons"
              :key="`icon-${index}`"
              :src="icon"
              alt="icon"
              class="icon"
              :class="{ hoverOpacity: hoverTwitter === twitter }"
            >
          </div>
          <div
            class="area "
            :class="{ hoverFont: hoverTwitter === twitter }"
          >
            <p
              v-for="(title, index) in twitter.titles"
              :key="`title-${index}`"
              class="title"
            >
              {{ title }}
            </p>
            <a
              v-for="(link, index) in twitter.links"
              :key="`link-${index}`"
              class="link"
            >@bang_dream_info</a>
          </div>
        </div>
      </div>

      <div class="flex -share">
        <p class="share">
          SHARE
        </p>
        <img
          v-for="(circle, index) in circles"
          :key="`circle-${index}`"
          :src="circle"
          alt="circle"
          class="circle"
          :class="{ hoverOpacity: hoverCircle === circle }"
          @mouseover="hoverCircle = circle"
          @mouseout="hoverCircle = ''"
        >
      </div>

      <img
        :src="logo"
        alt="logo"
        class="logo"
        @mouseover="logo = hoverLogo"
        @mouseout="logo = hoverLogoOut"
      >
      <div class="flex">
        <img
          v-for="(bushiroad, index) in bushiroads"
          :key="`bushiroad-${index}`"
          :src="bushiroad"
          alt="bushiroad"
          class="bushiroad"
          :class="{ hoverOpacity: hoverBushiroad === bushiroad }"
          @mouseover="hoverBushiroad = bushiroad"
          @mouseout="hoverBushiroad = ''"
        >
      </div>

      <div class="flex -share">
        <p
          v-for="(lang, index) in langs"
          :key="`lang-${index}`"
          class="lang"
          :class="{ hoverFont: hoverLang === lang }"
          @mouseover="hoverLang = lang"
          @mouseout="hoverLang = ''"
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
</template>
<script>
export default {
  name: "Calendar",
  data: function() {
    return {
      hoverTitle: "",
      hoverBox: "",
      hoverTwitter: "",
      hoverCircle: "",
      hoverBushiroad: "",
      hoverLang: "",
      twitter: false,
      circle: false,
      bushiroad: false,
      lang: false,
      logo: require("@/assets/images/footer-logo-white.png"),
      hoverLogo: require("@/assets/images/footer-logo.png"),
      hoverLogoOut: require("@/assets/images/footer-logo-white.png"),
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
  methods: {},
};
</script>
