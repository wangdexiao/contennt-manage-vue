import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 完整引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//引入百度富文本
import VueUeditorWrap from 'vue-ueditor-wrap'
Vue.component('vue-ueditor-wrap', VueUeditorWrap)


Vue.config.productionTip = false
// Vue.prototype.$axios = Axios;    // 全局变量


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
