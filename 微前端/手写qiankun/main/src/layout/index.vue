<template>
  <el-container>
    <el-aside width="200px">
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>Micro Frontends</el-header>
      <el-main>
        <!-- 主应用路由渲染出口 -->
        <router-view></router-view>

        <!-- 微前端子应用渲染出口 -->
        <div id="subapp-container"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppMenu from './AppMenu'

export default {
  components: {
    AppMenu
  }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #f7f8fa;
  color: #333;
  /* text-align: center; */
  line-height: 60px;
}

.el-aside {
  background-color: #304156;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

.el-container {
  height: 100vh;
}
</style>
