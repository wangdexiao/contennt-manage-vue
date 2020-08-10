import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user : null
  },
  mutations: {

    setUserValue(state,payload){
      state.user = payload;
    }
  },
  actions: {
  },
  modules: {
  },

  getters:{
    userName : (state, getters) => {
      if(state.user === null){
        state.user = JSON.parse(localStorage.getItem('userInfo'))
      }
      return state.user !== null ? '姓名:' + state.user.username : '无名氏'
    }
  }
})
