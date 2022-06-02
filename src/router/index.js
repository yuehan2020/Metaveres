import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'


const routerList = []
//引入路由
function importAll(r) {
    r.keys().forEach((key) => routerList.push(r(key).default))
}
//动态引入
//1. 路径
//2. 是否匹配子级文件
//3. 规则
importAll(require.context('./', false, /\.routes\.js/))
const routesPC = [
    ...routerList,
    {
        path: '/',
        name: 'Home',
        component: Home

    },
    {
        path: '/codep',
        name: 'codep',
        component: () => import('../views/CodeP.vue')
    },

    {
        path: '/backstage',
        name: 'Backstage',
        component: () => import('../views/backStage/Backstage.vue'),
    },
    {
        path: '/bHome',
        name: 'bHome',
        component: () => import('../views/backStage/bHome.vue'),
    }

]

const rotersM = [{
        path: '/',
        name: 'HomeM',
        component: () => import('../views/mobile/Home.vue')

    },
    {
        path: '/music',
        name: 'MusicM',
        component: () => import('../views/mobile/music/Music.vue')

    }

]

var routes = []
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    routes = rotersM
} else {
    routes = routesPC
}

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem('token')
    if (to.meta.require) {
        if (token) {
            // 允许进入
            next()
        } else {
            // 跳登录
        }
    }else {
        next()
    }
})

export default router