<template>
  <div id="app">
    <div class="container">
      <div class="item">
        <h3>线形</h3>
        <Progress type="line" :percentage="50" />
        <br />
        <Progress type="line" :percentage="40" strokeColor="red" traiColor="#ccc" :textStyle="{ color: 'blue' }" />
      </div>
      <div class="item">
        <h3>环形</h3>
        <Progress class="circle-item" type="circle" :percentage="70" />
      </div>
      <div class="item">
        <h3>扇形</h3>
        <Progress type="circle" :isFan="true" :percentage="50" />
      </div>
    </div>
  </div>
</template>

<script>
import Progress from './components/progress/index.vue'

export default {
  name: 'App',
  components: {
    Progress
  },
  data() {
    return {
      percentage: 50
    }
  }
}
</script>
<style>
.container {
  display: flex;
}
.item {
  width: 300px;
  text-align: center;
}
</style>
