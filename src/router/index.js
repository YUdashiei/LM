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
    path: '/orderConfirmation/:id',
    name: 'MyOrderConfirmation',
    component: () => import(/* webpackChunkName: "orderConfirmation" */ '../views/orderConfirmation/MyOrderConfirmation')
  }, {
    path: '/orderList',
    name: 'MyOrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/MyOrderList')
  }, {
    path: '/cartList',
    name: 'MyCartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/MyCartList')
  }, {
    path: '/personalInfo',
    name: 'MyPersonalInfo',
    component: () => import(/* webpackChunkName: "personalInfo" */ '../views/personalInfo/MyPersonalInfo')
  }, {
    path: '/myAddressList',
    name: 'MyAddressList',
    component: () => import(/* webpackChunkName: "myAddressList" */ '../views/myAddressList/MyAddressList')
  }, {
    path: '/chooseAddressList/:shopId',
    name: 'MyChooseAddressList',
    component: () => import(/* webpackChunkName: "chooseAddressList" */ '../views/chooseAddressList/MyChooseAddressList')
  }, {
    path: '/upsertAddress/:id?',
    name: 'UpsertAddress',
    component: () => import(/* webpackChunkName: "upsertAddress" */ '../views/upsertAddress/UpsertAddress')
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
