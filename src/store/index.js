import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    userInfo : null
  },
  mutations: {

    setUserValue(state,payload){
      state.userInfo = payload;
    }
  },
  actions: {
  },
  modules: {
  },

  getters:{


    getUserInfo : (state, getters) => {

      if(state.userInfo === null){
        state.userInfo = localStorage.getItem('userInfo')
      }
      console.log("state.userInfo" + state.userInfo)
      return state.userInfo;
    },

    getUserName(state,getters){
      let userName = JSON.parse(getters.getUserInfo).userInfo.userName
      console.log("用户名称:" + userName)
      return JSON.parse(getters.getUserInfo).userInfo.userName
    }



  }
})
