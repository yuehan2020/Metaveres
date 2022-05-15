import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routesPC = [{
        path: '/',
        name: 'Home',
        component: Home,
        // children: [{
        //         path: '/codep',
        //         name: 'codep',
        //         component: () => import('../views/CodeP.vue')
        //     }

        // ]
    },
    {
        path: '/codep',
        name: 'codep',
        component: () => import('../views/CodeP.vue')
    },
    // 音乐路由
    {
        path: '/music',
        name: 'Music',
        component: () => import('../views/Music')
    },
    {
        path: '/shop',
        name: 'Shop',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Shop.vue')
    },
    {
        path: '/backstage',
        name: 'Backstage',
        component: () => import('../views/backStage/Backstage.vue'),
        children: [{
                path: 'bHome',
                name: 'bHome',
                component: () => import('../views/backStage/bHome.vue')
            }

        ]
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

    },

]

var routes = [];
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
// router.beforeEach((to, from, next) => {
//   if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
//     window.location.href = '/mobile.html/'
//     return
//   }
//   next()
// })

export default router