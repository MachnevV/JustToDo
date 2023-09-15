import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/todolist',
    name: 'ToDoList',
    component: () => import('../views/ToDoList.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/loginform',
    name: 'LoginForm',
    component: () => import('../components/LoginForm.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: 'LoginForm' }
  }
})

export default router
