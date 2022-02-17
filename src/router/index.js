import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: ROUTER_MODE, // eslint-disable-line
  base: ROUTER_BASE, // eslint-disable-line
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue'),
      redirect: 'demo'
    },
    {
      path: '/convention',
      component: () => import('../views/convention.vue')
    },
    {
      path: '/demo',
      component: () => import('../views/demo.vue')
    }
  ]
})
//  导航守卫
router.beforeEach((to, from, next) => {
  // ...
  next()
})

export default router
