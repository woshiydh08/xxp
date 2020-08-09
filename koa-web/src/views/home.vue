<template>
  <div id="home-wapper">
    <!-- <h1>我是首页</h1> -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <!-- <van-swipe-item>1</van-swipe-item> -->
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" @click="toDetail" />
      </van-swipe-item>
    </van-swipe>
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    const img1 = require("../images/2.jpg");
    const img2 = require("../images/3.jpg");
    const img3 = require("../images/4.jpg");
    const img4 = require("../images/5.jpg");
    return {
      images: [
        img1,
        img2,
        img3,
        img4
      ],
    };
  },
  methods: {
    toDetail () {
      this.$router.push({
        path: "/404",
        query: {
          a: 123
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
#home-wapper {
  // padding-top: 1rem;
  .my-swipe .van-swipe-item {
    // color: #fff;
    // font-size: 20px;
    // line-height: 150px;
    // text-align: center;
    // background-color: #39a9ed;
  }
  .my-swipe {
    img {
      width: 100%;
    }
  }
  .test {
    width: 375px;
    height: 375px;
    background: linear-gradient(
      to right,
      #4ca1af,
      #c4e0e5
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}
</style>