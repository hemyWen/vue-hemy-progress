/*
 * @Author: whm
 * @Date: 2022-08-11 09:37:53
 * @LastEditTime: 2022-08-11 09:45:38
 * @Description: 
 */

import HemyProgress from './progress/index'
const components = [
  HemyProgress
]
// 定义 install 方法
const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}