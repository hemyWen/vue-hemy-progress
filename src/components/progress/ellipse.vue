<!--
 * @Author: whm
 * @Date: 2022-08-05 09:55:37
 * @LastEditTime: 2022-08-05 14:56:17
 * @Description: 椭圆
-->
<template>
  <div class="progress-ellipse">
    <svg :width="width" :height="height">
      <g>
        <ellipse
          :pathLength="perimeter"
          :cx="centerPoint.x"
          :cy="centerPoint.y"
          :rx="rx"
          :ry="ry"
          fill="none"
          :style="backgroundStyle"
        />
        <ellipse :pathLength="perimeter" :cx="centerPoint.x" :cy="centerPoint.y" :rx="rx" :ry="ry" :style="style" />
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
      const x = this.width / 2
      const y = this.height / 2
      return { x, y }
    },
    style() {
      const strokeWidth = this.strokeWidth
      const fill = this.fillColor
      const stroke = this.strokeColor
      const strokeDasharray = this.perimeter
      const strokeDashoffset = this.dashoffset
      return { strokeWidth, fill, stroke, strokeDasharray, strokeDashoffset }
    },
    backgroundStyle() {
      const strokeWidth = this.strokeWidth
      const stroke = this.traiColor
      return { strokeWidth, stroke }
    },
    //椭圆周长 L=2πb+4(a-b)
    perimeter() {
      const x = this.rx
      const y = this.ry
      const d = x >= y ? y : x
      const L = 2 * Math.PI * d + 4 * Math.abs(x - y)
      return L
    },
    dashoffset() {
      const dashoffset = (this.perimeter * (100 - this.percentage)) / 100
      return dashoffset
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style></style>
