import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios'

// 引入公共样式
import "../styles/index.less"

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
// app.use(naive)

// createApp(App).use(store).use(router).mount('#app')
