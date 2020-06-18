import FontStyle from './vue-font-style.vue'

// 导出模块


//global 情况下 自动安装
// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.component('font-style', FontStyle)
// }


FontStyle.install = function (Vue) {
  Vue.component('font-style', FontStyle)
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(FontStyle);
  }
}

export default FontStyle