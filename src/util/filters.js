// 这里面写过滤器，一些玩意
import Vue from 'vue';
Vue.filter("timefnxq",function(originval){
    const dt = new Date(originval)
    const yy = dt.getFullYear()
    const mm = (dt.getMonth() +1+'' ).padStart(2,0)
    const dd = (dt.getDate() +'' ).padStart(2,0)
    const hh = (dt.getHours() +'' ).padStart(2,0)
    const ff = (dt.getMinutes() +'' ).padStart(2,0)
    const ss = (dt.getSeconds() +'' ).padStart(2,0)
    return `${yy}年${mm}月${dd}日 ${hh}:${ff}`
  })


  Vue.filter("timetow",function(originval){
    const dt = new Date(originval)
    const yy = dt.getFullYear()
    const mm = (dt.getMonth() +1+'' ).padStart(2,0)
    const dd = (dt.getDate() +'' ).padStart(2,0)
    const hh = (dt.getHours() +'' ).padStart(2,0)
    const ff = (dt.getMinutes() +'' ).padStart(2,0)
    const ss = (dt.getSeconds() +'' ).padStart(2,0)
    return `${yy}.${mm}.${dd} ${hh}:${ff}`
  })

  Vue.filter("timetesev",function(originval){
    const dt = new Date(originval)
    const yy = dt.getFullYear()
    const mm = (dt.getMonth() +1+'' ).padStart(2,0)
    const dd = (dt.getDate() +'' ).padStart(2,0)
    const hh = (dt.getHours() +'' ).padStart(2,0)
    const ff = (dt.getMinutes() +'' ).padStart(2,0)
    const ss = (dt.getSeconds() +'' ).padStart(2,0)
    return `${yy}-${mm}-${dd} ${hh}:${ff}`
  })

