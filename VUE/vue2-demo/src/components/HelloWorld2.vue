<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot></slot>
    <!-- 具名插槽 -->
    <slot name="header"></slot>
    <slot name="footer"></slot>
    <!-- 作用域插槽 -->
    <slot name="content" :slotProps="slotProps"></slot>
    <!-- 过滤器 -->
    <h1>{{ money | moneyFilter }}</h1>
    <!-- v-html -->
    <h1 v-html="money > 99 ? 99 : money"></h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul v-xxx="123">
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import demoMixin from './fragments/demoMixin'
import demoExtends from './fragments/demoExtends'
export default {
  name: 'HelloWorld',
  mixins: [demoMixin],
  extends: demoExtends,
  // props: {
  //   msg: String
  // },
  directives:{
    xxx: {
      bind(){}
    }
  },
  data () {
    return {
      slotProps: '测试作用域插槽',
      money: 100,
      msg: 'i am helloworld2'
    }
  },
  created() {
    console.log('i am helloworld')
  },
  filters: {
    moneyFilter(money) {
      return money > 99 ? 99 : money;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
