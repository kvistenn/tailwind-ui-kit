import { createRouter, createWebHistory } from 'vue-router'
import PlaygroundView from '@/views/PlaygroundView.vue'
import ComponentsView from '@/views/ComponentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'playground',
      component: PlaygroundView
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsView
    }
  ]
})

export default router
