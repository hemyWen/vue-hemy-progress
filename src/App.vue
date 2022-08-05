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
        <Progress class="circle-item" type="circle" fillColor="#ef8989" :percentage="70" />
      </div>
      <div class="item">
        <h3>扇形</h3>
        <Progress type="circle" :isFan="true" :percentage="50" />

        <h4>外框为矩形时,半径设置为宽度的一半</h4>
        <Progress type="circle" :width="200" :radius="100" :isFan="true" :percentage="63" />
      </div>
      <div class="item">
        <h3>矩形</h3>
        <Progress
          type="rect"
          :percentage="60"
          :strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fillColor="#fea500"
        />
        <Progress
          type="rect"
          :percentage="60"
          :width="200"
          :height="100"
          :strokeWidth="10"
          strokeColor="#07c160"
          strokeLinecap="square"
          strokeLinejoin="butt"
        />
      </div>
      <div class="item">
        <h3>椭圆</h3>
        <Progress type="ellipse" fillColor="#ff66cc" :percentage="20" :width="300" />
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
