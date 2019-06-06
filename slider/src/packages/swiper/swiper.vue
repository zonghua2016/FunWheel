<template>
  <div class="swiper-container">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    <div class="swiper-slide">Slide 4</div>
    <div class="swiper-slide">Slide 5</div>
    <div class="swiper-slide">Slide 6</div>
    <div class="swiper-slide">Slide 7</div>
    <div class="swiper-slide">Slide 8</div>
    <div class="swiper-slide">Slide 9</div>
    <div class="swiper-slide">Slide 10</div>
  </div>
</template>
<script>
import _Swiper from "swiper/dist/js/swiper.js";
const Swiper = window.Swiper || _Swiper;
export default {
  name: "Swiper",
  data() {
    return {
      swiper: null
    };
  },
  ready() {
    if (!this.swiper) {
      this.mountInstance();
    }
  },
  props: {
    swiperOptions: {
      type: Object,
      default: () => {
        return {
          direction: "vertical"
        };
      }
    }
  },
  methods: {
    update() {
      if (this.swiper) {
        this.swiper.update && this.swiper.update();
      }
    },
    mountInstance() {
      const swiperOptions = Object.assign({}, this.swiperOptions);
      this.swiper = new Swiper(".swiper-container", swiperOptions);
    }
  },
  mounted() {
    this.mountInstance();
  }
};
</script>
<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.min.css");
</style>
