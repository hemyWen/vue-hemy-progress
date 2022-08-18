<!--
 * @Author: whm
 * @Date: 2022-08-03 16:23:58
 * @LastEditTime: 2022-08-18 10:13:34
 * @Description: 
-->
<template>
  <div ref="progressBar" class="progress-bar-outer" :style="outBarStyle">
    <div v-if="isDashed" class="progress-bar-inner-dashed">
      <div class="back-dash" v-if="isBackDashed">
        <div v-for="i in count" class="item" :style="dashOuterItemStyle"></div>
      </div>
      <div class="inner-dash" :style="dashInnerStyle">
        <div v-for="i in count" class="item" :style="dashInnerItemStyle"></div>
      </div>
    </div>
    <div v-else class="progress-bar-inner" :style="barStyle">
      <div v-if="showText" class="progress-bar-text" :style="textStyle">{{ content }}</div>
    </div>
  </div>
</template>
<script>
import mixin from './mixin.js'
export default {
  mixins: [mixin],
  computed: {
    dashItemStyle() {
      const style = {}
      style.width = this.dashedLength + 'px'
      style.marginRight = this.dashedDistance + 'px'
      return style
    },
    dashOuterItemStyle() {
      const style = {}
      style.background = this.backStrokeColor
      style.zIndex = 10
      return { ...this.dashItemStyle, ...style }
    },
    dashInnerItemStyle() {
      const style = {}
      style.background = this.currentStrokeColor
      style.zIndex = 99
      return { ...this.dashItemStyle, ...style }
    },
    dashInnerStyle() {
      const style = {}
      style.width = this.percentage + '%'
      return style
    },
    barStyle() {
      const style = {}
      style.width = this.percentage + '%'
      style.background = this.currentStrokeColor
      return style
    },
    outBarStyle() {
      const style = {}
      if (this.isDashed && this.isBackDashed) {
        return style
      }
      style.background = this.backStrokeColor
      return style
    }
  },
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    if (this.isDashed) {
      const width = this.$refs.progressBar.clientWidth
      const length = Number(this.dashedLength) + Number(this.dashedDistance)
      this.count = Math.ceil(width / length) + 1
    }
  },
  methods: {}
}
</script>
