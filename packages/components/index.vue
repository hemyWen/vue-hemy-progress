<!--
 * @Author: whm
 * @Date: 2022-08-02 09:22:51
 * @LastEditTime: 2022-08-11 14:53:16
 * @Description: 进度条
-->
<template>
  <div class="progress-container">
    <ProgressLine v-if="type === 'line'" v-bind="$attrs" />
    <ProgressCircle v-else-if="type === 'circle'" v-bind="$attrs" />
    <ProgressRect v-else-if="type === 'rect'" v-bind="$attrs" />
    <ProgressEllipse v-else-if="type === 'ellipse'" v-bind="$attrs" />
    <ProgressPath v-else-if="type === 'path'" v-bind="$attrs" />
  </div>
</template>
<script>
import ProgressLine from './line.vue'
import ProgressCircle from './circle.vue'
import ProgressRect from './rect.vue'
import ProgressEllipse from './ellipse.vue'
import ProgressPath from './path.vue'
export default {
  name: 'HemyProgress',
  components: { ProgressLine, ProgressCircle, ProgressRect, ProgressEllipse, ProgressPath },
  props: {
    type: {
      type: String,
      default: 'line'
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
@import './progress.css';
</style>
