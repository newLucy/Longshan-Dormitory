import Vue from 'vue'
import axios from 'axios'
import router from '../router'
var url = process.env.NODE_ENV === 'production' ? 'http://116.6.120.38:9090/scan' : 'http://116.6.120.38:9090/scan' // 172.28.171.64:9090http://47.112.177.59:8306/aircondition
Vue.prototype.$url = url

const service = axios.create({
  baseURL: url,
  withCredentials: true,
  timeout: 0
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
var t = null
service.interceptors.response.use(
  response => {
  	let res = response.data
      return res
  }
)
export default service
