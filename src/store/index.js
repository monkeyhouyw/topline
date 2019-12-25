import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'
// 在vuex中管理token，共享token数据，更好操作，更好监听
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息，包括token
    user: auth.getUser()
  },
  mutations: {

  },
  actions: {
  }
})
