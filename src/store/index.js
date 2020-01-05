import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let isLogin = false;
if(window.localStorage){
  isLogin = window.localStorage.getItem('IsLogin')=='true';
}

export const mutations = {
  increment: state => state.count++
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    isLogin: isLogin
  },
  getters:{
    isLogin: state => state.isLogin
  },
  mutations: {
    userStatus(state, flag){
      state.isLogin = flag
    },
    logout(state){
      state.isLogin = false;
      localStorage.removeItem('IsLogin');
    }
  },
  actions: {
    userLogin({commit}, flag){
      commit('userStatus', flag)
    }
  },
  modules: {
  }
})
