import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/Login.vue'
import mainStore from '../store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{isRouterAuth:true},
      component: HomeView
    },
    {
      path: "/login",
      name: "login",
      meta:{isRouterAuth:true},
      component: LoginPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
	//console.log('-->router to:', to)
  if(to.meta.isRouterAuth){
    if (mainStore().token === '' && to.name !== 'login') {
      next('/login') 
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
