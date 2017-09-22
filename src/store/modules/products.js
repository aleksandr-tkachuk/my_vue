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
  allProducts: state => state.all,
  getProductsByCategory: (state, getters) => {
    if (state.currentCategorie !== 0) {
      const product = state.all.find(p => p.categoryId === parseInt(state.currentCategorie))
      let result = {
        id: product.id,
        title: product.title,
        price: product.price
      }
      console.log(state.all)
      console.log(result)
      return result
    } else {
      return state.all
    }
  }
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
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
