import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)
const login = () => import('../views/login/index.vue')
// const routerShow = () => import('../views/routerShow/index.vue')
// const routerShow1 = () => import('../views/routerShow/1.vue')
const routerShow2 = () => import('../views/routerShow/2.vue')
const routerShow3 = () => import('../views/routerShow/3.vue')
const formShow = () => import('../views/formShow/index.vue')
const chart = () => import('../views/chart/index.vue')

const richText = () => import('../views/richText/index.vue')
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/chart',
      name: 'chart',
      component: Home,
      meta: { isNav: false, title: '图表显示' },
      children: [
        {
          path: '/chart',
          name: '图表显示',
          component: chart
        }
      ]
    },
    {
      path: '/router',
      name: 'home',
      component: Home,
      meta: { isNav: true, title: '路由嵌套' },
      children: [
        {
          path: '/routerShow1',
          name: 'routerShow1',
          component: routerShow2,
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
      path: '/formShow',
      name: '表单展示',
      component: Home,
      meta: { isNav: false, title: '表单' },
      children: [
        {
          path: '/formShow',
          name: '表单表格',
          component: formShow
        }
      ]
    },
    {
      path: '/richText',
      name: '富文本',
      component: Home,
      meta: { isNav: false, title: '富文本编辑' },
      children: [
        {
          path: '/richText',
          name: '富文本编辑',
          component: richText
        }
      ]
    }
  ]
})
