<template>
  <div class="not-found">
    <svg-icon name="404" :size="200"></svg-icon>
    <p>页面未找到~~~~~</p>
  </div>
</template>

<script setup>
defineOptions({
  name: "404"
})
</script>

<style lang="less" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 10%;

  p {
    margin: 20px;
    font-size: 30px;
  }
}
</style>