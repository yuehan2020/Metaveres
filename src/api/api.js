import {requestOfPost} from './common.js'
import {requestOfGet} from './common.js'

export function postRequest(url,data){
    return new Promise((resolve,reject)=>{
        requestOfPost(url,data).then(res=>resolve(res))
    }).catch(error=>reject(error))
}
export function getRequest(url,query){
    return new Promise((resolve,reject)=>{
        requestOfGet(url,query).then(res=>resolve(res))
    }).catch(error=>reject(error))
}