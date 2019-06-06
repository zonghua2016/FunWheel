<template>
  <!-- Optional controls -->
  <!-- <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-scrollbar" slot="scrollbar"></div>-->
  <div class="group">
    <div id="top">
      <img src="https://p1.ssl.qhimg.com/t01d890d925367ca0f9.png" class="addr">
      <img src="https://p5.ssl.qhimg.com/t01cf6f3f90d3a7bb4e.png" class="search">
      <swiper :options="navOption" ref="nav" id="nav" @tap="navTap">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of nav" :key="index">
          <span>{{item}}</span>
        </swiper-slide>
        <div class="bar">
          <div class="color"></div>
        </div>
      </swiper>
    </div>
    <swiper
      :options="pageOption"
      ref="page"
      id="page"
      @touchMove="pageTouchMove"
      @transitionStart="pageTransStart"
    >
      <swiper-slide class="slidepage">
        <swiper
          :options="legeOption"
          ref="lege"
          id="lege"
          @transitionStart="legeTransStart"
          @touchMove="legeTouchMove"
        >
          <swiper-slide class="lege-slide" style="background-color: gold;">123</swiper-slide>
          <swiper-slide class="lege-slide" style="background-color: pink;">123</swiper-slide>
          <swiper-slide class="lege-slide" style="background-color: blue;">123</swiper-slide>
          <swiper-slide class="lege-slide" style="background-color: yellow;">123</swiper-slide>
          <swiper-slide class="lege-slide" style="background-color: gray;">123</swiper-slide>
          <swiper-slide class="lege-slide" style="background-color: blue;">123</swiper-slide>
        </swiper>
        <swiper :options="legePageOption" ref="legePage" id="lege-page">
          <swiper-slide class="lege-page-slide">1</swiper-slide>
          <swiper-slide class="lege-page-slide">2</swiper-slide>
          <swiper-slide class="lege-page-slide">3</swiper-slide>
          <swiper-slide class="lege-page-slide">4</swiper-slide>
          <swiper-slide class="lege-page-slide">5</swiper-slide>
          <swiper-slide class="lege-page-slide">6</swiper-slide>
        </swiper>
      </swiper-slide>
      <swiper-slide class="slidepage">slide2</swiper-slide>
      <swiper-slide class="slidepage">slide3</swiper-slide>
      <swiper-slide class="slidepage">slide4</swiper-slide>
      <swiper-slide class="slidepage">slide5</swiper-slide>
      <swiper-slide class="slidepage">slide6</swiper-slide>
      <swiper-slide class="slidepage">slide7</swiper-slide>
      <swiper-slide class="slidepage">slide8</swiper-slide>
      <swiper-slide class="slidepage">slide9</swiper-slide>
      <swiper-slide class="slidepage">slide10</swiper-slide>
      <swiper-slide class="slidepage">slide11</swiper-slide>
      <swiper-slide class="slidepage">slide12</swiper-slide>
      <swiper-slide class="slidepage">slide13</swiper-slide>
    </swiper>
    <!-- <div class="swiper-container" id="page">
      <div class="swiper-wrapper">
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide1</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide2</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide3</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide4</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide5</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide6</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide7</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide8</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide9</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide10</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide11</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide12</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide13</div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">slide14</div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  data() {
    return {
      navSwiper: null,
      pageSwiper: null,
      legeSwiper: null,
      legePageSwiper: null,
      navSum: 0,
      bar: null,
      clientWidth: 0,
      navWidth: 0,
      navWidthArr: [],
      nav: [
        "热门推荐",
        "碧蓝航线",
        "克鲁赛德战记",
        "肉蛋",
        "蔬菜",
        "酒饮",
        "速食",
        "熟食",
        "水产",
        "粮油",
        "轻食",
        "火锅",
        "日白将"
      ],
      tSpeed: 300,
      navOption: {
        slidesPerView: 6,
        freeMode: true,
        on: {
          init: function() {
            let navSlideWidth = this.slides.eq(0).css("width");
            let bar = this.$el.find(".bar");
            bar.css("width", navSlideWidth);
            this.slides
              .eq(0)
              .find("span")
              .css("color", "rgba(255,72,145,1)");
          }
        }
      },
      pageOption: {
        watchSlidesProgress: true,
        resistanceRatio: 0
      },
      legeOption: {
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true
      },
      legePageOption: {
        centeredSlides: true,
        slidesPerView: "auto",
        slideToClickedSlide: true,
        spaceBetween: 5
      }
    };
  },
  mounted() {
    // 绑定特权
    this.$nextTick(() => {
      this.legeSwiper = this.$refs.lege.swiper;
      this.legePageSwiper = this.$refs.legePage.swiper;
      this.legeSwiper.controller.control = this.legePageSwiper;
      this.legePageSwiper.controller.control = this.legeSwiper;
    });
    // =====================
    this.navSwiper = this.$refs.nav.swiper; //导航
    this.pageSwiper = this.$refs.page.swiper; //内容
    this.bar = this.navSwiper.$el.find(".bar");
    this.navSum = this.navSwiper.slides[
      this.navSwiper.slides.length - 1
    ].offsetLeft;
    this.clientWidth = parseInt(this.navSwiper.$wrapperEl.css("width")); //Nav的可视宽度
    for (let i = 0; i < this.navSwiper.slides.length; i++) {
      let slideWidth = parseInt(this.navSwiper.slides.eq(i).css("width"));
      this.navWidth += slideWidth;
      this.navWidthArr.push(slideWidth);
    }
  },
  methods: {
    navTap() {
      let clickIndex = this.navSwiper.clickedIndex,
        clickSlide = this.navSwiper.slides.eq(clickIndex);
      // console.log("navIndex", clickIndex);
      this.pageSwiper.slideTo(clickIndex, 500);
      this.navSwiper.slides.find("span").css("color", "rgba(51,51,51,1)");
      clickSlide.find("span").css("color", "rgba(255,72,145,1)");
    },
    pageTouchMove() {
      this.bar.transform(
        "translateX(" + this.navSum * this.pageSwiper.progress + "px)"
      );
    },
    pageTransStart() {
      let activeIndex = this.pageSwiper.activeIndex,
        activeSlidePosition = this.navSwiper.slides[activeIndex].offsetLeft;
      // console.log("pageIndex:", activeIndex);
      //释放时导航粉色条移动过渡
      this.bar.transition(this.tSpeed);
      this.bar.css("width", this.navSwiper.slides.eq(activeIndex).css("width"));
      this.bar.transform("translateX(" + activeSlidePosition + "px)");
      //释放时文字变色过渡
      this.navSwiper.slides
        .eq(activeIndex)
        .find("span")
        .transition(this.tSpeed);
      this.navSwiper.slides
        .eq(activeIndex)
        .find("span")
        .css("color", "rgba(255,72,145,1)");
      if (activeIndex > 0) {
        this.navSwiper.slides
          .eq(activeIndex - 1)
          .find("span")
          .transition(this.tSpeed);
        this.navSwiper.slides
          .eq(activeIndex - 1)
          .find("span")
          .css("color", "rgba(51,51,51,1)");
      }
      if (activeIndex < this.pageSwiper.slides.length) {
        this.navSwiper.slides
          .eq(activeIndex + 1)
          .find("span")
          .transition(this.tSpeed);
        this.navSwiper.slides
          .eq(activeIndex + 1)
          .find("span")
          .css("color", "rgba(51,51,51,1)");
      }
      //导航居中
      let navActiveSlideLeft = this.navSwiper.slides[activeIndex].offsetLeft; //activeSlide距左边的距离
      let navSlideWidth = this.navSwiper.slides.eq(0).css("width");
      let clientWidth = parseInt(this.navSwiper.$wrapperEl.css("width"));
      this.navSwiper.setTransition(this.tSpeed);
      if (
        navActiveSlideLeft <
        (this.clientWidth - parseInt(navSlideWidth)) / 2
      ) {
        this.navSwiper.setTranslate(0);
      } else if (
        navActiveSlideLeft >
        this.navWidth - (parseInt(navSlideWidth) + this.clientWidth) / 2
      ) {
        this.navSwiper.setTranslate(this.clientWidth - this.navWidth);
      } else {
        this.navSwiper.setTranslate(
          (this.clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
        );
      }
    },
    legeTransStart() {},
    legeTouchMove() {
      // console.log(this.legeSwiper.progress);
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
#top {
  position: absolute;
  top: 0;
  z-index: 5;
  width: 100%;
  background: #fff;
}
#top .addr {
  height: 36px;
  margin: 0 auto;
  display: block;
}
#top .search {
  position: absolute;
  top: 0;
  right: 0;
  height: 36px;
  display: block;
}
#nav {
  border-bottom: 1px solid #ebebeb;
}
#nav .swiper-slide {
  width: auto !important;
}
#nav .swiper-slide span {
  padding: 0 5px;
  text-align: center;
  display: block;
  line-height: 2.5;
  font-size: 14px;
  color: #333333;
}
#nav .bar {
  height: 3px;
  position: absolute;
  bottom: 0px;
  transition: all 0.3s;
}
#nav .bar .color {
  width: 20px;
  margin: 0 auto;
  height: 3px;
  background: #ff4891;
}
.banner img {
  width: 100%;
  display: block;
}
.banner .swiper-pagination {
  left: auto;
  right: 7px;
  bottom: 7px;
  width: auto;
  padding: 2px 7px;
  border-radius: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
}
#page {
  padding-top: 80px;
  height: 100%;
  font-size: 20px;
}
#page .slidepage {
  width: 100%;
  height: 100%;
  min-height: 600px;
  padding: 10px;
  box-sizing: border-box;
}
.scroll {
  height: 100%;
}
.slidescroll {
  height: auto;
}
#footer {
  position: fixed;
  bottom: 0;
  z-index: 5;
}
// =======================
</style>
<style lang="scss" scoped>
// 类特权
#lege {
  height: 200px;
}

#lege {
  .swiper-slide {
    width: 80%;
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
    &:not(.swiper-slide-active) {
      transform: scale(0.9);
    }
  }
}
#lege-page {
  height: 50px;
  margin-top: 10px;
  // padding-left: 25%;
  .swiper-slide {
    width: 40%;
    text-align: center;
    background-color: gray;
    &:not(.swiper-slide-active) {
      transform: scale(1);
    }
  }
}
</style>

