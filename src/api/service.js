// 统一处理所有接口
import axios from 'axios';

// token 哈希算法随机生成
function getTokenByLoacl() {
    let token = sessionStorage.getItem('token')
    return token
}

function getCookie() {
    let cookie = sessionStorage.getItem('cookie') ? sessionStorage.getItem('cookie').find(item => {
        return item.indexOf('MUSIC_U') !== -1
    }) : ''
    return cookie
}

// 创建一个axios的实例
const service = axios.create({
    baseURL: '/api', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// 请求拦截器,携带的token字段
service.interceptors.request.use(
    config => {

        if (getTokenByLoacl()) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            // config.headers['X-Token'] = getToken()
            //设置token
            config.headers['token'] = getTokenByLoacl()
            // 设置cookie
            config.headers['cookie'] = getCookie()
        } else {
            //   跳转到登录页面
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    response => {
        let res = response.data
        // 服务器响应成功干什么
        if (res.code == '200') {

        }
        return Promise.resolve(res)
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service