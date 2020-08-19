<template>
  <carousel
    autoplay
    loop
    :per-page="1"
    navigation-prev-label="〈"
    navigation-next-label="〉"
    :speed="1000"
    :autoplayTimeout="4000"
    paginationActiveColor="none"
    paginationColor="none"
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
</template>
