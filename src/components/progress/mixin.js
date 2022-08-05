/*
 * @Author: whm
 * @Date: 2022-08-02 15:04:28
 * @LastEditTime: 2022-08-05 16:36:26
 * @Description:混入
 */
export default {
  props: {
    //进度条百分比
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },
    //闭合图形颜色,type!==line生效
    fillColor: {
      type: String,
      default: 'none'
    },
    // 进度条背景色
    strokeColor: {
      type: String,
      default: '#409eff'
    },
    // 	进度环背景的颜色
    traiColor: {
      type: String,
      default: '#ccc'
    },
    //文字样式
    textStyle: {
      type: Object,
      default: () => ({})
    },
    //是否显示文字
    showText: {
      type: Boolean,
      default: true
    },
    format: Function,
    width: {
      type: Number,
      default: 200
    },
    height: {
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
      default: 'butt'
    },
    //线段连接处的样式
    strokeLinejoin: {
      type: String,
      default: 'miter'
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
    },
    //圆角半径,type=rect时生效
    borderRadius: {
      type: Number,
      default: 0
    },
    //type=ellispe椭圆时的长半轴
    rx: {
      type: Number,
      default: 100
    },
    //type=ellispe椭圆时的短半轴
    ry: {
      type: Number,
      default: 50
    }
  },
  computed: {
    content () {
      if (typeof this.format === 'function') {
        return this.format(this.percentage) || ''
      } else {
        return `${this.percentage}%`
      }
    },
    svgTextStyle () {
      return { ...this.textStyle, fill: this.textStyle.color }
    },
  }
}
