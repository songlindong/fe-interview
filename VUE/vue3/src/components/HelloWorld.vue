<template>
  <div class="hello">
    <h1>_{{ msg }}</h1>
    <h1 @click="handleClickHeader">{{ msg }}</h1>
    <h1>{{ state.number }}</h1>
    <h1>{{ addMsg }}</h1>
    <h1>{{ state.number2 }}</h1>
    <!-- 面试题 -->
    <!-- 计算类型 -->
    1. 绑定数据的计算可以写在花括号里吗？
    <h3>number+1:{{ state.number + 1 }}</h3>
    2. 截断
    <h3>{{ msg.slice(0, -1) }}</h3>
    3. 浮点数
    <h3>{{ state.number.toFixed(2) }}</h3>
    4. 转整形
    <h3>{{ parseInt(state.number, 10) }}</h3>
    
    <!-- 加工类型 -->
    5. 函数加工
    <h3>{{ calcNumber(state.number) }}</h3>

    <!-- 条件类型 -->
    6. 三元计算
    <h3>100>99:{{ 100>99 ? '对' : '错' }}</h3>
    7. 逻辑运算
    <h3>100>99 && 100>98:{{ 100>99 && 100>98 }}</h3>
    8. 取反
    <h3>{{ !state.number }}</h3>
    <!-- vueTemplateCompiler -->
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'

// const number = ref(100);
let msg = 'Welcome to Your Vue.js App';
const state = reactive({
  number: 100,
  number2: 0,
  data: {}
})
const addMsg = computed(() => msg + state.number)
const calcNumber = num => num + 2;
const handleClickHeader = msg += '!';

watch(
  () => state.number,
  () => {
    state.number2++
  }
)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
