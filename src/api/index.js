import requests from './request';

export const test = ()=>{
    // 返回的是promise对象
    return requests({
        url:'/api/user/info',
        method:'get',
        headers:{token:'666666'}
    })
}