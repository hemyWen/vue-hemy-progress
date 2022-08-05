<!--
 * @Author: whm
 * @Date: 2022-08-03 16:25:55
 * @LastEditTime: 2022-08-05 09:56:11
 * @Description: 矩形
-->
<template>
  <div class="progress-rect">
    <svg :width="strokeWidth + width" :height="strokeWidth + height">
      <g>
        <rect :x="origin" :y="origin" :width="width" :height="height" :style="outerStyle" />
        <rect :x="origin" :y="origin" :width="width" :height="height" :style="style" />
      </g>
    </svg>
  </div>
</template>
<script>
import mixin from './mixin'
export default {
  mixins: [mixin],

  computed: {
    origin() {
      return this.strokeWidth / 2
    },
    style() {
      const fill = this.fillColor
      const stroke = this.strokeColor
      const traiColor = this.traiColor
      const strokeWidth = this.strokeWidth
      const strokeDasharray = (Number(this.width) + Number(this.height)) * 2
      const strokeDashoffset = (strokeDasharray * (100 - this.percentage)) / 100
      const strokeLinecap = this.strokeLinecap
      const strokeLinejoin = this.strokeLinejoin
      return {
        fill,
        stroke,
        traiColor,
        strokeWidth,
        strokeDasharray,
        strokeDashoffset,
        strokeLinecap,
        strokeLinejoin,
        rx: this.borderRadius,
        ry: this.borderRadius
      }
    },
    outerStyle() {
      const fill = 'none'
      const stroke = this.traiColor
      const strokeWidth = this.strokeWidth
      const strokeLinecap = this.strokeLinecap
      const strokeLinejoin = this.strokeLinejoin
      return {
        fill,
        stroke,
        strokeWidth,
        strokeLinecap,
        strokeLinejoin,
        rx: this.borderRadius,
        ry: this.borderRadius
      }
    }
  }
}
</script>
pt
