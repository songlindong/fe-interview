<template>
<div id="my">
    <headerBar>
        <div slot="my" class="zhaowa-header-bar">
            <span class="logo">
                个人信息
            </span>
        </div>
    </headerBar>
    <ul class="my-bar">
        <li is="router-link" class="fl collect my-bar-li" to="/">
            <Icon type="cube" size="24" color="#f69e32"></Icon><br>
            收藏
        </li>
        <li is="router-link" class="fl history my-bar-li" to="/">
            <Icon type="ios-timer-outline" size="24" color="#658cf5"></Icon><br>
            历史
        </li>
    </ul>
    <div class="level">
        配置内容
        <vueTree :options="options" :value="[8]"></vueTree>
    </div>
    <bottom-nav></bottom-nav>
</div>
</template>

<script>
import bottomNav from '../components/Bottom-nav.vue'
import headerBar from '../components/Header-bar.vue'
import vueTree from '../components/VueTree/tree.vue'

export default {
    name: 'myPage',
    components: {
        bottomNav,
        headerBar,
        vueTree
    },
    data() {
        return {
            options: [{
                value: 1,
                text: '总体板块'
            }, {
                value: 2,
                text: '科技板块'
            }, {
                value: 3,
                text: '金融板块',
                children: [{
                    value: 4,
                    text: '股市'
                }]
            }, {
                value: 5,
                text: '教育板块',
                children: [{
                    value: 6,
                    text: '测试'
                }]
            }, {
                value: 7,
                text: '时尚板块',
                children: [{
                    value: 8,
                    text: '穿搭'
                }]
            }, {
                value: 999,
                text: '其他板块',
                children: [{
                    value: 4321,
                    text: '更多'
                }]
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.zhaowa-header-bar {
    .logo {
        color: #fff;
        font-size: 18px;
        vertical-align: middle;
    }
}
.my-bar {
    display: flex;
    margin-top: 1.2rem;
    border-bottom: 1px solid #ccc;
    .my-bar-li {
        width: 50%;
        text-align: center;
        margin-top: 0.2rem;
        box-sizing: border-box;
        font-size: 13px;
        color: #000;
    }
    .collect {
        position: relative;
        display: block;
        &::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            height: 100%;
            right: 0;
            top: 0;
            border-right: 1px solid #bbb;
        }
    }
}
.level {
    padding: 0.3rem 0.5rem;
    font-size: 0.4rem;
}
</style>
