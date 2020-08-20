<template>
  <div class="main-container">
    <!-- トップ画像 -->
    <img
      :key="main"
      alt="main"
      src="../../src/assets/images/Las.png"
      :class="{ hoverOpacity: hoverMain === main }"
      @mouseover="hoverMain = main"
      @mouseout="hoverMain = ''"
    >
    <!-- カルーセル-->
    <Carousel />
    <!-- ニュース-->
    <News />
    <!-- カレンダー-->
    <Calendar />
    <!-- バナー-->
    <Banner />
    <!-- フッターー-->
    <Footer />
  </div>
</template>
<script>
import Carousel from "../views/Carousel";
import News from "../views/News";
import Calendar from "../views/Calendar";
import Banner from "../views/Calendar";
import Footer from "../views/Footer";
export default {
  components: {
    Carousel,
    News,
    Banner,
    Calendar,
    Footer,
  },
  data: function() {
    return {
      hoverMain: "",
      main: false,
    };
  },
};
</script>
