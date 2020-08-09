import Vue from 'vue'
import Router from 'vue-router'

import notFound from '../views/404';


Vue.use(Router)

export default new Router({
  base: '/guagua',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue'),
      // meta:{isShow: true},
      // beforeEnter: (to, from, next) => {
      //   if(localStorage.getItem('userId')){
      //     next()
      //   }else {
      //     next('/login')
      //   }
      // }
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '*',
      component:notFound
    }
    
    /**
     * 
     * 
     *     {
      path: '/',
      name: 'index-layout',
      component: () => import('./layout/Index.vue'),
      children: [
        {
          path: '/',
          name: 'index',
          component: () => import('./views/index/Index.vue')
        },
        {
          path: '/imagehost',
          name: 'imagehost',
          component: () => import('./views/imagehost/Index.vue')
        },
        {
          path: '/configview',
          name: 'configview',
          component: () => import('./views/configview/Index.vue')
        },
        {
          path: '/userManagement',
          name: 'userManagement',
          component: () => import('./views/userManagement/Index.vue')
        }
      ]
    },
     */
  ]
})
