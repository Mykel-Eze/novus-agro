import { createRouter, createWebHistory } from 'vue-router'
import AOS from "aos";
import 'aos/dist/aos.css';

// Layouts
import DefaultLayout from '@/layouts/Default.vue'

// Pages
import HomePage from '../views/Home.vue'
import AboutPage from '../views/About.vue'

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
        {
          path: 'about',
          name: 'About',
          component: AboutPage,
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  AOS.init({
    once: false
  }); // Initialize AOS
  next();
});

export default router
