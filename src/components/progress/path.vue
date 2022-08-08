<!--
 * @Author: whm
 * @Date: 2022-08-08 09:00:08
 * @LastEditTime: 2022-08-08 14:21:42
 * @Description: 复杂图形
-->
<template>
  <div class="path-container">
    <svg :width="width" :height="height">
      <g>
        <path :pathLength="pathLength" fill="none" :d="d" :style="backgroundStyle" />
        <path class="path" :pathLength="pathLength" :d="d" :style="style" />
      </g>
    </svg>
  </div>
</template>
<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  computed: {
    style() {
      const { fillColor, strokeColor, strokeWidth, pathLength, strokeLinecap, strokeLinejoin } = this.$props
      const strokeDasharray = pathLength
      const strokeDashoffset = strokeDasharray - strokeDasharray * (this.percentage / 100)
      return {
        fill: fillColor,
        stroke: strokeColor,
        strokeWidth,
        strokeColor,
        strokeDasharray,
        strokeDashoffset,
        strokeLinecap,
        strokeLinejoin
      }
    },
    backgroundStyle() {
      const { backStrokeColor, backStrokeWidth, strokeLinejoin } = this.$props

      return { stroke: backStrokeColor, strokeWidth: backStrokeWidth, strokeLinejoin }
    }
  }
}
</script>
