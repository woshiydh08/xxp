import axios from 'axios'
import { message } from 'ant-design-vue'
import router from '../routes/router'

export const AJAX = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? '//127.0.0.1:8089' : '/xxp'
})

AJAX.interceptors.request.use(config => {
  console.log('请求开始',config)
  // Vue.$vux.loading.show({
  //   text: 'Loading'
  // })
  return config
}, () => {
  // setTimeout(() => {
  //    Vue.$vux.loading.hide();
  //    Vue.$vux.toast.text('加载超时', 'middle')
  // },3000)
  // return Promise.reject(error)

})

AJAX.interceptors.response.use(res => {
  // console.log(res)
  if (res.data.code == '001') {
    // message.error(res.data.msg)
    router.push('/guagua/login')
  }
  if (res.data.code == '-1') {

    message.error(res.data.msg)
    // router.push('/guagua/login')
  }
  if(res.data.code !== '0'){
    return Promise.reject(res.data);
  }
  return res.data
}, () => {
  // message.error('出现未知错误')
})

export const Api = {}


Api.login = data => AJAX.post('/user/login.json', data)
Api.getUserInfo = () => AJAX.get('/user/getUserInfo.json')
// Api.loginout = () => AJAX.get('/user/loginout.json')

// Api.getCoverUploadToken = data => AJAX.get('/qiniu/getCoverUploadToken.json', data)
// Api.getBaseConfig = () => AJAX.get('/qiniu/getBaseConfig.json')
// Api.uploadCache = data => AJAX.get('/qiniu/uploadCache.json', data)
