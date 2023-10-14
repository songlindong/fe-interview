<template>
  <div>
    <h2>home page</h2>
    <button @click="$router.replace('/subapp/app-vue2')">ReplaceState 测试</button>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
