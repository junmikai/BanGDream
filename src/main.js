import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCarousel from "vue-carousel";
import VCalendar from "v-calendar";

require("@/assets/sass/main.scss");
Vue.config.productionTip = false;
Vue.use(VueCarousel);
Vue.use(VCalendar);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
