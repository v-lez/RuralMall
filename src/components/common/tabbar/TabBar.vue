<template>
  <!-- 此处的写法的注意，首先是一个父节点，然后在app下再创建一个 -->
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -0.5px 1px grey;
  background-color: #ffffff;
  z-index: 9;
}
</style>
