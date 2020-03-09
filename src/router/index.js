import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout.vue'

Vue.use(Router)

const routes = [
	{
		path: '/',
		component: Layout,
		redirect: '/login',
		children: [{
			path: '/login',
    		component: () => import('@/views/login/index')
		}, {
		    path: '/home',
		    component: () => import('@/views/home/index'),
   		}, {
		    path: '/success',
		    component: () => import('@/views/success/success'),
   		}, {
		    path: '/failed',
		    component: () => import('@/views/failed/failed'),
   		}]
	}
]

const routerObj = new Router({
  routes,
  // 回到上次离开页面时滚动的位置
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

//routerObj.beforeEach((to, from, next) => {
//let path = to.path
//checkSession().then(res => {
//  // session过期的情况
//  if (path !== '/login' && !res.success) {
//    routerObj.push('/login')
//  } else {
//    next()
//  }
//})
//})

export default routerObj
