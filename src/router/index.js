import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login'
import ContentManage from '../views/ContentManage'
import ContentAdd from '../views/ContentAdd'
import ContentPreview from '../views/ContentPreview'
import RichText from '../views/RichText'

Vue.use(VueRouter)

const routes = [
  //登录界面
  {
    path: '/login',
    component : login,
  },
  //home 页
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 内容管理页面
  {
    path: '/content-manage',
    name: 'ContentManage',
    component: ContentManage
  },
  //demo 富文本页面
  {
    path: '/rich-text',
    name: 'RichText',
    component: RichText
  },
  //添加内容页面
  {
    path: '/content-add',
    component : ContentAdd
  },
  //预览内容页面
  {
    path: '/content-preview',
    component : ContentPreview,
    props: (route) => ({ query: route.query.content })
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
