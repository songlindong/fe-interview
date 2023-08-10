<template>
  <div class="main">
    <div class="header">上海</div>
    <div class="main-content">
      <plates></plates>
      <prodList></prodList>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";

import prodList from '../components/prodList.vue';
import plates from '../components/plates.vue';

@Component({
  components: {
    prodList,
    plates
  }
})
export default class App extends Vue {
  @Action initAjax: () => void;

  mounted() {
    this.initAjax();
  }
}

</script>

<style lang="stylus">
.main {
  .header {
    background-color: #ff1395;
    padding: 20px;
  }
  .main-content {
    padding: 10px;
  }
}
</style>
