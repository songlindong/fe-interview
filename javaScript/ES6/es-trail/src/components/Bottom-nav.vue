<template lang="html">
    <ul class="nav">
        <router-link to="/home/" class="nav-items">
          <div class="bottom-nav-icon icon-home"></div>
          <div class="bottom-nav-text">首页</div>
        </router-link>
        <router-link to="/my" class="nav-items">
          <div class="bottom-nav-icon icon-my"></div>
          <div class="bottom-nav-text">我的</div>
        </router-link>
    </ul>
</template>

<script>
// import * as type from '../store/mutation-types.js'
export default {
}
</script>

<style lang="less">
.nav {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
    font-size: 10px;
    overflow: hidden;
    z-index: 1000;
    opacity: 1;
    background: #fff;
    box-shadow: 0 0 5px #ccc;
    height: 1.2rem;
    .nav-items {
        display: block;
        float: left;
        width: 50%;
        height: 100%;
        color: #999;
        padding-top: 5px;
        .bottom-nav-icon {
          height: 57%;
          margin: 0 auto;
        }
        .icon-home {
          background: url(../assets/imgs/icons/home_dark_icon.png) no-repeat center center;
          background-size: contain;
        }
        .icon-my {
          background: url(../assets/imgs/icons/head_dark_icon.png) no-repeat center center;
          background-size: contain;
        }
        .bottom-nav-text {
          height: 43%;
        }
    }
    .router-link-active {
        color: #d43d3d;
        .icon-home {
          background: url(../assets/imgs/icons/home_icon.png) no-repeat center center;
          background-size: contain;
        }
        .icon-my {
          background: url(../assets/imgs/icons/head_icon.png) no-repeat center center;
          background-size: contain;
        }
    }
}
</style>
