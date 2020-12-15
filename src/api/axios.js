import Vue from 'vue';
import axios from 'axios';
import store from '@/store';
import router from '@/router';
let instance = axios.create({
    baseURL: process.env.VUE_APP_BASEURL1,
    timeout: 60000,
    headers: { 'X-Requested-With': 'XMLHttpRequest', channel: 3 }
});
instance.interceptors.request.use( (config)=>{
    // Do something before request is sent
    let token = store.state.user.token
    if(token){
        config.headers.authorization = token
    }
    return config;
},  (err) =>{
    // Do something with request error
    console.log('error', error)
    return Promise.reject(error);
});
instance.interceptors.response.use( (res)=> {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    let {msg,code}=res.data || res
    if(code == 1100){
        alert('token失效,请重新登录')
        store.commit('setToken','')
        store.commit('userInfo',null)
        router.replace({
            path:'/login',
            query:{
                replace:router.currentRoute.fullPath
            }
        })
        return;
    }else if(code!=0){
        if(code==999){
          store.commit('setToken','')
          store.commit('userInfo',null)
            router.replace({
                path:'/login',
                query:{
                    replace:router.currentRoute.fullPath
                }
            })
          alert('code:'+code,msg)
        }
        alert('code:'+code,msg)
    }else{
        return res;
    }
}, (err) =>{
    // 对返回的错误进行一些处理
  if (err && err.response) {
    let { status, data } = err.response
    if(data.code=='1001'){
      store.commit('setToken','')
      store.commit('userInfo',null)
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      alert('请登录')
    }
    switch (status) {
      case 400:
        err.message = '请求错误'
        break
      case 40000:
        err.message = '未授权，请登录'
        break
      case 403:
        err.message = '拒绝访问'
        break
      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break
      case 408:
        err.message = '请求超时'
        break
      case 500:
        err.message = '服务器内部错误'
        break
      case 501:
        err.message = '服务未实现'
        break
      case 502:
        err.message = '网关错误'
        break
      case 503:
        err.message = '服务不可用'
        break
      case 504:
        err.message = '网关超时'
        break
      case 505:
        err.message = 'HTTP版本不受支持'
        break
      default:
    }
  }
  return Promise.reject(err)
});
const handle =async (option)=>{
    let res = await instance({
        method: option.method,
        url: option.url,
        data: option.data || {},
        params:option.params ||{},
        headers: option.headers || {}
    })
    return res && res.data ? res.data : res
}
Vue.prototype.$get=async option=>{
    option.method='get'
    let res = await handle(option)
    return res
}
Vue.prototype.$post=async option=>{
    option.method='post'
    let res = await handle(option)
    return res
}