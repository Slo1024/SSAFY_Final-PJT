import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '@/views/MainPageView.vue'
import SearchingResultView from '@/views/SearchingResultView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPageView
    },
    {
      path: '/searchresult/:value',
      name: 'searchresult',
      component: SearchingResultView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ],
})

export default router
