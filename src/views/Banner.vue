<template>
  <div class="banner-container">
    <div
      v-for="(box, index) in boxs"
      :key="`box-${index}`"
      class="box"
      @mouseover="hoverBox = box"
      @mouseout="hoverBox = ''"
    >
      <img
        v-for="(banner, index) in box.banners"
        :key="`banner-${index}`"
        class="image"
        :src="banner"
        alt="banner"
      >
      <div :class="{ hoverRed: hoverBox === box }" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Calendar",
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
