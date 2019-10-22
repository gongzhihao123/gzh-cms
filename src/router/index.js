import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

// const routerShow = () => import('../views/routerShow/index.vue')
const routerShow1 = () => import('../views/routerShow/1.vue')
const routerShow2 = () => import('../views/routerShow/2.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Home
    },
    {
      path: '/index',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/routerShow1',
          name: 'routerShow1',
          component: routerShow1,
          children: [
            {
              path: '/routerShow2',
              name: 'routerShow2',
              component: routerShow2
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
