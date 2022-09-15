<!--
 * @Author: whm
 * @Date: 2022-08-08 09:00:08
 * @LastEditTime: 2022-09-15 10:29:01
 * @Description: 复杂图形
-->
<template>
  <div class="svg-container">
    <svg :width="width" :height="height">
      <mask v-if="isDashed" :id="maskID">
        <path class="progress-all__mask" :pathLength="pathLength" :d="d" :style="maskStyle" />
      </mask>
      <g>
        <path class="progress-path__back" :pathLength="pathLength" fill="none" :d="d" :style="backgroundStyle" />
        <path class="progress-path__item" :pathLength="pathLength" :d="d" :style="style" />
        <text
          class="progress-path__text"
          v-if="isShowText"
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
    <div class="slot-container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import mixin from './mixin.js'
export default {
  mixins: [mixin],
  computed: {
    perimeter() {
      return this.pathLength
    },
    centerPoint() {
      const x = this.width / 2
      const y = this.height / 2
      return { x, y }
    }
  },
  data() {
    return {
      type: 'path',
      maskID: 'progress_path_mask'
    }
  }
}
</script>
