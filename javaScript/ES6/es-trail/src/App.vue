<template>
<div id="app">
    <transition>
        <keep-alive>
            <router-view v-cloak></router-view>
        </keep-alive>
    </transition>
</div>
</template>

<script>
export default {
    name: 'app',
}
</script>

<style lang="less">
[v-cloak] {
    display: none;
}
</style>
