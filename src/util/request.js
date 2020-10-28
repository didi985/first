import axios from 'axios'
import store from '../store'

// export default instance;
// instance 新创建的一个axios 赋值给instance
const instance = axios.create({
    // baseURL:'http://127.0.0.1:8888/api/private/v1/',
    baseURL:'https://wap.365msmk.com ',
    timeout: "7000"
})

//让ajax携带cookie
// instance.defaults.withCredentials=true;

// 请求拦截器
instance.interceptors.request.use((config)=>{
   //  const token = sessionStorage.getItem('token')
   //  if (token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
   //      config.headers.authorization = token  //请求头加上token
   //  }

   //  store.state.islod=true
    return config
})

// 响应拦截器
instance.interceptors.response.use((res)=>{
   //  if(res.data.meta.status == 401){
   //      window.sessionStorage.removeItem('token')
   //      router.push('/login')
   //  }
   //  store.state.islod=false
    return res
})

// 将新创建的一个axios导出
export default instance
