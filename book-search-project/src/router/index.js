import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '@/views/MainPageView.vue'
import SearchingResultView from '@/views/SearchingResultView.vue'

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
    }
  ],
})

export default router
