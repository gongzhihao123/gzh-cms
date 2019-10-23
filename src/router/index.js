import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

// const routerShow = () => import('../views/routerShow/index.vue')
const routerShow1 = () => import('../views/routerShow/1.vue')
const routerShow2 = () => import('../views/routerShow/2.vue')
const routerShow3 = () => import('../views/routerShow/3.vue')
const about = () => import('../views/about/index.vue')
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: Home
    // },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { isNav: true, title: '路由嵌套' },
      children: [
        {
          path: '/routerShow1',
          name: 'routerShow1',
          component: routerShow1,
          meta: { isHidden: false, title: '路由1' },
          children: [
            {
              path: '/routerShow2',
              name: 'routerShow2',
              component: routerShow2,
              meta: { title: '路由2' },
              children: []
            }
          ]
        },
        {
          path: '/routerShow3',
          name: 'routerShow3',
          component: routerShow3,
          meta: { isHidden: true, title: '路由3' }
        }
      ]
    },
    {
      path: '/about',
      name: '其他县市',
      component: Home,
      meta: { isNav: false, title: '其他' },
      children: [
        {
          path: '/about',
          name: '其他',
          component: about
        }
      ]
    }
  ]
})
