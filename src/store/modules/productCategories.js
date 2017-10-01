import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  categories: []
}

// getters
const getters = {
  allCategories: state => state.categories
}

// actions
const actions = {
  getAllCategories ({ commit }) {
    shop.getCategory(categories => {
      commit(types.RECEIVE_CATEGORIES, { categories })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_CATEGORIES] (state, { categories }) {
    state.categories = categories
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
