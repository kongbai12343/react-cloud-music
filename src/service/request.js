import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config.js'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})
instance.interceptors.request.use(config => {
  return config
}, err => {
  throw err
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('1111')
        break
      default:
        console.log('222')
    }
  }
  return err
})
export default instance
