import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import messages from './js/langs'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Utils from './js/utils.js'
import _ from 'lodash'
import './assets/css/global.css'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1:7001',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
  // options: { path: "/chat" } //Optional options
}))
Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(VueI18n)
Vue.use(ElementUI, { locale })
Vue.use(VueAxios, axios)
let lan;
if(window.localStorage){
  lan=window.localStorage.getItem('lang');
}
if(!lan){
  lan = navigator.language.toLocaleLowerCase()=='zh-cn'?'zh':'en';
  if(window.localStorage){
    window.localStorage.setItem('lang', lan);
  }
}
locale.use(lan==='zh'?zhLocale:enLocale)
const i18n = new VueI18n({
  locale: lan, // set locale
  messages, // set locale messages
  silentTranslationWarn: true,
})
// locale.i18n((key, value) => i18n.t(key, value))

Vue.config.productionTip = false
Vue.prototype.$utils=Utils;
Vue.prototype._=_;

new Vue({
  i18n,
  router,
  store,
  sockets:{
    connect: function(){
      console.log('socket connected');
    },
    res: function(val){
      console.log('received', val);
    }
  },
  render: h => h(App)
}).$mount('#app')
