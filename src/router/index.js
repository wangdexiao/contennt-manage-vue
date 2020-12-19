import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/layout/Home.vue'
import ContentAdd from '../views/ContentAdd'
import ContentPreview from '../views/ContentPreview'
import HomeHeader from '../components/layout/HomeHeader'
import Header from '../components/layout/HomeHeader'
import store from '../store'
import {authorizeCode} from '../network/apis'
import ElementUI from 'element-ui'

Vue.use(VueRouter)

const routes = [

  {
    path: '/home-header',
    component: HomeHeader
  },
  //预览内容页面
  {
    path: '/content-preview',
    component: () => import('../views/ContentPreview'),
    props: (route) => ({ query: route.query.content }),
  },
  //home 页
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/layout/Home'),
    redirect: '/content-manage',
    children: [
      // 内容管理页面
      {
        path: 'content-manage',
        name: 'ContentManage',
        component: () => import('../views/ContentManage'),

      },
      //demo 富文本页面
      {
        path: 'rich-text',
        name: 'RichText',
        component: () => import('../components/RichTxt'),

      },
      //添加内容页面
      {
        path: 'content-add',
        component: () => import('../views/ContentAdd'),

      },

    ]

  },



];



const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
