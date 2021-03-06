import axios from '~/plugins/axios'

export const state = () => ({
  data: null
})

export const mutations = {
  SET (state, data) {
    state.data = data
  }
}

export const getters = {
  GET (state) {
    return state.data
  }
}

export const actions = {
  async fetch ({ commit }) {
    const posts = await axios.post('/api/posts/get')

    commit('SET', posts.data)
  }
}
