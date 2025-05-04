import { createWebHistory, createRouter } from 'vue-router'
import Blog from '../components/Blog.vue'
import Login from '../components/Login.vue'
import Home from '../components/HomeStudent.vue'
// import Router from 'vue-router';
const routes = [
    {
        path:'/home',
        name:'Login',
        hidden: false,
        component:Login
    },{
        path:'/test',
        name:'Blog',
        hidden: false,
        component:Blog
    },{
        path:'/',
        name:'Home',
        hidden: false,
        component:Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
});

export default router;