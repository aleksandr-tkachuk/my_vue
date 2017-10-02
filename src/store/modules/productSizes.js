import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  sizes: []
}

// getters
const getters = {
  allSizes: state => state.sizes
}

// actions
const actions = {
  getAllSizes ({ commit }) {
    shop.getSizes(sizes => {
      commit(types.RECEIVE_SIZES, { sizes })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_SIZES] (state, { sizes }) {
    state.sizes = sizes
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
