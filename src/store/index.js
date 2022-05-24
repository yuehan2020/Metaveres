import { createStore } from 'vuex'

// 小仓库
import musicStore from './music/index'
export default createStore({
  state: {
    defaultText:'我是一个默认文字存在vuex',
    ShowDrawer: false, // 菜单显示
    count:99
  },
  mutations: {
    
    updateShowDrawer (state, payload) {
      state.ShowDrawer = !state.ShowDrawer
    },
    add(state){
      state.count+=1;
    }

  },
  actions: {
  //   updateShowDrawer (context, payload) {
  //     setTimeout(() => {
  //       context.commit('updateShowDrawer', payload)
  //     }, 2000)
  //   }
    // add(){

    // }
  },
  getters:{},
  modules: {
    musicStore
  }
})
