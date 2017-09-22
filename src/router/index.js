import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ProductList from '@/components/ProductList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/product-list',
      name: 'ProductList',
      component: ProductList
    }
  ]
})
