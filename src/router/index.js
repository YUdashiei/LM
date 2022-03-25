import { createRouter, createWebHashHistory } from 'vue-router'
import MyHome from '../views/home/MyHome.vue'
import MyLogin from '../views/login/MyLogin.vue'

const routes = [
  {
    path: '/',
    name: 'MyHome',
    component: MyHome
  },
  {
    path: '/login',
    name: 'MyLogin',
    component: MyLogin
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
