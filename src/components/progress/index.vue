<!--
 * @Author: whm
 * @Date: 2022-08-02 09:22:51
 * @LastEditTime: 2022-08-05 09:59:59
 * @Description: 进度条
-->
<template>
  <div class="progress-container">
    <ProgressLine v-if="type === 'line'" v-bind="$attrs" />
    <ProgressCircle v-else-if="type === 'circle'" v-bind="$attrs" />
    <ProgressRect v-else-if="type === 'rect'" v-bind="$attrs" />
    <ProgressEllipse v-else-if="type === 'ellipse'" v-bind="$attrs" />
  </div>
</template>
<script>
import ProgressLine from './line.vue'
import ProgressCircle from './circle.vue'
import ProgressRect from './rect.vue'
import ProgressEllipse from './ellipse.vue'
export default {
  components: { ProgressLine, ProgressCircle, ProgressRect, ProgressEllipse },
  props: {
    type: {
      type: String,
      default: 'line'
    }
  },
  data() {
    return {}
  },
  methods: {
    endCount() {}
  }
}
</script>
<style scoped>
@import './progress.css';
</style>
