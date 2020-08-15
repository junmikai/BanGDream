<template>
  <div id="app">
    <div class="header-container">
      <img alt="logo" class="logo" src="../src/assets/images/logo.png" />
      <div class="header-nav">
        <div
          v-for="list in englishs"
          :key="list"
          class="link"
          :class="{ select: hoverLink === list }"
          @mouseover="hoverLink = list"
          @mouseout="hoverLink = ''"
        >
          {{ list }}
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
        />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      englishs: [
        "NEWS",
        "LIVE/EVENT",
        "ANIME",
        "MEDIA",
        "DISCOGRAPHY",
        "GOODS",
        "ABOUT",
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
