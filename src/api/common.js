// 传参处理
import service from './service'

// 接口地址和参数 耦合性低 复用性高
export function requestOfPost(url,data){
    return service.post(url,data)
}
export function requestOfGet(url,params){
    return service.get(url,params)
}