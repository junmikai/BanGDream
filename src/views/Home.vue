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
          <img src="../../src/assets/images/info.png" alt="genre" class="genre" />
          <p class="title">【重要なお知らせ】2020年開催公演についてのご案内</p>
          <p class="time">2020.06.30[Tue]</p>
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
        { thumbnails: [require("@/assets/images/news1.png")] },
        { thumbnails: [require("@/assets/images/news2.png")] },
        { thumbnails: [require("@/assets/images/news3.png")] },
        { thumbnails: [require("@/assets/images/news4.png")] },
        { thumbnails: [require("@/assets/images/news5.png")] },
        { thumbnails: [require("@/assets/images/news6.png")] },
        { thumbnails: [require("@/assets/images/news6.png")] },
        { thumbnails: [require("@/assets/images/news6.png")] },
      ],
    };
  },
};
</script>

