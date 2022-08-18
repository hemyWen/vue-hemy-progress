<!--
 * @Author: whm
 * @Date: 2022-08-08 09:00:08
 * @LastEditTime: 2022-08-17 16:43:11
 * @Description: 复杂图形
-->
<template>
  <div class="progress-path">
    <svg :width="width" :height="height">
      <mask v-if="isDashed" :id="maskID">
        <path class="progress-all__mask" :pathLength="pathLength" :d="d" :style="maskStyle" />
      </mask>
      <g>
        <path class="progress-path__back" :pathLength="pathLength" fill="none" :d="d" :style="backgroundStyle" />
        <path class="progress-path__item" :pathLength="pathLength" :d="d" :style="style" />
      </g>
    </svg>
  </div>
</template>
<script>
import mixin from './mixin.js'
export default {
  mixins: [mixin],
  computed: {
    perimeter() {
      return this.pathLength
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
