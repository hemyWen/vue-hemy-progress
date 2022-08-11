<!--
 * @Author: whm
 * @Date: 2022-08-05 09:55:37
 * @LastEditTime: 2022-08-10 15:53:31
 * @Description: 椭圆
-->
<template>
  <div class="progress-ellipse">
    <svg :width="width" :height="height">
      <g>
        <ellipse
          class="progress-ellipse__back"
          :pathLength="perimeter"
          :cx="centerPoint.x"
          :cy="centerPoint.y"
          :rx="rx"
          :ry="ry"
          fill="none"
          :style="backgroundStyle"
        />
        <ellipse
          class="progress-ellipse__item"
          :pathLength="perimeter"
          :cx="centerPoint.x"
          :cy="centerPoint.y"
          :rx="rx"
          :ry="ry"
          :style="style"
        />
        <text
          class="progress-ellipse__text"
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
      const x = this.width / 2
      const y = this.height / 2
      return { x, y }
    },
    style() {
      const x = this.rx
      const y = this.ry
      const d = x > y ? x : y
      const strokeWidth = this.isFan ? d : this.strokeWidth
      const fill = this.fillColor
      const stroke = this.currentStrokeColor
      const strokeDasharray = this.perimeter
      const strokeDashoffset = this.dashoffset
      const strokeLinecap = this.strokeLinecap
      const strokeLinejoin = this.strokeLinejoin
      return { strokeWidth, fill, stroke, strokeDasharray, strokeDashoffset, strokeLinecap, strokeLinejoin }
    },
    backgroundStyle() {
      const x = this.rx
      const y = this.ry
      const d = x > y ? x : y
      const strokeWidth = this.isFan ? d : this.backStrokeWidth
      const stroke = this.backStrokeColor
      const strokeLinecap = this.strokeLinecap
      const strokeLinejoin = this.strokeLinejoin
      return { strokeWidth, stroke, strokeLinecap, strokeLinejoin }
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
