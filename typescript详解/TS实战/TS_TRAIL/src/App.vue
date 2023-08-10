<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {}
</script>

<style lang="stylus">
body {
  font-size: 14px;
  margin: 0;
}

.divider {
  height: 10px;
  background-color: #f0f0f0;
}
</style>
