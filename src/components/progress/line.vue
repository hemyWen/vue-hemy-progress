<!--
 * @Author: whm
 * @Date: 2022-08-03 16:23:58
 * @LastEditTime: 2022-08-08 11:57:42
 * @Description: 
-->
<template>
  <div class="progress-bar-outer" :style="outBarStyle">
    <div class="progress-bar-inner" :style="barStyle">
      <div v-if="showText" class="progress-bar-text" :style="textStyle">{{ content }}</div>
    </div>
  </div>
</template>
<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  computed: {
    barStyle() {
      const style = {}
      style.width = this.percentage + '%'
      style.background = this.strokeColor
      return style
    },
    outBarStyle() {
      const style = {}
      style.background = this.backStrokeColor
      return style
    }
  }
}
</script>
