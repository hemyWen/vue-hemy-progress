<template>
  <div id="app">
    <div class="container">
      <div class="normal">
        <div class="item">
          <h3>线形</h3>
          <Progress type="line" :percentage="50" />
          <br />
          <Progress type="line" :percentage="40" strokeColor="red" backStrokeColor="#ccc" />
        </div>
        <div class="item">
          <h3>环形</h3>
          <Progress class="circle-item" type="circle" fillColor="#ef8989" :percentage="70" />
          <Progress
            class="circle-item"
            type="circle"
            backStrokeColor="#ffff66"
            strokeColor="#48D1CC"
            :percentage="60"
          />
        </div>
        <div class="item">
          <h3>虚线样式</h3>
          <Progress
            style="width: 295px"
            type="line"
            :isDashed="true"
            :isBackDashed="true"
            :percentage="percentage"
            strokeColor="blue"
            backStrokeColor="skyblue"
          />
          <Progress
            type="circle"
            strokeColor="blue"
            backStrokeColor="skyblue"
            :percentage="percentage"
            :radius="80"
            :backStrokeWidth="20"
            :strokeWidth="20"
            :isDashed="true"
          />
          <Progress
            type="rect"
            :isDashed="true"
            :percentage="percentage"
            :width="200"
            :height="100"
            :backStrokeWidth="20"
            :strokeWidth="20"
            strokeColor="blue"
            backStrokeColor="skyblue"
          />
          <Progress
            type="ellipse"
            :isDashed="true"
            :strokeColor="['#6f7ad3', '#1989fa', '#5cb87a', '#e6a23c', '#f56c6c']"
            backStrokeColor="skyblue"
            :percentage="percentage"
            :backStrokeWidth="20"
            :strokeWidth="20"
            :width="300"
          />
        </div>
        <div class="item">
          <h3>自定义颜色</h3>
          <Progress
            type="line"
            :percentage="percentage"
            :strokeColor="['#6f7ad3', '#1989fa', '#5cb87a', '#e6a23c', '#f56c6c']"
          />
          <Progress
            class="circle-item"
            type="circle"
            strokeLinecap="round"
            :strokeColor="['#6f7ad3', '#1989fa', '#5cb87a', '#e6a23c', '#f56c6c']"
            :percentage="percentage"
            :radius="80"
            :strokeWidth="20"
            :backStrokeWidth="20"
          />
          <Progress
            type="circle"
            backStrokeColor="#FFC0CB"
            :strokeColor="['#6f7ad3', '#1989fa', '#5cb87a', '#e6a23c', '#f56c6c']"
            :isFan="true"
            :percentage="percentage"
            :textStyle="{ color: '#fff', fontSize: '25px' }"
          />

          <Progress
            type="rect"
            :percentage="percentage"
            :width="200"
            :height="100"
            :strokeWidth="10"
            :backStrokeWidth="10"
            strokeColor="#07c160"
            strokeLinecap="square"
            strokeLinejoin="miter"
            :strokeColor="['#6f7ad3', '#1989fa', '#5cb87a', '#e6a23c', '#f56c6c']"
          />
          <div>
            <button @click="decrease">-</button>
            <button style="margin-left: 10px" @click="increase">+</button>
          </div>
        </div>
        <div class="item">
          <h3>扇形</h3>
          <Progress
            type="circle"
            backStrokeColor="#FFC0CB"
            strokeColor="#663399"
            :isFan="true"
            :percentage="50"
            :textStyle="{ color: '#fff', fontSize: '25px' }"
          />

          <h4>外框为矩形时,半径设置为宽度的一半</h4>
          <Progress
            type="circle"
            backStrokeColor="#ff66ff"
            strokeColor="#9966ff"
            :width="200"
            :radius="100"
            :isFan="true"
            :percentage="63"
            :textStyle="{ color: '#fff', fontSize: '25px' }"
          />
        </div>
        <div class="item">
          <h3>矩形</h3>
          <Progress
            type="rect"
            :percentage="60"
            :strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fillColor="#330033"
            backStrokeColor="#66ffff"
            strokeColor="#996633"
            :textStyle="{ fontSize: '25px', color: '#fff' }"
            :format="(e) => '加载中' + e + '%'"
          />
          <Progress
            type="rect"
            :percentage="60"
            :width="200"
            :height="100"
            :strokeWidth="10"
            :backStrokeWidth="10"
            strokeColor="#07c160"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </div>
        <div class="item">
          <h3>椭圆</h3>
          <Progress
            type="ellipse"
            backStrokeColor="#445469"
            :percentage="20"
            :width="300"
            :strokeWidth="10"
            :backStrokeWidth="10"
          />
        </div>
      </div>
      <div class="complex">
        <div class="item">
          <h3>复杂图形</h3>
          <Progress
            d="m24.54542,111.05605l82.88714,0l25.61276,-84.69244l25.61278,84.69244l82.88713,0l-67.05698,52.34221l25.61409,84.69244l-67.05701,-52.34363l-67.057,52.34363l25.6141,-84.69244l-67.057,-52.34221l-0.00001,0z"
            type="path"
            backStrokeColor="#445469"
            :percentage="20"
            :width="430"
            :height="600"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeColor="#feb23c"
          />
        </div>
        <div class="item">
          <h3></h3>
          <Progress
            d="m11.91262,141.38784l38.41213,-81.1099l102.43234,0l38.41212,81.1099l-38.41212,81.1099l-102.43234,0l-38.41213,-81.1099z"
            type="path"
            backStrokeColor="#445469"
            fillColor="#5B9BA2"
            :strokeWidth="10"
            :percentage="20"
            :width="400"
            :height="600"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeColor="#feb23c"
          />
        </div>
        <div class="item">
          <h3></h3>
          <Progress
            d="m205.58865,207.26894c4.72522,-5.9053 9.24437,-12.71333 13.22542,-18.82466l-119.28624,-2.80423l-16.36196,24.14976l-51.83504,-2.07417c6.49499,-10.99509 13.61002,-23.91136 18.88519,-33.61275l-18.76473,-32.61405l55.30683,0l11.25319,20.37749l121.78832,0l-15.1069,-20.33188c4.66219,-6.40735 11.56197,-14.95808 15.30486,-19.44136l40.95944,51.81951l-41.05261,52.62338l-14.31579,-19.26703l0.00002,0.00001z"
            type="path"
            backStrokeColor="#445469"
            fillColor="none"
            :strokeWidth="5"
            :pathLength="2000"
            :percentage="20"
            :width="300"
            :height="600"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeColor="#feb23c"
          />
        </div>
        <div class="item">
          <h3>复杂图形+动画</h3>
          <Progress
            d="m24.54542,111.05605l82.88714,0l25.61276,-84.69244l25.61278,84.69244l82.88713,0l-67.05698,52.34221l25.61409,84.69244l-67.05701,-52.34363l-67.057,52.34363l25.6141,-84.69244l-67.057,-52.34221l-0.00001,0z"
            type="path"
            backStrokeColor="#445469"
            :strokeWidth="5"
            :percentage="100"
            :width="400"
            :height="600"
            :pathLength="1000"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeColor="#feb23c"
          />
        </div>
        <div class="item">
          <Progress
            class="progress-animation"
            d="m97.75122,120.76251l-13.74195,0c0,0 -10.68821,-0.98544 -13.74195,11.82507c-5.43957,9.23818 -15.60283,5.17339 -18.32257,8.86874c-3.00609,0 -9.92477,1.72446 -9.16134,5.91241c0.76344,4.18807 3.05385,4.92709 2.29031,5.91254c-0.76344,0.98544 -2.86291,21.18653 17.17747,20.69381c0,0 2.09947,5.91241 11.45164,0c0,0 2.09937,-2.21718 5.72572,1.47804c3.62645,3.69535 10.87904,6.40526 12.59685,5.91254c1.71771,-0.49272 12.59675,23.40359 12.59675,57.6468c0,34.24334 14.69632,57.89323 19.46777,59.1251c0,0 11.59472,47.66947 12.02415,90.16556c0,0 2.86291,17.9839 -9.73384,17.73748c-6.79939,7.29828 -9.80548,12.28694 -5.72582,11.82507c0,0 1.57463,3.32565 4.58062,2.9562c1.30172,-0.60006 -10.52115,10.9012 -5.72582,10.34691c0,0 2.09958,7.88329 10.30644,2.9562c0,0 12.59685,1.47817 13.74195,-8.86874c1.1452,-10.34691 1.71781,-27.16051 6.87103,-25.12818c0,0 0.76334,-82.52856 6.87093,-88.68739c0,0 30.33869,3.23257 65.27425,-23.65001c9.92477,-7.637 20.04028,-18.96935 21.75798,7.39057c1.71781,26.35992 32.44629,48.28547 36.64524,63.55934c4.19895,15.274 6.48926,9.85418 5.72572,45.82186c0,0 -7.25259,-2.21718 -12.59675,5.91254c-3.43551,4.43437 1.1452,4.43437 1.1452,4.43437c0,0 -2.67208,3.44893 5.72582,2.95633c0,0 1.1451,1.66276 6.87093,0c0,0 9.543,0.73902 8.01613,-8.86874c0,0 0.5726,-54.69073 3.43551,-51.7344c2.86291,2.9562 17.55913,20.20096 17.17737,57.6468c0,0 -6.48926,1.23174 -6.87093,10.34691c0,0 -3.24458,4.68067 1.1451,5.91254c0,0 6.15525,2.03233 8.01613,0c0,0 7.8254,3.44893 8.01613,-8.86887c0.19083,-12.31766 -6.29832,-55.06004 -3.43541,-65.03738c0,0 -24.62099,-18.47663 -28.62911,-75.38441c0,0 11.45164,48.28547 48.09688,39.90933c0,0 2.67208,-1.47804 -1.1452,-2.9562c-3.81728,-1.47817 -33.97316,3.69535 -41.22586,-44.34369c-5.2964,-34.36649 -1.28828,-38.06171 -18.32257,-51.7344c-22.90319,-28.26911 -79.97047,0.2463 -97.33867,-8.86874c-16.03226,-10.34691 -16.60486,-10.53163 -34.35483,-17.73748c-18.17949,-12.37937 -15.07789,-26.60622 -28.62901,-45.82186c-10.37808,-18.01463 -10.49727,-16.01302 -11.45164,-17.73748c-0.95437,-1.72459 -0.19083,-9.85418 -12.59675,-11.82507z"
            type="path"
            backStrokeColor="#0a0b16"
            :strokeWidth="10"
            :percentage="100"
            :width="600"
            :height="800"
            :pathLength="1000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </div>
        <div class="item">
          <Progress
            class="progress-animation"
            d="m151.58526,148.1539c44.11559,-129.94309 216.96193,0 0,167.06968c-216.96193,-167.06968 -44.11559,-297.01277 0,-167.06968z"
            type="path"
            fillColor="red"
            backStrokeColor="none"
            strokeColor="black"
            :strokeWidth="10"
            :percentage="100"
            :width="300"
            :height="400"
            :pathLength="1000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from '../packages/components'
export default {
  name: 'App',
  components: {
    Progress
  },
  data() {
    return {
      percentage: 50
    }
  },
  methods: {
    decrease() {
      this.percentage -= 10
      if (this.percentage <= 0) {
        this.percentage = 0
      }
    },
    increase() {
      this.percentage += 10
      if (this.percentage >= 100) {
        this.percentage = 100
      }
    }
  }
}
</script>
<style>
.normal,
.complex {
  display: flex;
  overflow: auto;
}
.item {
  width: 300px;
  text-align: center;
}
.progress-animation .progress-path__item {
  animation: mypath 5s linear infinite;
}
@keyframes mypath {
  from {
    stroke-dashoffset: 1000;
  }

  to {
    stroke-dashoffset: 0;
  }
}
</style>
