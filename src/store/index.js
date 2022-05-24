import { createStore } from 'vuex'

export default createStore({
  state: {
    ShowDrawer: false // 菜单显示
  },
  mutations: {
    updateShowDrawer (state, payload) {
      state.ShowDrawer = !state.ShowDrawer
    }
  },
  actions: {
  //   updateShowDrawer (context, payload) {
  //     setTimeout(() => {
  //       context.commit('updateShowDrawer', payload)
  //     }, 2000)
  //   }
  },
  getters:{},
  modules: {
  }
})
