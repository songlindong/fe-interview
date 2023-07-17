<template>
<div id="home" class="clearfix">
    <!-- 头部 -->
    <headerBar>
        <div slot="home" class="zhaowa-header-bar">
            <Icon type="ios-email" size="30" color="#fff" class="fl header-email"></Icon>
            <span class="logo">
                今日头条
            </span>
            <Icon type="ios-search" size="30" color="#fff" class="header-search"></Icon>
        </div>
    </headerBar>
    <!-- 列表 -->
    <transition enter-active-class="bounceInLeft">
        <!-- 列表内容 -->
        <ul class="list-content animated" v-show="ifReturnMsg">
            <router-link
                v-for="(val, index) in listContent"
                :to="{
                    // 详情页跳转动作
                }"
                class="news-detail"
                :key="index"
                >
                <!-- 单条新闻的略缩 -->
                <!-- 新闻标题 -->
                <p class="title">{{ val.title }}</p>
                <div>
                    <div class="news-info clearfix"></div>
                    <!-- 通讯社名称 -->
                    <span class="writer">
                        {{ val.media_name }}
                    </span>
                    <!-- 评论数 -->
                    <span class="comment-count">
                        {{ val.comment_count }}
                    </span>
                    <!-- 发表事件 -->
                    <span class="datetime">
                        {{ val.datetime }}
                    </span>
                </div>
            </router-link>
        </ul>
    </transition>
    <!-- 列表加载区域 -->
    <div class="load-more" v-show="downLoadMore"
        @click="handleClickPull">
        点击加载更多
    </div>
    <div></div>
    <!-- 导航 -->
    <bottomNav></bottomNav>
</div>
</template>

<script>
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
import list from '../mock/data/list';

import {
    mapActions,
    mapGetters
} from 'vuex'

export default {
    name: 'homePage',
    components: {
        headerBar,
        bottomNav
    },
    // 退休
    // data() {
    //     return {
    //         ifReturnMsg: true,
    //         downLoadMore: true
    //     }
    // },
    computed: {
        ...mapGetters([
            'list',
            'ifReturnMsg',
            'routerChange',
            'downLoadMore'
        ]),
        listContent: function() {
            return list.getList().data;
            // return this.list['__all__'];
        },
    },
    methods: {
        ...mapActions([
            'getList',
            'loadMore'
        ]),
        // 加载下一页
        handleClickPull() {
            this.loadMore(
                {
                    kind: '__all__',
                    flag: this.downLoadMore
                }
            )
        }
    },
    mounted() {
        // 初始化
        this.getList({
            kind: '__all__',
            flag: this.routerChange
        })
    },
    watch: {
        '$route': function() {
            // 页面回归更新
            this.getList({
                kind: '__all__',
                flag: this.routerChange
            })
            // TODO: router change 了
        }
    }
}
</script>

<style lang="less" scoped rel="styleheet/less">
@import "../assets/css/transtion.less";
.zhaowa-header-bar {
    display: flex;
    justify-content: space-between;
    padding: 0 0.4rem;
    align-items: center;
    .logo {
        color: #fff;
        font-size: 18px;
    }
}


// 主内容部分
.list-content {
    margin-top: 1.2rem;
    width: 100%;
    .news-detail {
        width: 94%;
        display: block;
        position: relative;
        margin: 0 auto;
        padding-bottom: 0.15rem;
        border-bottom: 1px solid #ccc;
        .title {
            font-size: 16px;
            font-weight: bold;
            color: #000;
            padding-top: 0.2rem;
            padding-bottom: 0.15rem;
        }
        .news-info {
            font-size: 10px;
            margin-top: 0.15rem;
            .writer {
                color: #000;
            }
            .comment-count {
                color: #000;
            }
            .datetime {
                float: right;
                color: #000;
            }
        }
    }
}
// 加载更多
.load-more {
    margin-bottom: 1.3rem;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #000;
    font-size: 18px;
    text-align: center;
}

// 美化滚动条
::-webkit-scrollbar {
    display: none;
}
</style>
