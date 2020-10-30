import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userModule = {
  state: {
      token:'',
      userInfo:null
  },
  
  mutations: {
    setToken(state,value){
      state.token = value
    },
    userInfo(state,value){
      state.userInfo = value
    }
  },
  getters:{
    token:state=>state.token,
    userInfo:state=>state.userInfo
  },
  actions: {
  }
}
export default userModule
