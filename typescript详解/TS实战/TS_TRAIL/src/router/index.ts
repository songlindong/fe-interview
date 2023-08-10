import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig } from 'vue-router'

const main: AsyncComponent = (): any => import('@/pages/main.vue')

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'main',
    component: main
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
