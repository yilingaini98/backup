import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Home,
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: () => import('./views/Home/Home')
        },
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
        {
          path: '/DataDictionary',
          name: 'RoleManager',
          component: () => import('./views/System/DataDictionary')
        },
      ]
    },
  ]
})

