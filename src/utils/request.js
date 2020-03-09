import Vue from 'vue'
import axios from 'axios'
import router from '../router'
var url = process.env.NODE_ENV === 'production' ? 'http://570c4e73.nat123.cc:8083/scan' : 'http://570c4e73.nat123.cc:8083/scan' // 172.28.171.64:9090http://47.112.177.59:8306/aircondition
Vue.prototype.$url = url

const service = axios.create({
  baseURL: url,
  withCredentials: true,
  timeout: 120000
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
//  let status = res.status
//  if (status === 2000) {
      return res
//  }
  }
)
export default service
