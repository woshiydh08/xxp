import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js'
import { Api } from './http'
/* ant-design */
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
/* vant */
import Vant from 'vant';
import 'vant/lib/index.css';

/* 适配移动端 */
import 'lib-flexible'

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(Vant);

Vue.prototype.api = Api
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')



// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// });