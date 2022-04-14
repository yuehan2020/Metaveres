import { createApp } from 'vue'
import Mobile from './Mobile.vue'
import router from './mobile.router'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios'
// 字体文件

// 引入字体
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const mobile = createApp(Mobile)
mobile.use(router)
mobile.mount('#mobile')
mobile.use(ElementPlus)
mobile.use(axios)