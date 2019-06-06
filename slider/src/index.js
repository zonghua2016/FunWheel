import MoorSwitch from "./packages/switch/index.js";
import Slider from "./packages/tslider/index";
import Swiper from "./packages/swiper/";
import SwiperSlide from "./packages/swiper-slider/";

const components = [MoorSwitch, Swiper, SwiperSlide];

const install = (Vue, opts = {}) => {
  components.map(com => {
    Vue.component(com.name, com);
  });
};
// 支持使用标签的方式引入
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  MoorSwitch,
  Swiper,
  SwiperSlide
};
