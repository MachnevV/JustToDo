import { createRouter, createWebHistory } from "vue-router";
import Landing from '../views/Landing.vue'

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/todolist',
        name: 'ToDoList',
        component: () => import('../views/ToDoList.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router