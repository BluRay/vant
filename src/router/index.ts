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
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/config',
      name: 'config',
      component: () => import('../views/ConfigView.vue')
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
