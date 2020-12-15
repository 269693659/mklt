import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userModule = {
  state: {
      token:'',
      userInfo:null,
      openId:'',
  },
  
  mutations: {
    setToken(state,value){
      state.token = value
    },
    userInfo(state,value){
      state.userInfo = value
    },
    setOpenId(state,value){
      state.openId = value
    }
  },
  getters:{
    token:state=>state.token,
    userInfo:state=>state.userInfo,
    openId:state=>state.openId
  },
  actions: {
  }
}
export default userModule
