import FontStyle from './vue-font-style.vue'

// 导出模块



FontStyle.install = function (Vue) {
  Vue.component('font-style', FontStyle)
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(FontStyle);
  }
}

export default FontStyle