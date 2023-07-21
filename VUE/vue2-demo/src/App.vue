<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld>
      <!-- 默认插槽 -->
      <p>{{ str }}</p>
      <p>{{ str }}</p>
      <p>{{ str }}</p>
      <p>{{ str }}</p>
      <!-- 具名插槽 -->
      <template v-slot:header> {{ header }}</template>
      <template v-slot:footer> {{ footer }}</template>
      <!-- 作用域插槽 -->
      <!-- <template slot="content" slot-scope="{ slotProps }">
        {{ slotProps }}
      </template> -->
      <!-- 新版本 -->
      <template v-slot:content="slotProps">
        {{ slotProps.slotProps }}
      </template>
    </HelloWorld>
    <HelloWorld1></HelloWorld1>
    <HelloWorld2></HelloWorld2>
    <!-- <div ref="text">{{ a }}, {{ b }}</div> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HelloWorld1 from './components/HelloWorld1.vue';
import HelloWorld2 from './components/HelloWorld2.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorld1,
    HelloWorld2
  },
  data() {
    return {
      a: 1,
      b: 2,
      str: '默认插槽',
      header: '测试header',
      footer: '测试footer'
    }
  },
  // created() {
  //   setTimeout(() => {
  //     this.a = 3,
  //     this.$nextTick(() =>{
  //       console.log(this.$ref.text.innerHTML)
  //     })
  //     this.b = 4
  //   }, 1000)
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
