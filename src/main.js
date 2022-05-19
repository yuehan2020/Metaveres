import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-plus
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import axios from 'axios'

// 引入全局样式
import '../styles/global.less'

// 注册全局组件

// 字体文件

// 引入字体
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

// naive ui
// import naive from 'naive-ui'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
app.use(ElementPlus)
app.use(axios)
app.use(ElementPlusIconsVue)

// app.use(naive)

// createApp(App).use(store).use(router).mount('#app')
