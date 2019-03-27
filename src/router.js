import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      children: [
        {
          path: '/Company',
          name: 'Company',
          component: () => import('./views/Organization/Company')
        },
        {
          path: '/Department',
          name: 'Department',
          component: () => import('./views/Organization/Department')
        },
        {
          path: '/Personnel',
          name: 'Personnel',
          component: () => import('./views/Organization/Personnel')
        },
        {
          path: '/RoleManager',
          name: 'RoleManager',
          component: () => import('./views/Organization/RoleManager')
        },
      ]
    },
  ]
})

