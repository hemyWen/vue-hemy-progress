/*
 * @Author: whm
 * @Date: 2022-08-02 15:04:28
 * @LastEditTime: 2022-08-03 16:55:19
 * @Description:混入
 */
export default {
  props: {
    // 进度条背景色
    strokeColor: {
      type: String,
      default: '#409eff'
    },
    // 	进度环背景的颜色
    traiColor: {
      type: String,
      default: '#eee'
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
    //进度条百分比
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },
    format: Function
  },
  computed: {
    content () {
      if (typeof this.format === 'function') {
        return this.format(this.percentage) || ''
      } else {
        return `${this.percentage}%`
      }
    }
  }
}
