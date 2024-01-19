import { createRouter, createWebHistory } from 'vue-router'
import AOS from "aos";
import 'aos/dist/aos.css';

// Layouts
import DefaultLayout from '@/layouts/Default.vue'

// Pages
import HomePage from '../views/Home.vue'
import AboutPage from '../views/About.vue'
import FaqPage from '../views/Faq.vue'
import TeamPage from '../views/Team.vue'
import ServicesPage from '../views/Services.vue'
import ContactPage from '../views/Contact.vue'
import CareersPage from '../views/Careers.vue'

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
        {
          path: 'faq',
          name: 'Faq',
          component: FaqPage,
        },
        {
          path: 'team',
          name: 'Team',
          component: TeamPage,
        },
        {
          path: 'services',
          name: 'Services',
          component: ServicesPage,
        },
        {
          path: 'contact',
          name: 'Contact',
          component: ContactPage,
        },
        {
          path: 'careers',
          name: 'Careers',
          component: CareersPage,
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
