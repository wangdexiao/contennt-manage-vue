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
      console.log(typeof state.user)
      if(state.user === null){
        state.user = JSON.parse(localStorage.getItem('userInfo'))
        console.log(state.user)
      }
      return state.user !== null ? '姓名:' + state.user.username : '无名氏'
    }
  }
})
