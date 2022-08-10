<!--
 * @Author: whm
 * @Date: 2022-08-03 16:25:55
 * @LastEditTime: 2022-08-10 15:14:20
 * @Description: 矩形
-->
<template>
  <div class="progress-rect">
    <svg :width="strokeWidth + width" :height="strokeWidth + height">
      <g>
        <rect :x="origin" :y="origin" :width="width" :height="height" :style="outerStyle" />
        <rect :x="origin" :y="origin" :width="width" :height="height" :style="style" />
        <text
          v-if="showText"
          :x="centerPoint.x"
          :y="centerPoint.y"
          text-anchor="middle"
          dominant-baseline="middle"
          :style="svgTextStyle"
        >
          {{ content }}
        </text>
      </g>
    </svg>
  </div>
</template>
<script>
import mixin from './mixin'
export default {
  mixins: [mixin],

  computed: {
    centerPoint() {
      const x = (this.strokeWidth + this.width) / 2
      const y = (this.strokeWidth + this.height) / 2
      return { x, y }
    },
    origin() {
      return this.strokeWidth / 2
    },
    style() {
      const fill = this.fillColor
      const stroke = this.currentStrokeColor
      const strokeWidth = this.strokeWidth
      const strokeDasharray = (Number(this.width) + Number(this.height)) * 2
      const strokeDashoffset = (strokeDasharray * (100 - this.percentage)) / 100
      const strokeLinecap = this.strokeLinecap
      const strokeLinejoin = this.strokeLinejoin
      return {
        fill,
        stroke,
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
      const stroke = this.backStrokeColor
      const strokeLinecap = this.strokeLinecap
      const strokeLinejoin = this.strokeLinejoin
      const backStrokeWidth = this.backStrokeWidth
      return {
        fill,
        stroke,
        strokeWidth: backStrokeWidth,
        strokeLinecap,
        strokeLinejoin,
        rx: this.borderRadius,
        ry: this.borderRadius
      }
    }
  }
}
</script>
