import { createRouter, createWebHashHistory } from 'vue-router'
import MyHome from '../views/home/MyHome.vue'
import MyLogin from '../views/login/MyLogin.vue'
import MyRegister from '../views/register/MyRegister.vue'

const routes = [
  {
    path: '/',
    name: 'MyHome',
    component: MyHome
  }, {
    path: '/register',
    name: 'MyRegister',
    component: MyRegister,
    beforeEnter (to, from, next) {
      const { isMyLogin } = localStorage
      isMyLogin ? next({ name: 'MyHome' }) : next()
    }
  }, {
    path: '/login',
    name: 'MyLogin',
    component: MyLogin,
    beforeEnter (to, from, next) {
      const { isMyLogin } = localStorage
      isMyLogin ? next({ name: 'MyHome' }) : next()
    }
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

router.beforeEach((to, from, next) => {
  const { isMyLogin } = localStorage
  const { name } = to
  const isMyLoginOrMyRegister = (name === 'MyLogin' || name === 'MyRegister');
  (isMyLogin || isMyLoginOrMyRegister) ? next() : next({ name: 'MyLogin' })
})
export default router
