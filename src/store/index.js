import {createStore} from 'vuex'

const store = createStore({

  state: {
    page: 'search'
  },
  mutations: {
    changePage(state, new_page){
      state.page = new_page
    }

  },
  getters: {
    currentPage(state){
      return state.page
    }

  },
  actions:{

  }

})

export default store
