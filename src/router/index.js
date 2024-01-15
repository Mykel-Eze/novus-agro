import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/Default.vue'

// Pages
import HomePage from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomePage,
        },
      ]
    },
  ]
})

export default router
