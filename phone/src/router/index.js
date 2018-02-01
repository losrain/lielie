import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import artice from '@/view/artice'
import acticelist from '@/view/acticelist'
// user
import user from '@/view/user'
import userLogin from '@/view/user/login'
import useRegister from '@/view/user/register'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/user'
    },
    {
      path:'/user',
      component:user,
      redirect: '/user/login',
      children: [{
        path: 'login',
        name: 'userLogin',
        component: userLogin
      },{
        path: 'useRegister',
        name: 'useRegister',
        component: useRegister
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },  {
      path: '/artice',
      name: 'artice',
      component: artice
    }, {
      path: '/acticelist',
      name: 'acticelist',
      component: acticelist
    }
  ]
})
