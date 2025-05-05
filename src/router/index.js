import { createWebHistory, createRouter } from 'vue-router'
import Blog from '../components/Blog.vue'
import Login from '../components/Login.vue'
import Home from '../components/HomeStudent.vue'
import Biographical from '../components/Biographical.vue'
import Regedit from "@/components/Regedit.vue";
import Position from "@/components/Position.vue";
import PositionInfo from "@/components/PositionInfo.vue";
import BioView from "@/components/BioView.vue";
import MyRequest from "@/components/MyRequest.vue";
import LvShare from "@/components/LvShare.vue";
// import Router from 'vue-router';
const routes = [
    {
        path:'/',
        name:'Default',
        hidden: false,
        component:Home
    },{
        path:'/login',
        name:'Login',
        hidden: false,
        component:Login
    },{
        path:'/regedit',
        name:'Regedit',
        hidden: false,
        props: true,
        component:Regedit
    },{
        path:'/test',
        name:'Blog',
        hidden: false,
        component:Blog
    },{
        path:'/home',
        name:'Home',
        hidden: false,
        component:Home
    },{
        path:'/biographical',
        name:'Biographical',
        hidden: false,
        component:Biographical
    },{
        path:'/bioView',
        name:'Bioview',
        hidden: false,
        component:BioView
    },{
        path:'/position',
        name:'Position',
        hidden: false,
        component:Position
    },{
        path:'/positionInfo',
        name:'PositionInfo',
        hidden: false,
        component:PositionInfo
    },{
        path:'/myRequest',
        name:'MyRequest',
        hidden: false,
        component:MyRequest
    },{
        path:'/lvShare',
        name:'LvShare',
        hidden: false,
        component:LvShare
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