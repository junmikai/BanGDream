<template>
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
</template>
<script>
export default {
  name: "calendar",
  data: function() {
    return {
      hoverBox: "",
      box: false,
      boxs: [
        { banners: [require("@/assets/images/link1.png")] },
        { banners: [require("@/assets/images/link2.png")] },
      ],
    };
  },
};
</script>
