<template>
    <div class="prod-list">
        <div class="prod" v-for="(prod, index) in products" :key="index">
            <div class="prod-logo">
                <img :src="prod.imgUrl" alt="img">
            </div>
            <div class="content">
                {{prod.prodName}} - {{prod.desc}} - {{prod.price}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";

@Component
export default class prodList extends Vue {
    @State prodList: StoreState.prod[]

    // 变量开始
    get products(): StoreState.prod[] {
        const prodList = this.prodList;
        // 业务逻辑操作
        return prodList;
    }
    // 变量结束

    // 行为开始
}
</script>

<style lang="stylus">
.prod-list {
    padding-top: 20px;
    height: 70vh;
    overflow: auto;
    .prod {
        padding: 0 10px 10px 10px;
        display: flex;
    }
    .prod-logo {
        position: relative;
        margin-right: 10px;

        img {
            width: 100px;
            height: 120px;
            border-radius: 5px;
        }
    }
    .content {
        display: flex;
        align-items: center;
    }
}
</style>