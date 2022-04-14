import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/shop/:id',
    name: 'MyShop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/MyShop')
  }, {
    path: '/',
    name: 'MyHome',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/MyHome')
  }, {
    path: '/ordercomfirmation/:id',
    name: 'MyOrderComfirmation',
    component: () => import(/* webpackChunkName: "ordercomfirmation" */ '../views/ordercomfirmation/MyOrderComfirmation')
  }, {
    path: '/cartList',
    name: 'MyCartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartlist/MyCartList')
  }, {
    path: '/register',
    name: 'MyRegister',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/MyRegister'),
    beforeEnter (to, from, next) {
      const { isMyLogin } = localStorage
      isMyLogin ? next({ name: 'MyHome' }) : next()
    }
  }, {
    path: '/login',
    name: 'MyLogin',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/MyLogin'),
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
