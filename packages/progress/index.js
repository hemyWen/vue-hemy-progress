/*
 * @Author: whm
 * @Date: 2022-08-11 09:40:36
 * @LastEditTime: 2022-08-11 09:45:30
 * @Description: 导出组件
 */
import HemyProgress from './src/index.vue'
HemyProgress.install = function (Vue) {
  Vue.component(HemyProgress.name, HemyProgress)
}

export default HemyProgress