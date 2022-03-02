import { createStore } from 'vuex'
import {IHomeState} from '@/utils/homeDataType'
import home from './modules/home'
export interface IGlobalState{
  home:IHomeState
}

export default createStore({
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  }
})
