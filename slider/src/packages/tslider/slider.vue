<template>
  <scroll
    class="wrapper"
    ref="scroll"
    :data="data"
    :probe-type="3"
    :pulldown="pulldown"
    :scrollX="scrollX"
    :scrollY="false"
  >
    <ul ref="ul">
      <li ref="li" v-for="item of data" :key="item">{{item}}</li>
    </ul>
  </scroll>
</template>
<script>
import scroll from "../../components/scroll";
export default {
  name: "Slider",
  data() {
    return {
      data: [],
      pulldown: true,
      scrollX: true
    };
  },
  components: {
    scroll
  },
  created() {
    for (let i = 0; i < 100; i++) {
      this.data.push(i);
    }
    this.$nextTick(() => {
      let width = 50 * 100;
      this.$refs.ul.style.width = width + "px";
    });
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  // display: flex;
  position: fixed;
  top: 20px;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 0 10px;
  & > ul {
    height: 100%;
    margin: 0;
    padding: 0;
    // overflow: hidden;
    li {
      display: inline-block;
      width: 50px;
      text-align: center;
      box-sizing: border-box;
    }
  }
}
</style>