<template>
  <div id="bottom-tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" @click="toHome">home</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" @click="toLogin">toLogin</van-tabbar-item>
      <!-- <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <!-- <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      active: 'home',
    }
  },
  methods:{ 
    toHome(){
      this.$router.push('/')
    },
    toLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">

</style>