import requests from './request';

export const test = ()=>{
    // 返回的是promise对象
    return requests({
        url:'',
        method:'get'
    })
}