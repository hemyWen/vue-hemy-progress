<!--
 * @Author: whm
 * @Date: 2022-08-02 09:22:51
 * @LastEditTime: 2022-08-03 16:47:53
 * @Description: 进度条
-->
<template>
  <div class="progress-container">
    <ProgressLine v-if="type === 'line'" v-bind="$attrs" />
    <ProgressCircle v-else-if="type === 'circle'" v-bind="$attrs" />
    <ProgressRect v-else-if="type === 'rect'" v-bind="$attrs" />
  </div>
</template>
<script>
import ProgressLine from './line.vue'
import ProgressCircle from './circle.vue'
import ProgressRect from './rect.vue'
export default {
  components: { ProgressLine, ProgressCircle, ProgressRect },
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
