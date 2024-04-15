import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ComponentsView from '@/views/ComponentsView.vue'
import LayoutsView from '@/views/LayoutsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsView
    },
    {
      path: '/layouts',
      name: 'layouts',
      component: LayoutsView
    }
  ]
})

export default router
