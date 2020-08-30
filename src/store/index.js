import Vue from 'vue'
import Vuex from 'vuex'
import XEUtils from 'xe-utils/methods'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    userInfo : null
  },
  mutations: {

    setUserValue(state,payload){
      state.userInfo = payload;
      console.log(payload + " type is " + typeof payload)
      localStorage.setItem("userInfo",payload)
    },

    clearUserValue(state){
      state.userInfo = null;
      localStorage.removeItem("userInfo")
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
      console.log("用户信息:" + state.userInfo)
      return state.userInfo;
    },

    getUserName(state,getters){
      let userName = '';


      if(!XEUtils.isEmpty(getters.getUserInfo) && !XEUtils.isUndefined(getters.getUserInfo)){

        console.log(getters.getUserInfo)
        let userInfo = JSON.parse(getters.getUserInfo)
        userName = userInfo.name
      }
      console.log("用户名称:" + userName)
      return userName
    }



  }
})
