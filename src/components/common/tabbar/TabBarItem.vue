<template>
  <div id='tab-bar-item' @click="itemClick">
    <div v-if="!isActived"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActived () {
      // $route谁活跃就是谁
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActived ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
#tab-bar-item {
  /* 让所有弹性盒子模型对象的子元素都有相同的长度，且忽略他们内部的内容 */
  flex: 1;
  text-align: center;
  /* 49px一般是大多数导航栏的高度 */
  height: 49px;
  font-size: 14px;
  color: #2196f3;
  font-weight: bold;
}
#tab-bar-item img {
  height: 24px;
  width: 24px;
  padding-top: 1px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
