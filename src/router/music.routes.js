// 音乐子模块
export default {
    redirect:'/musicHome',
    path: '/music',
    name: 'Music',
    component: () => import('../views/music/Music.vue'),
    children: [{
            path: '/musicHome',
            name: 'musicHome',
            component: () => import('../views/music/musicHome.vue')
        },
        {
            path: '/musicLogin',
            name: 'musicLogin',
            component: () => import('../views/music/musicLogin.vue')
        },
        {
            path: '/musicDT',
            name: 'musicDT',
            component: () => import('../views/music/musicDT.vue')
        },
        {
            path: '/musicMy',
            name: 'musicMy',
            component: () => import('../views/music/musicMy.vue')
        },
    ]
}

