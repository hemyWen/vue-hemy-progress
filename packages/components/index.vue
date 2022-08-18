<!--
 * @Author: whm
 * @Date: 2022-08-02 09:22:51
 * @LastEditTime: 2022-08-17 15:41:39
 * @Description: 进度条
-->
<template>
  <div class="progress-container">
    <ProgressLine v-if="type === 'line'" v-bind="$attrs" :type="type" />
    <ProgressCircle v-else-if="type === 'circle'" v-bind="$attrs" :type="type" />
    <ProgressRect v-else-if="type === 'rect'" v-bind="$attrs" :type="type" />
    <ProgressEllipse v-else-if="type === 'ellipse'" v-bind="$attrs" :type="type" />
    <ProgressPath v-else-if="type === 'path'" v-bind="$attrs" :type="type" />
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
