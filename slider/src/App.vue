<template>
  <div id="app">
    <!-- <slider/> -->
    <!-- <swiper :swiperOptions="swiperOptions">
      <swiper-slide>aa</swiper-slide>
      <swiper-slide>bb</swiper-slide>
      <swiper-slide>cc</swiper-slide>
      <swiper-slide>aa</swiper-slide>
      <swiper-slide>bb</swiper-slide>
      <swiper-slide>cc</swiper-slide>
      <swiper-slide>aa</swiper-slide>
      <swiper-slide>bb</swiper-slide>
      <swiper-slide>cc</swiper-slide>
    </swiper> -->
    <swiper />
    <flip-clock :options="flipOption" style="margin-top:-100px;"/>
  </div>
</template>

<script>
// import slider from './packages/tslider/slider'
import swiper from './components/swiper.vue'
import { FlipClock } from '@mvpleung/flipclock';
export default {
  name: "app",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      flipOption:{
        digit: 0,
        clockFace: 'Counter'
      }
    };
  },
  components:{
    // slider,
    swiper,
    FlipClock
  }
};
</script>
<style lang="scss" scoped>
</style>

