/**
 * Created by alex on 22.09.17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
import categories from './modules/productCategories'
import sizes from './modules/productSizes'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products,
    categories,
    sizes
  },
  strict: debug
})
