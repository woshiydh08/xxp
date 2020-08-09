<template>
  <div id="top-nav-wapper">
    <!-- 蟹蟹皮 Design -->
    <div class="title-img"></div>
  </div>
</template>

<script>
export default {
  name:'TopNav',
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="less">
#top-nav-wapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background-color:rgba(255, 255, 255, 0.5);
  font-size: 0.5rem;
  border-bottom: 1px solid gray;
  z-index: 9;
  display: flex;
  justify-content: left;
  align-items: center;
  .title-img{
    width: 3.8rem;
    height: 0.8rem;
    margin-left: 0.5rem;
    background: url("../images/title_bg.png") no-repeat;
    background-size:100% 100%;
  }
}
</style>