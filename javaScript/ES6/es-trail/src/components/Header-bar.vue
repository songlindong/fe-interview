<template>
<header>
    <slot name="home"></slot>
    <slot name="my"></slot>
</header>
</template>

<script>
export default {}
</script>

<style lang="less">
header {
    height: 1.2rem;
    width: 100%;
    line-height: 1.2rem;
    background: #d43d3d;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    z-index: 999;
}
</style>
