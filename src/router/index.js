import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login',
    component: () => import('../components/layouts/BaseLayout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/HomePage.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/admin/auth/LoginPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
