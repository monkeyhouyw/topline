<template>
  <div class="container">
    <van-nav-bar
  title="头条"
  right-text="搜索"
  fixed
  @click-right="$router.push('/search')"
/>
<!-- 二级路由对应显示组件 -->
<div class="my-wrapper">
  <router-view></router-view>
</div>
<!-- 根据地址栏去选中TabBar对应标签，开启路由模式组件内部实现 -->
<van-tabbar route>
  <van-tabbar-item  to="/"  icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item  to="/question" icon="chat-o">问答</van-tabbar-item>
  <van-tabbar-item  to="/viedo" icon="video-o">视频</van-tabbar-item>
  <van-tabbar-item  to="/user" icon="user-o">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='less' scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}
</style>
