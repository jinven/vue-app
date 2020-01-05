import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Lang from '../views/Lang.vue'
import ElemeUI from '../views/ElemeUI.vue'
import Home from '../views/Home.vue'
import KeepAlive from '../views/KeepAlive.vue'
import KeepAliveKA from '../views/ka/ka.vue'
import KeepAliveOne from '../views/ka/one.vue'
import KeepAliveTwo from '../views/ka/two.vue'
import KeepAliveSlot from '../views/ka/slot.vue'
import RT from '../views/route/RT.vue'
import Axios from '../views/Axios.vue'
import AxiosLayout from '../components/AxiosLayout.vue'
import Hello from '../views/route/Hello.vue'
import Crypto from '../views/Crypto.vue'
import Emit from '../views/Emit.vue'
import Socket from '../views/Socket.vue'
import store from '../store'
import Utils from '../js/utils'

Vue.use(VueRouter)
function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}

const routes = [
  {
    path: '/',
    name: 'login',
    alias: '/login',
    component: Login
  },
  {
    name: 'lang',
    path: '/lang',
    component: Lang
  },
  {
    path: '/logout',
    redirect: '/'
  },
  {
    path: '/eleme',
    name: 'eleme',
    component: ElemeUI
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/keepalive',
    // name: 'keepalive',
    component: KeepAlive,
    children:[
      {
        path: '/',
        name: 'keepaliveka',
        component: KeepAliveKA
      },
      {
        path: 'one',
        name: 'keepaliveone',
        component: KeepAliveOne
      },
      {
        path: 'one/:id',
        name: 'keepaliveoneid',
        component: KeepAliveOne
      },
      {
        path: 'two',
        name: 'keepalivetwo',
        component: KeepAliveTwo
      },
      {
        path: 'slot',
        name: 'KeepAliveSlot',
        component: KeepAliveSlot
      },
    ]
  },
  {
    path: '/route',
    // name: 'route',
    component: RT,
    beforeEnter: function(to, from, next){
      Utils.log(to);
      Utils.log(from);
      Utils.log(next);
      Utils.log('没有权限');
      next();
    },
    children:[
      { path: '', component: Hello }, // No props, no nothing
      { path: 'hello', component: Hello, props: true }, // Pass route.params to props
      { path: 'hello/:name', component: Hello, props: true }, // Pass route.params to props
      { path: 'static', component: Hello, props: { name: 'world' }}, // static values
      { path: 'dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
      { path: 'attrs', component: Hello, props: { name: 'attrs' }}
    ]
  },
  {
    path: '/axios',
    // name: 'axios',
    alias: '/ajax',
    component: AxiosLayout,
    children:[
      {
        path:'',
        component:Axios
      }
    ]
  },
  {
    path: '/redirect',
    redirect: '/about'
  },
  {
    path: '/crypto',
    component: Crypto
  },
  {
    path: '/emit',
    component: Emit
  },
  {
    path: '/socket',
    component: Socket
  },
  {
    path: '*',
    component: () => import('../components/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
let noLoginPaths=['','/','login','/login','/about'];
router.beforeEach((to, from, next) => {
  Utils.log('beforeEach')
  Utils.log(to)
  Utils.log(from)
  if(!noLoginPaths.includes(to.path)){
    if(!store.state.isLogin){
      alert('未登录');
      next({
        path:'/login',
        props: { message: '请登录', clazz: 'error' }
      })
      return;
    }
  }
  if(to.redirectedFrom=='/logout'){
    Utils.log('logout');
    localStorage.removeItem('IsLogin');
    store.commit('logout');
  }
  next();
});

router.beforeResolve((to, from, next) => {
  /* 必须调用 `next` */
  Utils.log('beforeResolve')
  Utils.log(to)
  Utils.log(from)
  next();
})

router.afterEach((to, from) => {
  Utils.log('afterEach')
  Utils.log(to)
  Utils.log(from)
})

export default router
