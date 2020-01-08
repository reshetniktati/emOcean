import { getLikedList } from '@/services/posts'

const getDefaultState = () => {
  return {
    list: []
  }
}

export default {
  actions: {
    clear ({ commit }) {
      commit('clear')
    },
    getLikedList (ctx, videoId) {
      ctx.commit('updateLikedList', getLikedList(videoId))
    }
  },

  mutations: {
    clear (state) {
      Object.assign(state, getDefaultState())
    },
    updateLikedList (state, list) {
      state.list = list
    }
  },

  state: getDefaultState(),

  getters: {
    getLikes (state) {
      return state.list
    }
  }
}
