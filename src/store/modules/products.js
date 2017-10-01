/* eslint-disable no-unreachable */
/**
 * Created by alex on 22.09.17.
 */
import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  currentCategorie: 0
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  },
  filterByCategory ({ commit }, payload) {
    console.log(payload)
    shop.getProductsByCategory()
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  },
  [types.UPDATE_CURRENT_CATEGORIE] (state, { category }) {
    state.currentCategorie = category
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
