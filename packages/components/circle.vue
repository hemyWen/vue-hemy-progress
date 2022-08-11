<!--
 * @Author: whm
 * @Date: 2022-08-10 09:15:49
 * @LastEditTime: 2022-08-11 11:28:53
 * @Description: 
-->
<!--
 * @Author: whm
 * @Date: 2022-08-02 11:55:30
 * @LastEditTime: 2022-08-08 14:18:42
 * @Description: 
-->
<template>
  <div class="progress-circle">
    <svg :width="width" :height="width">
      <!--  环形背景 -->
      <circle
        class="progress-circle__back"
        :cx="centerPoint.x"
        :cy="centerPoint.y"
        :r="backgroundCircleStyle.radius"
        fill="none"
        :style="backgroundCircleStyle"
      ></circle>
      <!--  环形 -->
      <circle
        class="progress-circle__item"
        :cx="centerPoint.x"
        :cy="centerPoint.y"
        :r="otherAttrs.radius"
        :style="circleStyle"
      ></circle>
      <text
        class="progress-circle-text"
        v-if="showText"
        :x="centerPoint.x"
        :y="centerPoint.y"
        text-anchor="middle"
        dominant-baseline="middle"
        :style="svgTextStyle"
      >
        {{ content }}
      </text>
    </svg>
  </div>
</template>
<script>
import mixin from './mixin.js'
export default {
  mixins: [mixin],
  computed: {
    centerPoint() {
      const x = this.width / 2
      const y = x
      return { x, y }
    },
    //环形周长
    perimeter() {
      return 2 * Math.PI * this.radius
    },
    dashoffset() {
      const dashoffset = '' + (this.perimeter * (100 - this.percentage)) / 100
      return dashoffset
    },
    //其他属性
    otherAttrs() {
      //当为扇形时,边宽为半径两倍,线帽为butt
      if (this.isFan) {
        return { radius: this.radius, strokeWidth: this.radius * 2, strokeLinecap: 'butt' }
      } else {
        return { radius: this.radius, strokeWidth: this.strokeWidth, strokeLinecap: this.strokeLinecap }
      }
    },

    circleStyle() {
      const { strokeLinecap, strokeWidth } = this.otherAttrs
      const fill = this.fillColor
      const stroke = this.currentStrokeColor
      const strokeDasharray = this.perimeter
      const strokeDashoffset = this.dashoffset
      return { strokeLinecap, strokeWidth, fill, stroke, strokeDasharray, strokeDashoffset }
    },
    backgroundCircleStyle() {
      const { strokeLinecap, radius, backStrokeColor } = this.$props
      const stroke = backStrokeColor
      let backStrokeWidth = this.$props.backStrokeWidth
      if (this.isFan) {
        backStrokeWidth = radius * 2
      }
      return { radius, strokeLinecap, strokeWidth: backStrokeWidth, stroke }
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
