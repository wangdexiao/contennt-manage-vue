import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/layout/Home.vue'
import login from '../views/login'
import ContentAdd from '../views/ContentAdd'
import ContentPreview from '../views/ContentPreview'
import HomeHeader from '../components/layout/HomeHeader'
import Header from '../components/layout/HomeHeader'
import store from '../store'
import ssoconfig from '../configs/sso'

Vue.use(VueRouter)

const routes = [
  //登录界面
  {
    path: '/login',
    component : login,
    props: (route) => ({ query: route.query.content })
  },
  {
    path: '/home-header',
    component: HomeHeader
  },
  // {
  //   path: '',
  //   redirect:"/"
  // },

  //home 页
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/layout/Home'),
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    redirect: '/content-manage',
    children: [
      // 内容管理页面
      {
        path: 'content-manage',
        name: 'ContentManage',
        component: () => import('../views/ContentManage'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      //demo 富文本页面
      {
        path: 'rich-text',
        name: 'RichText',
        component: () => import('../components/RichTxt'),
        meta: {
          requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      //添加内容页面
      {
        path: 'content-add',
        component: () => import('../views/ContentAdd'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      //预览内容页面
      {
        path: 'content-preview',
        component: () => import('../views/ContentPreview'),
        props: (route) => ({ query: route.query.content }),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
    ]

  },
];



const router = new VueRouter({
  routes,
  mode: 'history'
})


// 定义完路由后，我们主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断。

router.beforeResolve((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    // console.log('用户信息:' + store.getters.getUserInfo)
    if (store.getters.getUserInfo !== null && store.getters.getUserInfo !== undefined) {  // 通过vuex state获取当前的token是否存在
      next();
    } else {
      // next({
      //   path: '/login',
      //   query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      // })
      sessionStorage.setItem("visitUri", window.location.href);
      ssoconfig.getAuthorizeCode()
    }
  }
  else {
    next();
  }
})

export default router
