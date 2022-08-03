<!--
 * @Author: whm
 * @Date: 2022-08-02 11:55:30
 * @LastEditTime: 2022-08-03 17:18:29
 * @Description: 
-->
<template>
  <div class="progress-circle">
    <svg :width="width" :height="width">
      <!--  环形背景 -->
      <circle
        class="progress-circle-item"
        :cx="centerPoint.x"
        :cy="centerPoint.y"
        :r="otherAttrs.radius"
        fill="none"
        :stroke-linecap="otherAttrs.strokeLinecap"
        :stroke-width="otherAttrs.strokeWidth"
        :stroke="traiColor"
      ></circle>
      <!--  环形 -->
      <circle
        class="progress-circle-item"
        :cx="centerPoint.x"
        :cy="centerPoint.y"
        :r="otherAttrs.radius"
        :stroke-linecap="otherAttrs.strokeLinecap"
        fill="none"
        :stroke-width="otherAttrs.strokeWidth"
        :stroke="strokeColor"
        :stroke-dasharray="perimeter"
        :stroke-dashoffset="dashoffset"
      ></circle>
      <text
        class="progress-circle-text"
        v-if="showText"
        :x="centerPoint.x"
        :y="centerPoint.y"
        text-anchor="middle"
        dominant-baseline="middle"
        :style="circleTextStyle"
      >
        {{ content }}
      </text>
    </svg>
  </div>
</template>
<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  props: {
    //画布大小,type=circle时生效
    width: {
      type: Number,
      default: 200
    },
    //环形宽度
    strokeWidth: {
      type: Number,
      default: 10
    },
    //环形条线帽
    strokeLinecap: {
      type: String,
      default: 'round'
    },
    //环形半径
    radius: {
      type: Number,
      default: 50
    },
    //是否为扇形
    isFan: {
      type: Boolean,
      default: false
    }
  },
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
    circleTextStyle() {
      return { ...this.textStyle, fill: this.textStyle.color }
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
.progress-circle-item {
  transform: rotate(-90deg);
  transform-origin: center;
  transform-box: fill-box;
  transition: width 0.1s ease;
}
</style>
