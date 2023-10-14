<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#b2cbd1"
    active-text-color="#409eff"
    router
    :default-active="defaultActive"
  >
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/subapp/app-vue2">
      <i class="el-icon-menu"></i>
      <span slot="title">App Vue2</span>
    </el-menu-item>
    <el-menu-item index="/subapp/app-vue3">
      <i class="el-icon-menu"></i>
      <span slot="title">App Vue3</span>
    </el-menu-item>
    <el-menu-item index="/subapp/app-react">
      <i class="el-icon-menu"></i>
      <span slot="title">App React</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  computed: {
    defaultActive () {
      return this.$route.path
    }
  }
}
</script>

<style>
.el-menu {
  border-right: unset !important;
}
</style>
