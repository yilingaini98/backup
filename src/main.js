import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入elementUI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入默认样式
import './assets/style/default.css'

//引入axios
import axios from "axios"
Vue.prototype.axios=axios;
// axios.defaults.baseURL = "http://192.168.150.188:8080";//接口地址


//引入序列化
import qs from "qs"
Vue.prototype.qs=qs;

//引入mock
import './mock.js'

//路由重定向
//import './permission' // permission control

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
